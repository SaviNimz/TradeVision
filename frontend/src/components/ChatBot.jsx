import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'I am an AI chatbot designed to answer questions related to Stock Markets and Trading. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false); // State to control accordion visibility
  const [loading, setLoading] = useState(false); // Loading state for thinking...
  const chatHistoryRef = useRef(null);

  useEffect(() => {
    if (isOpen && chatHistoryRef.current) {
      chatHistoryRef.current.scrollTop = chatHistoryRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const formatAnswer = (answer) => {
    const sections = answer.split('\n\n');

    return sections.map((section, index) => {
      if (section.startsWith('*')) {
        const items = section.split('\n').filter(item => item.trim());
        return (
          <div key={index} style={{ marginBottom: '10px' }}>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', textAlign: 'left' }}>
              {items.map((item, idx) => {
                const formattedItem = item.replace(/^\* /, '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Remove leading * and format bold text
                return (
                  <li key={idx} style={{ color: '#FFD700' }} dangerouslySetInnerHTML={{ __html: formattedItem }} />
                );
              })}
            </ul>
          </div>
        );
      }

      const formattedSection = section.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>'); // Format bold text in sections
      return (
        <div key={index} style={{ marginBottom: '10px', textAlign: 'left' }} dangerouslySetInnerHTML={{ __html: formattedSection }} />
      );
    });
  };

  const handleSendMessage = async () => {
    if (input.trim()) {
      const userMessage = { from: 'user', text: input.trim() };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput('');
      setLoading(true); // Start loading

      try {
        const response = await fetch('http://127.0.0.1:5000/api/get_answer', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: input.trim() }), // Send the 'question' field
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const botReply = formatAnswer(data.answer); // Format the answer
        setMessages((prevMessages) => [...prevMessages, { from: 'bot', text: botReply }]);
      } catch (error) {
        console.error('Error communicating with the backend:', error);
        setMessages((prevMessages) => [...prevMessages, { from: 'bot', text: "Sorry, I couldn't get a response from the server." }]);
      } finally {
        setLoading(false); // Stop loading
      }
    }
  };

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <ChatbotContainer>
      {!isOpen ? (
        <ToggleContainer onClick={() => setIsOpen(true)}>
          <ToggleButton>Chat with us</ToggleButton>
        </ToggleContainer>
      ) : (
        <ChatWindow>
          <CloseIcon onClick={() => setIsOpen(false)}>
            <AiOutlineClose />
          </CloseIcon>
          <ChatHistory ref={chatHistoryRef}>
            {messages.map((message, index) => (
              <ChatMessage key={index} from={message.from}>
                {message.from === 'bot' ? message.text : message.text}
              </ChatMessage>
            ))}
            {loading && <ChatMessage from="bot">Generating...</ChatMessage>} {/* Show "Thinking..." when loading */}
          </ChatHistory>
          <ChatInput>
            <InputField
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>Send</SendButton>
          </ChatInput>
        </ChatWindow>
      )}
    </ChatbotContainer>
  );
};

// Styled Components
const ChatbotContainer = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  background-color: #121212; /* Very dark background */
  border-radius: 15px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const ToggleContainer = styled.div`
  cursor: pointer;
  padding: 10px;
  text-align: center;
  background-color: #1e1e1e; /* Darker shade */
  border: 2px solid #FFD700; /* Golden border */
  border-radius: 10px;
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
`;

const ToggleButton = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  color: #FFD700; /* Golden text */
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 600px;
  position: relative;
`;

const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 24px;
  color: #FFD700; /* Golden color */
  transition: color 0.3s ease;
  &:hover {
    color: #FFA500; /* Lighter golden on hover */
  }
`;

const ChatHistory = styled.div`
  padding: 20px;
  background-color: #1c1c1c; /* Dark gray background for chat history */
  overflow-y: auto;
  flex: 1;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);
`;

const ChatMessage = styled.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 20px;
  max-width: 90%; /* Increased width to take up more space */
  word-break: break-word;
  background-color: ${({ from }) => (from === 'bot' ? '#FFD700' : '#4a1f1a')}; /* Golden for bot messages */
  color: ${({ from }) => (from === 'bot' ? 'black' : 'white')}; /* Black for bot and white for user */
  align-self: ${({ from }) => (from === 'bot' ? 'flex-start' : 'flex-end')};
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: ${({ from }) => (from === 'bot' ? '#FFC300' : '#f4c300')}; /* Darker golden for hover */
    transform: scale(1.02);
  }
`;

const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #1e1e1e; /* Darker background for input */
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
`;

const InputField = styled.input`
  flex: 1;
  padding: 15px;
  border: none;
  border-radius: 10px;
  margin-right: 10px;
  outline: none;
  background-color: #3a3a3a; /* Dark input field */
  font-size: 16px;
  color: #fff; /* White text */
  box-shadow: inset 0px 0px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  &:focus {
    background-color: #4a4a4a; /* Slightly lighter gray on focus */
  }
`;

const SendButton = styled.button`
  padding: 15px 20px;
  background-color: #FFD700; /* Golden button */
  color: black; /* Black text */
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  &:hover {
    background-color: #FFC300; /* Darker golden on hover */
    transform: scale(1.05);
  }
  &:active {
    background-color: #FFA500; /* Even darker on click */
    transform: scale(0.98);
  }
`;

export default Chatbot;
