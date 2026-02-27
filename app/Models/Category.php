<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'family_id'
    ];

    //relacion uno a muchos inversa - una categoria pertenece a una familia
    public function family(){

        return $this->belongsTo(Family::class);
    }

    // una categoria tiene muchas subcategorias
    public function subcategories(){

        return $this->hasMany(Subcategory::class);
    }


}



