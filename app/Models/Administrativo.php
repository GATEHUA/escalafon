<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Administrativo extends Model
{
    use HasFactory;

    public function personal()
    {
        return $this->belongsTo(Personal::class);
    }

    protected $fillable = [
        // 'personal_id',
        'administrativo_t',
        'administrativo_t_nivel',
        'nivel_remunerativo',
    ];
}
