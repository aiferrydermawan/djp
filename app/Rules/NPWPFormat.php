<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NPWPFormat implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (preg_match('/^\d{2}\.\d{3}\.\d{3}\.\d{1}-\d{3}\.\d{3}$/', $value) == 0) {
            $fail(':attribute tidak sesuai dengan format NPWP');
        }
    }
}
