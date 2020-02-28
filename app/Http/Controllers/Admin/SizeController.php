<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Size;
class SizeController extends Controller
{
    public function sizes(){
        $data = Size::all();
        $sizes = [];
        foreach($data as $row){
            $sizes[] = array(
                'label' => $row['size'],
                'value' => $row['size'],
                'unit_cost' => $row['unit_cost'],
                'unit_price' => $row['unit_price'],
                'description' => $row['description'],
            );
        }
        return response()->json($sizes);
    }
}
