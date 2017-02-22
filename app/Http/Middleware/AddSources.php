<?php

namespace App\Http\Middleware;

use Closure;

class AddSources
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $model)
    {
        $response = $next($request);

        $instantiatedModel = call_user_func($model . '::find', $response->getContent());
        // $model = ($model)::find($response->getContent());
        $sources = $request->sources;

        $instantiatedModel->connectSources($sources);

        return $response;
    }
}
