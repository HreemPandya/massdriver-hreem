"use client"

import { useState } from "react"

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  
  return (
    <div className="fixed bottom-6 right-6 z-50">

      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-blue-300 flex items-center justify-center shadow-lg hover:bg-blue-500 transition-colors focus:outline-none"
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24" 
              width="16" 
              height="16" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="text-indigo-500"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
        </button>
      )}
      

      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="p-4 bg-gray-50 border-b">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">Hi there!</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-1">
              Questions, comments, feedback? We'd love to hear from you!
            </p>
          </div>
          
          <div className="flex-1 p-4 overflow-y-auto">
            {/* This would be where chat messages appear */}
          </div>
          
          <div className="p-4 border-t">
            <div className="text-gray-500 text-sm mb-2">
              We are away at the moment
              <br />
              We will be back online on Monday
            </div>
            <button className="w-full py-2 px-4 bg-indigo-100 text-indigo-600 rounded flex items-center justify-between hover:bg-indigo-200 transition-colors">
              <span>Start Conversation</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
            <div className="text-xs text-gray-400 text-center mt-3">
              Powered by Chatwoot
            </div>
          </div>
        </div>
      )}
    </div>
  )
}