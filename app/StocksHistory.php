<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class StocksHistory extends Model
{
    protected $table = 'stocks_history';
    public function item(){
        return $this->belongsTo(Item::class,'item_id');
    }
}
