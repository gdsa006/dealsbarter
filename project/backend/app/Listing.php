<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['title', 'user_type', 'business_type', 'description', 'posted_by', 'subcategory_id', 'subcategory2_id', 'slug', 'user_id', 'approved'];

    public function images()
    {
        return $this->hasMany(ListingImage::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
}
