<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;

class NOPFormat implements ValidationRule
{
    /**
     * Run the validation rule.
     *
     * @param  \Closure(string): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        if (preg_match('/^\d{2}\.\d{2}\.\d{3}\.\d{3}\.\d{3}-\d{4}\.\d$/', $value) == 0) {
            $fail(':attribute tidak sesuai dengan format NOP');
        }
    }
}
