/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai'; // Import the close icon
import bot from '../assets/1_YOViITfBkahHTwGGkKsQdg.png'; // Import the bot image
import sendmessage from '../assets/message-send.svg'; // Import the sendmessage image
import chatbackground from '../assets/02-34-11-741_512.gif'; // Import the sendmessage image


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
          <ToggleButton></ToggleButton>
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
            <SendButton onClick={handleSendMessage}></SendButton>
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
  background-color: #121212; 
  border-radius: 50px;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.5);
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  
`;

const ToggleContainer = styled.div`
  cursor: pointer;
  border: 2px solid #FFFFFF; /* Change border color to white */
  border-radius: 50%; /* Make it circular */
  width: 60px; /* Fixed width for circular shape */
  height: 60px; /* Fixed height for circular shape */
  display: flex; /* Align items horizontally */
  align-items: center; /* Center align the items */
  justify-content: center; /* Center the text within the container */
  transition: background-color 0.3s ease, border-color 0.3s ease;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);

  /* Background color settings */
  background-color: rgba(255, 255, 255, 0.7); /* Light semi-transparent background */
  background-image: url(${bot}); /* Set the imported image as background */
  background-size: cover; /* Cover the whole area */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repetition */
`;


const ToggleButton = styled.div`
  font-size: 16px;
  padding: 10px 20px;
  text-transform: uppercase;
  cursor: pointer;
  background-color: transparent;
  color: #FFFFFF; 
  border-radius: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;


const ChatWindow = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 25px;
  justify-content: space-between;
  height: 600px;
  overflow: hidden; /* Hide overflow content when closed */
  transition: height 0.5s ease; /* Smooth transition for height */
  position: relative;
  background-image: url(${chatbackground}); /* Set the imported image as background */


`;


const CloseIcon = styled.div`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
  font-size: 28px;
  color: #ff4d4f; /* Soft red for the default close icon */
  transition: color 0.3s ease, transform 0.2s ease;
  &:hover {
    color: #ffa07a; /* Soft coral on hover */
    transform: scale(1.5); /* Slight zoom on hover */
  }

  
`;



const ChatHistory = styled.div`
  padding: 20px;
  background-color: #1c1c1c; /* Dark gray background for chat history */
  overflow-y: auto;
  flex: 1;
  border-radius: 0 0 15px 15px;
  box-shadow: inset 0px 0px 10px rgba(0, 0, 0, 0.3);

  /* Custom scrollbar styling */
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: linear-gradient(135deg, #0056b3, #001f3f); /* Fancy gradient */
    border-radius: 10px;
    box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.5); /* Shadow inside the thumb */
  }

  &::-webkit-scrollbar-track {
    background: #2a2a2a; /* Slightly lighter gray for track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(135deg, #007bff, #003366); /* Lighter on hover */
  }

  &::-webkit-scrollbar-thumb:active {
    background: linear-gradient(135deg, #0056b3, #001f3f); /* Darker on active */
  }
`;

const ChatMessage = styled.div`
  padding: 15px;
  margin: 10px 0;
  border-radius: 20px; 
  max-width: 90%; 
  word-break: break-word;
  background: ${({ from }) => 
    from === 'bot' 
      ? 'linear-gradient(135deg, #001f3f, #0056b3)' 
      : 'linear-gradient(135deg, #a0d4ff, #4ca1ff)'}; 
  color: ${({ from }) => (from === 'bot' ? 'white' : '#333333')}; 
  
  float: ${({ from }) => (from === 'bot' ? 'left' : 'right')}; /* Floating bot to the left, user to the right */
  clear: both; /* Ensures proper spacing between messages */
  align-self: ${({ from }) => (from === 'bot' ? 'flex-start' : 'flex-end')};
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${({ from }) => 
      from === 'bot' 
        ? 'linear-gradient(135deg, #003366, #007bff)' 
        : 'linear-gradient(135deg, #80c7ff, #0092ff)'}; 
    transform: scale(1.02);
  }
`;



const ChatInput = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  background-color: #00000; 
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
  width: 50px;
  height: 50px;
  background-image: url(${sendmessage});no-repeat center center;
  background-size: contain;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;



export default Chatbot;