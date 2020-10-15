<?php

namespace App\Repositories;

use Prettus\Repository\Eloquent\BaseRepository;

class ProspectRepository extends BaseRepository
{
    public function model()
    {
        return "App\\Models\\Prospect";
    }
}
