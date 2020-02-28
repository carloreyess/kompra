<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\PurchaseOrder;
use App\PurchaseItem;
use App\Year;
use Illuminate\Support\Facades\Auth;
class PurchaseOrderController extends Controller
{
    public function index(){
        return view('admin.purchase');
    }

    public function show(){
        $data = PurchaseOrder::where('branch_id', Auth::user()->branch_id)
        ->get();
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

    public function store(Request $request){
        $input = $request->all();
        $items = $input['selected_items'];
        $year = Year::find(1);
        $purchase = new PurchaseOrder();
        $purchase->po_id = $input['po_id'];
        $purchase->branch_id = Auth::user()->branch_id;
        $purchase->supplier = $input['supplier'];
        $purchase->description = $input['description'];
        $purchase->delivery_date = $input['expected_delivery_date'];
        $purchase->remarks = $input['remarks'];
        $purchase->year = $year->year;
        $purchase->save();
        foreach($items as $row){
            $details = new PurchaseItem();
            $details->po_id = $input['po_id'];
            $details->item_id = $row['item_id'];
            $details->quantity = $row['quantity'];
            $details->remaining_qty = $row['quantity'];
            $details->description = $row['description'];
            $details->unit_cost = $row['unit_cost'];
            $details->unit_price = $row['unit_price'];
            $details->save();
        }
    }

    public function select_purchase(){
        $data = PurchaseOrder::where('branch_id', Auth::user()->branch_id)
        ->get();
        $details = [];
        foreach($data as $row){
            $details[] = array(
                'label'=>$row['po_id'],
                'value'=>$row['po_id'],
            );
        }
        return response()->json($details);
    }
}
