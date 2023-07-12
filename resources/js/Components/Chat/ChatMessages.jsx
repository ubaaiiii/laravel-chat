import React from 'react'

export default function ChatMessages() {
  return (
    <>
        <div className="receive-chat relative flex justify-start">
            <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-3 text-sm text-white">
                <i className="fa fa-caret-up absolute -top-2 text-violet-400"></i>
                <p>Contoh</p>
            </div>
        </div>
        <div className="receive-chat relative flex justify-start">
            <div className="mb-2 max-w-[80%] rounded bg-violet-400 px-5 py-3 text-sm text-white">
                <p>Contoh</p>
            </div>
        </div>
        <div className="send-chat relative flex justify-end">
            <div className="mb-2 max-w-[80%] rounded bg-violet-200 px-5 py-3 text-sm text-slate-500">
                <p>Contoh</p>
            </div>
        </div>
        <div className="send-chat relative flex justify-end">
            <div className="mb-2 max-w-[80%] rounded bg-violet-200 px-5 py-3 text-sm text-slate-500">
                <i className="fa fa-caret-down absolute bottom-0 right-4 text-violet-200"></i>
                <p>Contoh</p>
            </div>
        </div>
    </>
  )
}
