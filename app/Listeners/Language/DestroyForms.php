<?php

namespace App\Listeners\Language;

use App\Events\Language\Deleting;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DestroyForms
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
     * @param  LanguageDeleting  $event
     * @return void
     */
    public function handle(Deleting $event)
    {
        $language = $event->language;
        $forms    = $language->forms;

        if(count($forms) > 0) {
            foreach ($forms as $form) {
                $form->delete();
            }
        }
    }
}