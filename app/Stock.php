<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Stock extends Model
{
    public function item(){
        return $this->belongsTo(Item::class,'item_id');
    }

}
