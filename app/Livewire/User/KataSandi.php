<?php

namespace App\Livewire\User;

use Illuminate\Support\Facades\Hash;
use Livewire\Component;

class KataSandi extends Component
{
    public $old_password;

    public $password;

    public $password_confirmation;

    public function render()
    {
        return view('livewire.user.kata-sandi');
    }

    public function change()
    {
        $this->validate([
            'old_password' => ['required'],
            'password' => ['required', 'min:8'],
            'password_confirmation' => ['required', 'same:password'],
        ]);
        if (! Hash::check($this->old_password, auth()->user()->password)) {
            return $this->addError('old_password', 'Kata sandi lama salah');
        }

        // Update the user's password
        $user = auth()->user();
        $user->password = Hash::make($this->password);
        $user->save();

        session()->flash('success', 'Password berhasil diubah.');

        return to_route('user.kata-sandi');
    }
}
