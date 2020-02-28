<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Category;
use App\SubCategory;

class CategoryController extends Controller
{
    public function index(){
        $data = Category::all();
        $categories = [];
        foreach($data as $row){
            $categories[] = array(
                'label' => $row['name'],
                'value' => $row['id']
            );
        }
        return response()->json($categories);
    }

    public function sub_category($id){
        $data = SubCategory::where('category_id', $id)->get();
        $sub_categories = [];
        foreach($data as $row){
            $sub_categories[] = array(
                'label' => $row['name'],
                'value' => $row['id']
            );
        }
        return response()->json($sub_categories);
    }
}
