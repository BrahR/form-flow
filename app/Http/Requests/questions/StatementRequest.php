<?php

namespace App\Http\Requests\questions;

use Illuminate\Foundation\Http\FormRequest;

class StatementRequest extends FormRequest
{
    public function rules(): array
    {
        return [

        ];
    }

    public function authorize(): bool
    {
        return true;
    }
}
