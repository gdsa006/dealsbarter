<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Listing extends Model
{
    protected $fillable = ['title', 'user_type', 'business_type', 'description', 'posted_by'];

    public function images()
    {
        return $this->hasMany(ListingImage::class);
    }

    public function subcategory()
    {
        return $this->belongsTo(Subcategory::class);
    }
}
