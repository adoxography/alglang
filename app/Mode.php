<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mode extends Model
{
    public $table = 'Modes';
    protected $fillable = [
            'name',
            'description'
    ];
}
