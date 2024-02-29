<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Models\UserDetail;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class AuthenticatedSessionController extends Controller
{
    /**
     * Display the login view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Login', [
            'canResetPassword' => Route::has('password.request'),
            'status' => session('status'),
        ]);
    }

    /**
     * Handle an incoming authentication request.
     */
    //    public function store(LoginRequest $request): RedirectResponse
    //    {
    //        $request->authenticate();
    //
    //        $request->session()->regenerate();
    //
    //        return redirect()->intended(RouteServiceProvider::HOME);
    //    }

    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'user_ip' => ['required'],
            'password' => ['required'],
        ]);

        // Key unik untuk Rate Limiter berdasarkan NIP
        $throttleKey = $request->input('user_ip').'|'.$request->ip();

        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn($throttleKey);

            throw ValidationException::withMessages([
                'user_ip' => ["Terlalu banyak percobaan login. Silakan coba lagi dalam $seconds detik."],
            ]);
        }

        $userDetail = UserDetail::where('ip', $request->user_ip)->first();

        if (! $userDetail || ! Auth::attempt(['id' => $userDetail->user_id, 'password' => $request->password], $request->filled('remember'))) {
            RateLimiter::hit($throttleKey, 60); // Tambahkan percobaan dan atur timeout

            throw ValidationException::withMessages([
                'user_ip' => ['IP atau Password tidak cocok.'],
            ]);
        }

        RateLimiter::clear($throttleKey); // Bersihkan rate limiter jika login sukses

        return redirect()->intended(RouteServiceProvider::HOME);
    }

    /**
     * Destroy an authenticated session.
     */
    public function destroy(Request $request): RedirectResponse
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return redirect('/');
    }
}
