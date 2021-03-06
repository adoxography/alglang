<?php

namespace App\Http\Controllers\Nominals;

use App\Models\Nominals\Form;
use App\Http\Controllers\Controller;

class FormShowController extends Controller
{
    public function basicDetails(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'structure.paradigm',
            'structure.nominalFeature',
            'structure.pronominalFeature',
            'sources',
            'morphemes',
            'examples',
            'parent',
            'parent.language',
            'parent.morphemes'
        ]);

        return view('nominals.forms.show.basic', compact('form'));
    }

    public function cognates(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'parent',
            'parent.language',
            'children',
            'children.language'
        ]);

        return view('nominals.forms.show.cognates', compact('form'));
    }

    public function log(Form $nominalForm)
    {
        $form = $nominalForm->load([
            'language',
            'revisionHistory'
        ]);

        return view('nominals.forms.show.log', compact('form'));
    }
}
