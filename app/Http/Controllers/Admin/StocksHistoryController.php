<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\StocksHistory;
class StocksHistoryController extends Controller
{
    public function history($id){
        $data = StocksHistory::where('id', $id)
        ->with('item')
        ->where('branch_id', Auth::user()->branch_id)
        ->get();
        dd($id);
        // $history = [];
        // foreach($data as $row){
        //     $history[] = array(
        //         'item'=>$row->item->name." ".$row->item->size." ".$row->item->color,
        //         'stocks'=>$row['stocks'],
        //         'quantity'=>$row['quantity'],
        //         'status'=>$row['status'],
        //         'updated_at'=>$row['updated_at'],
        //     );
        // }
        // return response()->json($history);
    }
}
