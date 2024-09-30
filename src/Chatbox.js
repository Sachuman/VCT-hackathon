import React, { useState } from 'react';

const Chatbox = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    // API call to fine-tuned LLM model
    const botResponse = await fetchBotResponse(input);
    
    setMessages([...messages, userMessage, { sender: 'bot', text: botResponse }]);
    setInput("");
  };

  const fetchBotResponse = async (input) => {
    // Insert OpenAI API integration here
    return "RESPONSE";
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-box">
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
          placeholder="Type your message here..." 
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chatbox;