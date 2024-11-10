import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

function Chatbot() {
    const [messages, setMessages] = useState([]);
    const [inputMessage, setInputMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const sendMessage = async (e) => {
        e.preventDefault();
        if (inputMessage.trim() === '') return;

        // Füge die Benutzernachricht hinzu
        const newMessages = [...messages, { sender: 'user', text: inputMessage }];
        setMessages(newMessages);

        setIsLoading(true);

        try {
            const response = await axios.post('http://localhost:3001/api/chat', {
                message: inputMessage,
                history: newMessages, // Sende den Chatverlauf
            });

            // Füge die AI-Antwort hinzu
            setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: response.data.reply }]);
        } catch (error) {
            console.error('Fehler:', error);
            setMessages((prevMessages) => [...prevMessages, { sender: 'ai', text: 'Entschuldigung, es gab ein Problem beim Abrufen der Antwort.' }]);
        }

        setIsLoading(false);
        setInputMessage('');
    };

    const toggleChatbot = () => {
        setIsOpen(!isOpen);
    };

    // Effekt für Auto-Scrolling
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <>
            {/* Chatbot-Button */}
            <button
                className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 bg-black hover:bg-gray-700 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
                type="button"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                data-state={isOpen ? 'open' : 'closed'}
                onClick={toggleChatbot}
            >
                {/* SVG-Icon */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="40"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white block border-gray-200 align-middle"
                >
                    <path
                        d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"
                        className="border-gray-200"
                    ></path>
                </svg>
            </button>

            {/* Chatbot-Fenster */}
            {isOpen && (
                <div
                    style={{
                        boxShadow:
                            '0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05)',
                    }}
                    className="fixed bottom-[calc(4rem+1.5rem)] right-0 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px] h-[634px]"
                >
                    {/* Überschrift */}
                    <div className="flex flex-col space-y-1.5 pb-6">
                        <h2 className="font-semibold text-lg tracking-tight">Chatbot</h2>
                        <p className="text-sm text-[#6b7280] leading-3">
                            Powered by OpenAI
                        </p>
                    </div>

                    {/* Chat-Verlauf */}
                    <div
                        className="pr-4 h-[474px] overflow-y-auto"
                        style={{ minWidth: '100%', display: 'table' }}
                    >
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className="flex gap-3 my-4 text-gray-600 text-sm flex-1"
                            >
                                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                    <div className="rounded-full bg-gray-100 border p-1">
                                        {message.sender === 'ai' ? (
                                            // AI-Icon
                                            <svg
                                                stroke="none"
                                                fill="black"
                                                strokeWidth="1.5"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                                height="20"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                                ></path>
                                            </svg>
                                        ) : (
                                            // User-Icon
                                            <svg
                                                stroke="none"
                                                fill="black"
                                                strokeWidth="0"
                                                viewBox="0 0 16 16"
                                                height="20"
                                                width="20"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"
                                                ></path>
                                            </svg>
                                        )}
                                    </div>
                                </span>
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-gray-700">
                                        {message.sender === 'ai' ? 'AI' : 'Du'}{' '}
                                    </span>
                                    {message.text}
                                </p>
                            </div>
                        ))}
                        {/* Ladeindikator anzeigen, wenn isLoading true ist */}
                        {isLoading && (
                            <div className="flex gap-3 my-4 text-gray-600 text-sm flex-1">
                                <span className="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                                    <div className="rounded-full bg-gray-100 border p-1 flex items-center justify-center">
                                        {/* Lade-Spinner */}
                                        <svg
                                            className="animate-spin h-5 w-5 text-gray-500"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                        >
                                            <circle
                                                className="opacity-25"
                                                cx="12"
                                                cy="12"
                                                r="10"
                                                stroke="currentColor"
                                                strokeWidth="4"
                                            ></circle>
                                            <path
                                                className="opacity-75"
                                                fill="currentColor"
                                                d="M4 12a8 8 0 018-8v8H4z"
                                            ></path>
                                        </svg>
                                    </div>
                                </span>
                                <p className="leading-relaxed">
                                    <span className="block font-bold text-gray-700">
                                        AI{' '}
                                    </span>
                                    Bitte warte einen Moment, während ich deine Anfrage bearbeite...
                                </p>
                            </div>
                        )}
                        {/* Ref für Auto-Scrolling */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Eingabefeld */}
                    <div className="flex items-center pt-0">
                        <form
                            className="flex items-center justify-center w-full space-x-2"
                            onSubmit={sendMessage}
                        >
                            <input
                                className="flex h-10 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:outline-none focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] focus-visible:ring-offset-2"
                                placeholder="Gib deine Nachricht ein"
                                value={inputMessage}
                                onChange={(e) => setInputMessage(e.target.value)}
                                disabled={isLoading} // Eingabefeld deaktivieren, wenn geladen wird
                            />
                            <button
                                type="submit"
                                className="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2"
                                disabled={isLoading} // Senden-Button deaktivieren, wenn geladen wird
                            >
                                Senden
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot;
