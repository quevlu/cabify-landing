<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProspect;
use App\Repositories\ProspectRepository;

class ProspectContorller extends Controller
{
    protected $repository;

    public function __construct(ProspectRepository $repository)
    {
        $this->repository = $repository;
    }

    public function store(StoreProspect $request)
    {
        return $this->repository->create($request->only('name', 'lastname', 'email'));
    }
}
