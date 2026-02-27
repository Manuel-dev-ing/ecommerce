<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'type'
    ];

    public function products(){
        return $this->belongsToMany(Product::class)
                ->using(OptionProduct::class)
                ->withPivot('features')// obtengo la columna features de la tabla intermedia
                ->withTimestamps();
    
    }

    //relacion uno a muchos - una option tiene muchos features
    public function features(){

        return $this->hasMany(Feature::class);
    }

}
