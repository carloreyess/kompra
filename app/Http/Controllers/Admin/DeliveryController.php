<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PurchaseOrder;
use App\PurchaseItem;
use App\Item;
use App\Stock;
use App\StocksHistory;
use App\Year;
use App\DeliveryHistory;
use Illuminate\Support\Facades\Auth;
class DeliveryController extends Controller
{
    public function index(){
        return view('admin.delivery');
    }
    public function show(){
        $data = PurchaseOrder::all();
        $purchase = [];
        foreach($data as $row){
            $purchase[] = array(
                'po_id'=>$row['po_id'],
                'supplier'=>$row['supplier'],
                'description'=>$row['description'],
                'delivery_date'=>$row['delivery_date'],
                'delivery_person'=>$row['delivery_person'],
                'remarks'=>$row['remarks'],
                'created_at'=>$row['created_at'],
                'items'=>$this->getItems($row['po_id']),
            );
        }
        return response()->json($purchase);
    }

    private function getItems($po_id){
        $data = PurchaseItem::where('po_id', $po_id)
        ->get();
        return $data;
    }

    public function delivery_items($po_id){
        $data = PurchaseItem::where('po_id', $po_id)
        ->get();
        $details = [];
        foreach($data as $row){
            $details[] = array(
                'id'=>$row['id'],
                'item_id'=>$row['item_id'],
                'name'=>$this->getItemName($row['item_id']),
                'description'=>$row['description'],
                'quantity'=>$row['quantity'],
                'remaining_qty'=>$row['remaining_qty'],
                'unit_cost'=>$row['unit_cost'],
                'unit_price'=>$row['unit_price'],
                'ordered_qty'=>0,
            );
        }
        return response()->json($details);
    }

    public function store(Request $request){
        $input = $request->all();
        $items = $input['items'];

        foreach($items as $row){
            $checker = $this->checkStocks($row['item_id'], Auth::user()->branch_id);
            $stocks_details = $this->getStocksDetails($row['item_id'], Auth::user()->branch_id);
            //DEDUCTING OF STOCKS
            $purchase = PurchaseItem::find($row['id']);
            $purchase->remaining_qty = $row['remaining_qty'] - $row['ordered_qty'];
            $purchase->update();

            //STORING IN DELIVERY HISTORY
            $delivery_history = new DeliveryHistory();
            $delivery_history->branch_id = Auth::user()->branch_id;
            $delivery_history->dr_no = $input['dr_no'];
            $delivery_history->po_id = $input['po_id'];
            $delivery_history->item_id = $row['item_id'];
            $delivery_history->current_qty = $row['remaining_qty'];
            $delivery_history->ordered_qty = $row['ordered_qty'];
            $delivery_history->remaining_qty = $row['remaining_qty'] - $row['ordered_qty'];
            $delivery_history->received_by = $input['received_by'];
            $delivery_history->delivered_by = $input['delivered_by'];
            $delivery_history->delivery_date = $input['delivery_date'];
            $delivery_history->save();

            if($checker){
                // UPDATING STOCKS IF IT'S ALREADY EXISTS
                $stocks = Stock::where('id', $stocks_details['id'])
                ->first();
                $stocks->stocks = $stocks_details['stocks'] + $row['ordered_qty'];
                $stocks->nature_stocks = 'Purchase';
                $stocks->update();
            }else{
                // ADDING NEW STOCKS
                $stocks = new Stock();
                $stocks->branch_id = Auth::user()->branch_id;
                $stocks->po_id = $input['po_id'];
                $stocks->item_id = $row['item_id'];
                $stocks->stocks = $row['ordered_qty'];
                $stocks->nature_stocks = "Purchase";
                $stocks->save();


            }
             //STOCK HISTORY
             $stock_history = new StocksHistory();
             $stock_history->stock_id = $stocks->id;
             $stock_history->branch_id = Auth::user()->branch_id;
             $stock_history->item_id = $row['item_id'];
             $stock_history->quantity = $row['ordered_qty'];
             $stock_history->stocks = $stocks_details['stocks']+$row['ordered_qty'];
             $stock_history->status = "Purchase";
             $stock_history->save();
        }

    }

    private function checkStocks($item_id, $branch_id){
        $count = Stock::where('item_id', $item_id)
        ->where('branch_id', $branch_id)
        ->get()
        ->count();
        return $count;
    }

    private function getStocksDetails($item_id, $branch_id){
        $data = Stock::where('item_id', $item_id)
        ->where('branch_id', $branch_id)
        ->first();
        return $data;
    }

    private function getItemName($item_id){
        $data = Item::find($item_id);
        return $data['name']." ".$data['size']." ".$data['color'];
    }


}
