<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Item;
use App\Year;
use App\ItemDetail;
use App\Supplier;
use App\Stock;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
class ItemsController extends Controller
{
    public function index(){
        return view('admin.items');
    }

    public function show(){
        $data = Item::select('id','name','code','size','color','description','image','supplier','created_at','category_id')
         ->groupBy('items.code')
         ->get();
        $details = [];
        foreach($data as $row){
            $details[] = array(
                'id'=>$row['id'],
                'code'=>$row['code'],
                'color'=>$row['color'],
                'name'=>$row['name'],
                'description'=>$row['description'],
                'image'=>$row['image'],
                'supplier'=>$this->getSupplier($row['supplier']),
                'created_at'=>$row['created_at'],
                'category_id'=>$row['category_id'],
                'items'=>$this->getItems($row['code'])
            );
        }
        return response()->json($details);
    }

    private function getItems($code){
        $data = Item::select('item_details.unit_cost', 'item_details.unit_price', 'items.size', 'items.name', 'items.description', 'items.color', 'items.id')
        ->leftJoin('item_details','item_details.item_id','=','items.id')
        ->where('items.code', $code)
        ->get();
        return $data;
    }

    public function item_details($item_id){
        $data = ItemDetail::where('item_id', $item_id)
        ->first();
        $items = [];
        $items = array(
            'unit_cost'=>$data['unit_cost'],
            'unit_price'=>$data['unit_price'],
            'existing'=>$this->is_existing($data['item_id'])
        );
        return response()->json($items);
    }

    private function is_existing($item_id){
        $count = Stock::where('item_id', $item_id)
        ->where('branch_id',Auth::user()->branch_id)
        ->get()
        ->count();
        return $count;
    }

    public function supplier_items($supplier_id){
        $data = Item::select('items.id','items.name','items.size','items.color', 'items.id', 'item_details.unit_cost', 'item_details.unit_price')
        ->leftJoin('item_details', 'item_details.item_id', '=', 'items.id')
        ->where('items.supplier', $supplier_id)

        ->get();
        $details = [];
        foreach($data as $row){
            $details[] = array(
                'item_id'=>$row['id'],
                'label'=>$row['name']." ".$row['size']." ".$row['color'],
                'value'=>$row['id'],
                'quantity'=>'',
                'description'=>'',
                'unit_cost'=>$row['unit_cost'],
                'unit_price'=>$row['unit_price'],
                'sub_total'=>'',
            );
        }
        return response()->json($details);
    }

    public function store(Request $request){
        $data = $request->all();
        $sizes = json_decode($data['selected_sizes'], true);
        $year = Year::find(1);

        if($data['category'] == 4){

            foreach($sizes as $size){

                $item = new Item();
                $item->name = $data['name'];
                $item->code = $data['code'];
                $item->category_id = $data['category'];
                $item->sub_category_id = $data['sub_category'];
                $item->size = $size['value'];
                $item->supplier = $data['supplier'];
                $item->gender = $data['gender'];
                $item->color = $data['color'];
                $item->description = $size['description'];

                if($data['photo']!="null"){
                    if($file = $request->photo){
                        $path = Storage::disk('s3')->put('items', request()->file('photo'), 'public');
                        $item->image =  env('AWS_URL').'/'.$path;
                    }
                }
                $item->save();

                $item_detail = new ItemDetail();
                $item_detail->item_id = $item->id;
                $item_detail->unit_cost = $size['unit_cost'];
                $item_detail->unit_price = $size['unit_price'];
                $item_detail->year = $year['year'];
                $item_detail->save();
            }
        }else{

            $item = new Item();
                $item->name = $data['name'];
                $item->code = $data['code'];
                $item->category_id = $data['category'];
                $item->sub_category_id = $data['sub_category'];
                $item->supplier = $data['supplier'];
                $item->description = $data['description'];
                if($data['photo']!="null"){
                    if($file = $request->photo){
                        $path = Storage::disk('s3')->put('items', request()->file('photo'), 'public');
                        $item->image =  env('AWS_URL').'/'.$path;
                    }
                }
                $item->save();

                $item_detail = new ItemDetail();
                $item_detail->item_id = $item->id;
                $item_detail->unit_cost = $data['unit_cost'];
                $item_detail->unit_price = $data['unit_price'];
                $item_detail->year = $year['year'];
                $item_detail->save();
        }

        return response()->json($data);
    }

    public function select_items(){
        $data = Item::all();
        $items = [];
        foreach($data as $row){
            $items[] = array(
                'label'=>$row['name']." ".$row['size']." ".$row['color'],
                'value'=>$row['id']
            );
        }
        return response()->json($items);
    }

    private function getSupplier($id){
        $data = Supplier::find($id);
        return $data['name'];
    }

    public function show_details($code){
        $data = Item::select('items.code','items.category_id','items.description','items.name', 'items.color', 'items.size', 'item_details.unit_price','item_details.unit_cost')
        ->leftJoin('item_details','item_details.item_id','=','items.id')
        ->where('items.code', $code)
        ->get();
        return response()->json($data);
    }


}
