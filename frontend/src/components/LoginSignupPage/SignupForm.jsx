import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa';

const SignupForm = ({ onSubmit, onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userDetails = {
      username,
      email,
      password, // Send plain password to the backend
    };

    const backendUrl = 'http://localhost:5000/api/register'; 

    // Send user details to the backend
    const response = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    });

    if (response.ok) {
      // Handle successful signup
      console.log('User registered successfully!');
    } else {
      // Handle signup error
      console.error('Failed to register user');
    }
  };

  return (
    <FormContainer>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">Sign Up</Button>
      </form>
      <GoogleButton type="button">
        <FaGoogle style={{ marginRight: '8px' }} /> Sign up with Google
      </GoogleButton>
      <p>
        Already have an account?{' '}
        <span onClick={onSwitchToLogin} style={{ color: '#007bff', cursor: 'pointer' }}>
          Login
        </span>
      </p>
    </FormContainer>
  );
};

export default SignupForm;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 400px;
  margin: auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  margin-top: 20px;

  &:hover {
    background-color: #c13527;
  }
`;
