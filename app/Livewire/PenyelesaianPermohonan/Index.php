<?php

namespace App\Livewire\PenyelesaianPermohonan;

use App\Models\PenyelesaianPermohonan;
use Livewire\Component;
use Livewire\WithPagination;

class Index extends Component
{
    use WithPagination;

    public $isModalOpen = false;
    public $editMode = false;
    public $modelId;

    public $uraian, $tahun_berkas, $saldo_awal;

    public function render()
    {
        return view('livewire.penyelesaian-permohonan.index', [
            'items' => PenyelesaianPermohonan::paginate(10)
        ]);
    }

    public function openModal($id = null)
    {
        $this->resetForm();

        if ($id) {
            $this->editMode = true;
            $model = PenyelesaianPermohonan::findOrFail($id);
            $this->modelId = $id;
            $this->uraian = $model->uraian;
            $this->tahun_berkas = $model->tahun_berkas;
            $this->saldo_awal = $model->saldo_awal;
        }

        $this->isModalOpen = true;
    }

    public function closeModal()
    {
        $this->isModalOpen = false;
    }

    public function resetForm()
    {
        $this->editMode = false;
        $this->modelId = null;
        $this->uraian = null;
        $this->tahun_berkas = null;
        $this->saldo_awal = null;
    }

    public function save()
    {
        $this->validate([
            'uraian' => 'required|in:Keberatan,Non Keberatan,SUB,STG',
            'tahun_berkas' => 'required|integer',
            'saldo_awal' => 'required|integer',
        ]);

        // Cek kombinasi unik
        $exists = PenyelesaianPermohonan::where('uraian', $this->uraian)
            ->where('tahun_berkas', $this->tahun_berkas)
            ->when($this->editMode, fn($q) => $q->where('id', '!=', $this->modelId))
            ->exists();

        if ($exists) {
            $this->addError('uraian', 'Kombinasi uraian dan tahun berkas sudah ada.');
            return;
        }

        if ($this->editMode) {
            PenyelesaianPermohonan::where('id', $this->modelId)->update([
                'uraian' => $this->uraian,
                'tahun_berkas' => $this->tahun_berkas,
                'saldo_awal' => $this->saldo_awal,
                'diubah' => now(),
            ]);
        } else {
            PenyelesaianPermohonan::create([
                'uraian' => $this->uraian,
                'tahun_berkas' => $this->tahun_berkas,
                'saldo_awal' => $this->saldo_awal,
                'dibuat' => now(),
            ]);
        }

        $this->closeModal();
    }

    public function delete($id)
    {
        PenyelesaianPermohonan::destroy($id);
    }
}
