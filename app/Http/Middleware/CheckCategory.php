<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CheckCategory
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $category = [
            'amar-putusan',
            'alasan',
            'dasar-pemrosesan',
            'pemenuhan-kriteria',
            'unit-organisasi',
            'jenis-ketetapan',
        ];

        if (! in_array($request->kategori, $category)) {
            abort(404);
        }

        return $next($request);
    }
}
