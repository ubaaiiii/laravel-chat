<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Repositories\ChatRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;

class ChatController extends Controller
{

  public function __construct(private ChatRepository $chat) {
    $this->chat = $chat;
  }

  /**
   * Show the chat.
   */
  public function index(Request $request, int $receiverId = null)
  {
    $messages = empty($receiverId) ? [] : $this->chat->getUserMessages($request->user()->id, $receiverId);
    return Inertia::render('Chat/Chat', [
        'messages' => $messages,
        'recentMessages'  => $this->chat->getRecentUsersWithMessage($request->user()->id),
    ]);
  }

  /**
   * Store the chat.
   */
  public function store(Request $request, int $receiverId = null)
  {
    $request->validate([
      'message' => 'required|string',
    ]);

    if (empty($receiverId)) {
      return;
    }

    try {
      $message = $this->chat->sendMessages([
        'sender_id'   => (int) $request->user()->id,
        'receiver_id' => $receiverId,
        'message'     => $request->message,
      ]);

      event(new MessageSent($message));

      return Redirect::route('profile.index', $receiverId);
    } catch (\Throwable $th) {
      return Redirect::route('profile.index', $receiverId);
    }

  }
}
