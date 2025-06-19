<?php

namespace App\Livewire\Pegawai;

use App\Models\User;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $search = '';

    public $showPasswordModal = false;
    public $selectedUserId;
    public $newPassword;

    public function openPasswordModal($id)
    {
        $this->resetErrorBag();
        $this->reset('newPassword');
        $this->selectedUserId = $id;
        $this->showPasswordModal = true;
    }

    public function updatePassword()
    {
        $this->validate([
            'newPassword' => 'required|min:6',
        ]);

        $user = User::findOrFail($this->selectedUserId);
        $user->password = bcrypt($this->newPassword);
        $user->save();

        $this->showPasswordModal = false;
        session()->flash('success', 'Password berhasil diperbarui.');
    }

    public function render()
    {
        return view('livewire.pegawai.index', [
            'users' => User::with('detail')->where('name', 'like', '%'.$this->search.'%')->latest()->paginate(10),
        ]);
    }

    public function updatingSearch()
    {
        $this->resetPage();
    }

    public function delete($id)
    {
        User::where('id', $id)->delete();
        session()->flash('success', 'Data berhasil dihapus');

        return to_route('pegawai.index');
    }
}
