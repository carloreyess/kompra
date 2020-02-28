<?php

namespace App\Http\Middleware;

use Closure;

class CheckPermission
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next, $module)
    {
        $check_permission = check_user_permission($module);
        if($check_permission){
            return $next($request);
        }else{
            return abort(403);
        }
    }
}
