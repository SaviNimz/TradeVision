import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'; // Import Axios

const FeedbackForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
  const [message, setMessage] = useState(''); // Feedback message state
  const [error, setError] = useState(''); // Error state

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:5000/api/feedbacks', {
      name,
      email,
      feedback,
    })
      .then((response) => {
        setError('');
        setName('');
        setEmail('');
        setFeedback('');
        setMessage('Feedback submitted successfully!');
      })
      .catch((error) => {
        setMessage('');
        setError(error.response ? error.response.data.message : 'An error occurred');
      });
  };

  return (
    <FormContainer>
      <FormTitle>Submit Your Feedback</FormTitle>
      {message && <p style={{ color: 'lightgreen', textAlign: 'center' }}>{message}</p>}
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
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

const FormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  max-height: 550px;
  padding: 20px;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%; /* Takes more screen width on smaller devices */
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%; /* Full width for mobile */
  }
`;

const FormTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px;
  text-align: center;
  color: #ffffff; /* Updated color for the title */
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);

  @media (max-width: 768px) {
    font-size: 20px; /* Smaller title on tablet */
  }

  @media (max-width: 480px) {
    font-size: 18px; /* Even smaller title on mobile */
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #666; /* Updated border color */
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); /* Updated background color */
  color: #ffffff; /* Updated text color */
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 600px) {
    padding: 10px;
    margin: 8px 0;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  margin: 10px 0;
  border: 1px solid #666; /* Updated border color */
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); /* Updated background color */
  color: #ffffff; /* Updated text color */
  min-height: 120px;
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  @media (max-width: 600px) {
    padding: 10px;
    margin: 8px 0;
    min-height: 100px;
  }
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 4px;
  background: linear-gradient(135deg, #28a745, #21b146); /* Updated background color */
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 20px auto 0;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34); /* Updated hover color */
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
  }

  @media (max-width: 600px) {
    padding: 10px 20px;
    font-size: 14px;
  }
`;
