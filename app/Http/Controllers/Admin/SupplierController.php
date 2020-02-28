<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Supplier;
class SupplierController extends Controller
{
    public function index(){
        return view('admin.suppliers');
    }

    public function show(){
        $data = Supplier::all();
        return response()->json($data);
    }

    public function store(Request $request){
        $input = $request->all();
        $supplier = new Supplier();
        $supplier->name = $input['name'];
        $supplier->address = $input['address'];
        $supplier->telephone = $input['telephone'];
        $supplier->email = $input['email'];
        $supplier->tin = $input['tin'];
        $supplier->mobile = $input['mobile'];
        $supplier->contact_person = $input['contact_person'];
        $supplier->save();
    }

    public function update(Request $request){
        $input = $request->all();
        $supplier = Supplier::find($input['id']);
        $supplier->name = $input['name'];
        $supplier->address = $input['address'];
        $supplier->telephone = $input['telephone'];
        $supplier->email = $input['email'];
        $supplier->tin = $input['tin'];
        $supplier->mobile = $input['mobile'];
        $supplier->contact_person = $input['contact_person'];
        $supplier->update();
    }

    public function supplier_select(){
        $data = Supplier::all();
        $supplier = [];
        foreach($data as $row){
            $supplier[] = array(
                'text' => $row['name'],
                'value' => $row['id']
            );
        }
        return response()->json($supplier);
    }
}
