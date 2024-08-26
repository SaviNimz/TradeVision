// FeedbackForm.jsx
import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 600px) {
    padding: 15px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  
  @media (max-width: 600px) {
    padding: 8px;
    margin: 8px 0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  min-height: 100px;
  
  @media (max-width: 600px) {
    padding: 8px;
    margin: 8px 0;
    min-height: 80px;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background: #00f260;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  
  &:hover {
    background: #00d084;
  }
  
  @media (max-width: 600px) {
    padding: 8px 16px;
    font-size: 14px;
  }
`;

const FeedbackForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ name, email, feedback });
    setName('');
    setEmail('');
    setFeedback('');
  };

  return (
    <FormContainer>
      <h2>Submit Your Feedback</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <TextArea
          placeholder="Your Feedback"
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          required
        />
        <Button type="submit">Submit</Button>
      </form>
    </FormContainer>
  );
};

export default FeedbackForm;
