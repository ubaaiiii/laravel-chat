import React from 'react'

export default function ChatInput() {
  return (
    <div className="fixed bottom-0 w-full bg-white pl-4">
        <textarea className="border-0 hover:border-0 focus:border-0 focus:ring-0 shadow-none h-12 w-full overflow-y-hidden bg-white pt-3 font-light focus:outline-none" placeholder="Write a message"></textarea>
    </div>
  )
}
