<?php
/**
*
* Show response
* @param object $object_name
* @param any
*
*/

use App\CustomClass\admin_routes;
use Illuminate\Support\Facades\Auth;

if(!function_exists('get_routes')){
    function get_routes(){
        $data = array();
        $url_1 = new admin_routes();
        $url_1->set_route(url('/home'),'Dashboard','mdi-chart-bar', request()->is('home'));

        $data['routes']['url_1'] = $url_1->get_route();

        if(check_user_permission('Items')){
            $url_2 = new admin_routes();
            $url_2->set_route(route('admin_items_index'),'Items','mdi-chart-bar', request()->is('items/*'));

            $data['routes']['url_2'] = $url_2->get_route();
        }

        $url_3 = new admin_routes();
        $url_3->set_route(route('admin_suppliers_index'),'Suppliers','mdi-chart-bar', request()->is('suppliers/*'));

        $data['routes']['url_3'] = $url_3->get_route();

        $url_4 = new admin_routes();
        $url_4->set_route(route('admin_purchase_index'),'Purchase Orders','mdi-chart-bar', request()->is('purchase/*'));

        $data['routes']['url_4'] = $url_4->get_route();

        $url_5 = new admin_routes();
        $url_5->set_route(route('admin_delivery_index'),'Delivery','mdi-chart-bar', request()->is('delivery/*'));

        $data['routes']['url_5'] = $url_5->get_route();

        $url_6 = new admin_routes();
        $url_6->set_route(route('admin_stocks_index'),'Stocks','mdi-chart-bar', request()->is('stocks/*'));

        $data['routes']['url_6'] = $url_6->get_route();

        $url_7 = new admin_routes();
        $url_7->set_route(route('admin_pos_index'),'Point of Sales','mdi-chart-bar', request()->is('pos/*'));

        $data['routes']['url_7'] = $url_7->get_route();

        $data['logout'] = route('logout');

        $data['username'] = Auth::user();
        return $data;
    }
}

if(!function_exists('check_user_permission')){
    function check_user_permission($module){
        $permissions = Auth::user()->permissions;
        $result = false;

        foreach($permissions as $permission){
            $name = $permission['module'];
            $can_access = $permission['can_access'];
            if($name == $module){
                $result = $can_access;
            }
        }
        return $result;
    }
}