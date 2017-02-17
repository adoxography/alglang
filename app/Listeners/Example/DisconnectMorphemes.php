<?php

namespace App\Listeners\Example;

use App\Events\Example\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DisconnectMorphemes
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  Deleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $form = $event->model;
        $form->morphemes()->detach();
    }
}