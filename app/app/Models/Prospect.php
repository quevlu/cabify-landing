<?php

namespace App\Models;

use App\Events\ProspectCreated;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Prospect extends Model
{
    use HasFactory;

    public $table = 'prospects';
    protected $fillable = [
        'name',
        'lastname',
        'email',
    ];

    protected $dispatchesEvents = [
        'saved' => ProspectCreated::class,
    ];
}
