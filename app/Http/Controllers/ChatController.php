<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class ChatController extends Controller
{
    /**
     * Show the confirm password view.
     */
    public function index()
    {
        return Inertia::render('Chat/Chat');
    }
}
