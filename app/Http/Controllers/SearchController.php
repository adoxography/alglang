<?php

namespace App\Http\Controllers;

use App\Modules\SmartSearch\SmartSearch;

class SearchController extends Controller
{
    public function index()
    {
        $searchType = request()->searchType;
        $preset = null;

        if(request()->preset) {
            $preset = str_replace(' ', '\u0020', json_encode(unserialize(request()->preset)));
        }

        return view('search.index', compact('searchType', 'preset'));
    }

    public function general()
    {
        $type = request()->type;
        $lookup = request()->lookup;

        $modelName = "\\App\\$type";
        $model = new $modelName();
        $results = $model->search($lookup)->get();

        $table = strtolower($model->table);

        return view('search/general-results', compact('table', 'results'));
    }

    public function smart()
    {
        return view('search.smart');
    }

    public function smartResults()
    {
        $search = new SmartSearch(request()->lookup ?? "");

        $search->parse();

        return $search->route();
    }
}
