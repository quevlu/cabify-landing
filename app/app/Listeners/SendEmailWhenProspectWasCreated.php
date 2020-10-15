<?php

namespace App\Listeners;

use App\Mail\ProspectedCreated;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;

class SendEmailWhenProspectWasCreated
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle($event)
    {
        Mail::to($event->model->email)->send(new ProspectedCreated);

        Log::info('The mail has been sent');
    }
}
