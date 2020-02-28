<?php

namespace App\CustomClass;

class admin_routes{
    public $url;
    public $name;
    public $is_active;
    public $icon;

    function set_route($url, $name, $icon, $is_active){
        $this->url = $url;
        $this->name = $name;
        $this->icon = $icon;
        $this->is_active = $is_active;
    }

    function get_route(){
        $data['url'] = $this->url;
        $data['name'] = $this->name;
        $data['icon'] = $this->icon;
        $data['is_active'] = $this->is_active;
        return $data;
    }
}