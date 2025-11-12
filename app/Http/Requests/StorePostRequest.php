<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePostRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => ['required', 'string', 'max:255'],
            'location' => ['required', 'string', 'max:255'],
            'age_group' => ['required', 'string', 'max:50'],
            'gender' => ['required', 'string', 'max:20'],
            'snippet' => ['required', 'string', 'max:500'],
            'comment_count' => ['nullable', 'integer', 'min:0'],
            'status' => ['required', 'in:open,closed'],
        ];
    }
}
