import React, {useState, useEffect, useRef} from 'react'
import {useSelector, useDispatch} from "react-redux"
import { sendMessage, addUserMessage, clearChat } from '../features/chatSlice'
import {Bot, Trash2, Send} from 'lucide-react'

const ChatWindow = () => {
    const [input, setInput] = useState('');
    const {messages, loading, error} = useSelector((state) => state.chat)
    const dispatch = useDispatch();
    const scrollRef = useRef(null)
    const inputRef = useRef(null)

    useEffect(() => {
        scrollRef.current?.scrollIntoView({behavior: "smooth"})
    }, [messages, loading])

    useEffect(() => {
        inputRef.current?.focus();
    }, [])

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        const trimmedInput = input.trim()
        if ( !trimmedInput || loading) return;
        dispatch(addUserMessage(trimmedInput));
        dispatch(sendMessage());
        setInput('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit();
        }
    }

    const handleClearChat = () => {
        if (window.confirm('Are you sure you want to clear all messages?')) {
            dispatch(clearChat());
        }
    };

  return (
    <div className='flex flex-col w-[70%] h-screen bg-gradient-to-br from-gray-50 to-gray-100' >
        {/* App Header */}
        <header className='bg-white shadow-sm border-b border-gray-200 px-6 py-4'>
            <div className='max-w-4xl mx-auto flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                    <div className='w-10 h-10 rounded-lg bg-blue-500 items-center justify-center'>
                        <Bot size={24} className='text-white items-center justify-center mt-2 ml-2' />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold text-green-900'>AIChatBot</h1>
                        <p className='text-sm text-green-500'>Practice For RTK</p>
                    </div>
                </div>
                
                {messages.length > 0 && (
                    <button 
                        onClick={handleClearChat}
                        className='flex items-center gap-2 px-3 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors'
                    >
                        <Trash2 size={16} />
                        Clear Chat
                    </button>
                )}
            </div>
        </header>

        {/* Message */}
        <main className='flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50'>
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] p-4 rounded-2xl shadow-sm 
                        ${msg.role === 'user' 
                            ? 'bg-blue-500 text-white rounded-tr-none' 
                            : 'bg-white text-gray-800 border border-gray-200 rounded-tl-none'}`}>{msg.text}</div>
                </div>

            ))}
            {/* Loading Indicator */}
            {loading && (
            <div className="flex justify-start">
                <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl rounded-tl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
            </div>
            )}
            <div ref={scrollRef} />
        </main>

        {/* input */}
        <footer className='bg-white border-t border-gray-200 px-6 py-4'>
            {error && <p className="text-red-500 text-xs mb-2 text-center">{error}</p>}
            <div className='max-w-4xl mx-auto'>
                <div className='flex gap-3'>
                    <input 
                        type="text"
                        ref={inputRef}
                        value={input}
                        onChange = {(e) => setInput(e.target.value)}
                        onKeyDown = {handleKeyPress}
                        placeholder='Type your message....'
                        disabled = {loading}
                        className='flex-1 px-4 py-3 bg-gray-50 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed'
                    />
                    <button
                        onClick={handleSubmit}
                        disabled={!input.trim() || loading}
                        className='px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2'     
                    >
                        <Send />
                    </button>
                </div>
            </div>
        </footer>

    </div>
  )
}

export default ChatWindow