<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Stock;
use App\Item;
use App\StocksHistory;
class StocksController extends Controller
{
    public function index(){
        return view('admin.stocks');
    }

    public function store(Request $request){
        $input = $request->all();
        if($input['existing']){
            $stocks_details = $this->getStocksDetails($input['item_id'], Auth::user()->branch_id);
            $stocks = Stock::where('item_id', $input['item_id'])
            ->first();
            $stocks->increment('stocks',$input['quantity']);
            $stocks->update();

            $history = new StocksHistory();
            $history->stock_id = $stocks->id;
            $history->branch_id = Auth::user()->branch_id;
            $history->item_id = $input['item_id'];
            $history->stocks = $stocks_details['stocks'] + $input['quantity'];
            $history->quantity = $input['quantity'];
            $history->status = 'Old Stocks';
            $history->save();

        }else{
            $stocks = new Stock();
            $stocks->branch_id = Auth::user()->branch_id;
            $stocks->item_id = $input['item_id'];
            $stocks->stocks = $input['quantity'];
            $stocks->nature_stocks = 'Old Stocks';
            $stocks->save();

            $history = new StocksHistory();
            $history->stock_id = $stocks->id;
            $history->branch_id = Auth::user()->branch_id;
            $history->item_id = $input['item_id'];
            $history->stocks = 0;
            $history->quantity = $input['quantity'];
            $history->status = 'Old Stocks';
            $history->save();

        }
    }

    public function show(){
        $data = Stock::with('item')
        ->where('branch_id', Auth::user()->branch_id)
        ->get();
        $stocks = [];
        foreach($data as $row){
            $stocks[] = array(
                'id'=> $row['id'],
                'item_id'=> $row['item_id'],
                'item'=> $row->item->name." ".$row->item->size." ".$row->item->color,
                'image'=> $row->item->image,
                'stocks'=> $row['stocks'],
                'nature_stocks'=> $row['nature_stocks'],
                'updated_at'=> $row['updated_at'],

            );
        }
        return response()->json($stocks);
    }

    public function stock_items(){
        $data = Stock::with('item')
        ->leftJoin('items','items.id','=','stocks.item_id')
        ->where('branch_id', Auth::user()->branch_id)
        ->groupBy('items.code')
        ->get();
        $stocks = [];
        foreach($data as $row){
            $stocks[] = array(
                'id'=> $row['id'],
                'item_id'=> $row['item_id'],
                'item'=> $row->item->name,
                'category'=> $row->item->category_id,
                'image'=> $row->item->image,
                'color'=> $row->item->color,
                'size'=> $row->item->size,
                'code'=> $row->item->code,
                'stocks'=> $row['stocks'],
                'nature_stocks'=> $row['nature_stocks'],
                'updated_at'=> $row['updated_at'],
                'items'=>$this->getItems($row->item->code)

            );
        }
        return response()->json($stocks);
    }

    private function getItems($code){
        $data = Item::select('item_details.unit_cost', 'item_details.unit_price', 'items.size', 'items.name', 'items.description', 'items.color', 'items.id')
        ->leftJoin('item_details','item_details.item_id','=','items.id')
        ->where('items.code', $code)
        ->get();
        $items = [];
        foreach($data as $row){
            $items[] = array(
                'item_id'=>$row['id'],
                'unit_cost'=>$row['unit_cost'],
                'unit_price'=>$row['unit_price'],
                'size'=>$row['size'],
                'name'=>$row['name'],
                'description'=>$row['description'],
                'color'=>$row['color'],
                'quantity'=>1,
                'discount'=>0
            );
        }
        return $items;
    }

    private function getStocksDetails($item_id, $branch_id){
        $data = Stock::where('item_id', $item_id)
        ->where('branch_id', $branch_id)
        ->first();
        return $data;
    }

}
