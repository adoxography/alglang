<?php

namespace App\Http\Controllers;

use App\Form;
use App\Mode;
use JavaScript;
use App\Http\Requests;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Artisan;

class SandboxController extends Controller
{
    
    public function index(){

        $hashTable = new \App\HashTable();

        $forms = Form::with([
            'language.group',
            'formType.mode',
            'formType.formClass',
            'formType.order',
            'formType.subject',
            'formType.primaryObject',
            'formType.secondaryObject',
            'morphemes' => function ($query) {
                $query->orderBy('position');
            },
            'morphemes.gloss',
            'morphemes.slot'
        ])->whereHas('formType', function($query) {
            $query->where('isNegative', 0)
                  ->where('isDiminutive', 0)
                  ->where('isAbsolute', null)
                  ->where('primaryObject_id', null)
                  ->where('secondaryObject_id', null);
        })->get();

        $newData = new Cell();

        foreach($forms as $form) {
            $newData->insert($form, ['language', 'formType.order', 'formType.mode']);
        }

        // dd($data->search(1)->getData());

        $formTypes = $forms->pluck('formType');

        $languageDictionary = $forms->pluck('language')->unique();
        $orderDictionary  = $formTypes->pluck('order')->unique();
        $modeDictionary   = $formTypes->pluck('mode')->unique();

        $classDictionary = $formTypes->pluck('formClass')->unique();
        $numberDictionary = [
            '0' => '',
            '1' => 's',
            '2' => 'd',
            '3' => 'p'
        ];
        $personDictionary = [
            '0' => '0',
            '1' => '1',
            '2' => '2',
            '3' => '3',
            '4' => '21',
            '5' => 'X'
        ];

        $obvDictionary = [
            '0' => '',
            '1' => '\'',
            '2' => '\'\''
        ];


        $subjects = $formTypes->pluck('subject')->unique();

        $data = [];
        $rows = [];

        foreach($forms as $form) {
            $formType = $form->formType;

            $hashTable->insert($form);

            $data[$form->language_id][$formType->order_id][$formType->mode_id] = null;

            $rows[$formType->formClass->id][$formType->subject->getPersonCode()][$formType->subject->getNumberCode()] = null;
        }

        foreach($rows as $class => $persons) {
            foreach($persons as $person => $numbers) {
                if(count($numbers) > 1) {
                    $keys = array_keys($numbers);

                    if($keys[0] == '0') {
                        unset($rows[$class][$person][0]);
                    }
                }
            }
        }
        // dd($rows);

    	return view('sandbox', compact('data', 'newData', 'rows', 'hashTable', 'languageDictionary', 'orderDictionary', 'modeDictionary', 'classDictionary', 'numberDictionary', 'personDictionary', 'obvDictionary'));
    }

    public function store(){
    	$this->validate(request(), [
    		'name' => 'required',
    		'description' => 'required'
    	]);

    	$mode = new Mode();
    	$mode->name = request('name');
    	$mode->description = request('description');
    	$mode->save();

    	return ['message' => "{$mode->id} successfully created."];
    }
    
    
}

class Cell {
    protected $array;
    protected $data;

    public function __construct()
    {
        $array = [];
        $data = null;
    }

    public function insert(Form $form, $fields, $data = null, $index = 0)
    {
        $this->data = $data;

        if($index < count($fields)) {
            $parsedFields = explode('.', $fields[$index]);
            $nextField = $form;

            foreach($parsedFields as $field) {
                $nextField = $nextField[$field];
            }

            if(!isset($this->array[$nextField->id])) {
                $this->array[$nextField->id] = new Cell();
            }

            $this->array[$nextField->id]->insert($form, $fields, $nextField, $index+1);
        }
    }

    public function search($index)
    {
        return $this->array[$index];
    }

    public function getData()
    {
        return $this->data;
    }
}