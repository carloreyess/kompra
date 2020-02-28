<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class AccessLevel extends Model
{
    protected $casts = [
        'permissions' => "array",
        'dashboards' => "array",
    ];
}
