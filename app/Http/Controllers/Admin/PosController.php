<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\SalesInvoice;
use App\PaymentHistory;
use App\StocksHistory;
use App\SalesDetail;
use App\Stock;
use Illuminate\Support\Facades\Auth;
class PosController extends Controller
{
    public function index(){
        return view('admin.pos');
    }

    public function store(Request $request){
        $input = $request->all();
        $selected = $input['selected_items'];

        $sales = new SalesInvoice();
        $sales->branch_id = Auth::user()->branch_id;
        $sales->student = $input['student_id'];
        $sales->payment_method = $input['payment_type'];
        $sales->amount_paid = $input['amount_paid'];
        $sales->check_no = $input['check_no'];
        $sales->bank_name = $input['bank_name'];
        $sales->save();

        $history = new PaymentHistory();
        $history->sales_id = $sales->id;
        $history->amount_paid = $input['amount_paid'];
        $history->save();

        foreach($selected as $row){
            $stocks_details = $this->getStocksDetails($row['item_id'], Auth::user()->branch_id);

            $stocks = Stock::where('item_id', $row['item_id'])
            ->where('branch_id', Auth::user()->branch_id)
            ->first();
            $stocks->decrement('stocks', $row['quantity']);
            $stocks->update();

            $stock_history = new StocksHistory();
            $stock_history->stock_id = $stocks_details['id'];
            $stock_history->branch_id = Auth::user()->branch_id;
            $stock_history->item_id = $row['item_id'];
            $stock_history->quantity = $row['quantity'];
            $stock_history->stocks = $stocks_details['stocks'] - $row['quantity'];
            $stock_history->status = 'Sold';
            $stock_history->save();

            $sales = new SalesDetail();
            $sales->sales_id = $sales->id;
            $sales->item_id = $row['item_id'];
            $sales->quantity = $row['quantity'];
            $sales->unit_price = $row['unit_price'];
            $sales->save();
        }
    }

    private function getStocksDetails($item_id, $branch_id){
        $data = Stock::where('item_id', $item_id)
        ->where('branch_id', $branch_id)
        ->first();
        return $data;
    }

}
