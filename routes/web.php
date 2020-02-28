<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::group(['prefix'=>'items','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\ItemsController@index')->name('admin_items_index')->middleware(['check_permission:Items']);
    Route::post('store', 'Admin\ItemsController@store');
    Route::get('sizes','Admin\ItemsController@sizes');
    Route::get('show','Admin\ItemsController@show');
    Route::get('supplier-items/{id}','Admin\ItemsController@supplier_items');
    Route::get('select-items','Admin\ItemsController@select_items');
    Route::get('item-details/{id}','Admin\ItemsController@item_details');
    Route::get('show-details/{code}','Admin\ItemsController@show_details');
});

Route::group(['prefix'=>'suppliers','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\SupplierController@index')->name('admin_suppliers_index');
    Route::get('show', 'Admin\SupplierController@show');
    Route::post('store', 'Admin\SupplierController@store');
    Route::post('update', 'Admin\SupplierController@update');
    Route::get('supplier-select','Admin\SupplierController@supplier_select');
});

Route::group(['prefix'=>'purchase','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\PurchaseOrderController@index')->name('admin_purchase_index');
    Route::post('store', 'Admin\PurchaseOrderController@store');
    Route::get('show', 'Admin\PurchaseOrderController@show');
    Route::get('select-purchase', 'Admin\PurchaseOrderController@select_purchase');
});

Route::group(['prefix'=>'delivery','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\DeliveryController@index')->name('admin_delivery_index');
    Route::get('show', 'Admin\DeliveryController@show');
    Route::get('delivery-items/{id}', 'Admin\DeliveryController@delivery_items');
    Route::post('store', 'Admin\DeliveryController@store');
});


Route::group(['prefix'=>'stocks','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\StocksController@index')->name('admin_stocks_index');
    Route::get('show', 'Admin\StocksController@show');
    Route::post('store', 'Admin\StocksController@store');
    Route::get('stock-items', 'Admin\StocksController@stock_items');
});

Route::group(['prefix'=>'pos','middleware'=>['auth']], function(){
    Route::get('index', 'Admin\PosController@index')->name('admin_pos_index');
    Route::post('store', 'Admin\PosController@store');
});

Route::prefix('students')->group(function() {
    Route::get('select-students','Admin\StudentController@select_students');

});


Route::group(['prefix'=>'stocks_history','middleware'=>['auth']], function(){
    Route::get('history/{id}', 'Admin\StocksHistoryController@history');
});

Route::prefix('categories')->group(function() {
    Route::get('index','Admin\CategoryController@index');
    Route::get('sub-category/{id}','Admin\CategoryController@sub_category');
});

Route::prefix('sizes')->group(function() {
    Route::get('sizes','Admin\SizeController@sizes');
});

