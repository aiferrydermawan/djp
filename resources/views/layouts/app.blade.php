<!DOCTYPE html>
<html lang="{{ str_replace("_", "-", app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="csrf-token" content="{{ csrf_token() }}" />

        <title>{{ config("app.name", "Laravel") }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net" />
        <!-- Scripts -->
        @vite(["resources/css/app.css", "resources/js/app.js"])
    </head>
    <body
        class="bg-slate-100 font-sans antialiased"
        x-data="{ myMenu: $persist(true) }"
    >
        <div class="flex">
            <div
                x-show="myMenu"
                class="max-h-screen min-h-screen w-1/4 overflow-auto bg-blue-800"
            >
                <div class="flex justify-between px-8 py-5">
                    <img
                        class="h-12"
                        src="{{ asset("images/djp-logo-white.png") }}"
                        alt="DJP Logo"
                    />
                    <button x-on:click="myMenu = false">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="icon icon-tabler icon-tabler-circle-x stroke-white"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path
                                d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"
                            />
                            <path d="M10 10l4 4m0 -4l-4 4" />
                        </svg>
                    </button>
                </div>
                <x-menu-list />
            </div>
            <div class="max-h-screen min-h-screen w-full grow overflow-y-auto">
                <div class="navbar bg-base-100">
                    <div class="flex-none" x-show="!myMenu">
                        <button
                            x-on:click="myMenu = true"
                            class="btn btn-square btn-ghost mr-2"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="icon icon-tabler icon-tabler-menu-2"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            >
                                <path
                                    stroke="none"
                                    d="M0 0h24v24H0z"
                                    fill="none"
                                />
                                <path d="M4 6l16 0" />
                                <path d="M4 12l16 0" />
                                <path d="M4 18l16 0" />
                            </svg>
                        </button>
                    </div>
                    <div class="flex-1">
                        <div class="flex flex-col items-start">
                            <div class="text-lg font-medium">
                                Keberatan, Banding dan Pengurangan
                            </div>
                            <p class="text-xs text-slate-500">
                                Kantor Wilayah DJP Sumatera Utara II
                            </p>
                        </div>
                    </div>
                    <div class="flex-none">
                        <ul class="menu menu-horizontal px-1">
                            {{-- <li> --}}
                            {{-- <a>Link</a> --}}
                            {{-- </li> --}}
                            <li>
                                <details>
                                    <summary>Settings</summary>
                                    <ul class="rounded-t-none bg-base-100 p-2">
                                        <li>
                                            <a>Keluar</a>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    @if (session()->has("success"))
                        <div class="px-5 pt-5">
                            <div role="alert" class="alert alert-success">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{{ session("success") }}</span>
                            </div>
                        </div>
                    @endif

                    @if (session()->has("warning"))
                        <div class="px-5 pt-5">
                            <div role="alert" class="alert alert-warning">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                                    />
                                </svg>
                                <span>{{ session("warning") }}</span>
                            </div>
                        </div>
                    @endif

                    @if (session()->has("error"))
                        <div class="px-5 pt-5">
                            <div role="alert" class="alert alert-error">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="h-6 w-6 shrink-0 stroke-current"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                    />
                                </svg>
                                <span>{{ session("error") }}</span>
                            </div>
                        </div>
                    @endif

                    <div>{{ $slot }}</div>
                </div>
            </div>
        </div>
    </body>
</html>
