<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    
    use HasFactory;

    protected $fillable = [
        'sku',
        'name',
        'description',
        'image_path',
        'price',
        'subcategory_id',
        'status'
    ];

    //un producto le pertenece a una subcategoria
    public function subcategory(){

        return $this->belongsTo(Subcategory::class);
    }

    //un producto pertenece o tiene muchas variantes
    public function variants(){

        return $this->hasMany(Variant::class);
    }

    //relacion muchos a muchos con la entidad options 
    public function options(){
        return $this->belongsToMany(Option::class)
                    ->using(OptionProduct::class)
                    ->withPivot('features')
                    ->withTimestamps();

    }


}
