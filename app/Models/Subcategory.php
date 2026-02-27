<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subcategory extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'category_id'
    ];

    //una subcategoria pertenece a una categoria
    public function category(){

        return $this->belongsTo(Category::class);
    }

    //una subcategoria pertenece o tiene muchos productos
    public function products(){

        return $this->hasMany(Product::class);
    }
}
