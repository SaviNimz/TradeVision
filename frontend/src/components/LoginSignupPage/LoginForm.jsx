// LoginForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #444; // Darker border
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9)); // Dark blue futuristic gradient
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5); // Added glow effect
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center; // Center align the title
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8); // Added glow to the title
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #666; // Darker border
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9); // Darker input background
  color: #ffffff; // White text
  font-size: 16px;

  &::placeholder {
    color: #bbb; // Lighter placeholder text
  }

  &:focus {
    outline: none;
    border-color: #007bff; // Highlight border color on focus
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5); // Glow effect on focus
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: linear-gradient(135deg, #28a745, #21b146); // Gradient for the button
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center; // Center icon and text vertically
  justify-content: center; // Center icon and text horizontally
  font-size: 16px;
  transition: background-color 0.3s, box-shadow 0.3s; // Smooth transition for hover effects

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7); // Glow effect on hover
  }
`;

const GoogleButton = styled(Button)`
  background: linear-gradient(135deg, #db4437, #c13527); // Gradient for Google button
  margin-top: 10px;

  &:hover {
    background: linear-gradient(135deg, #c13527, #a8231f); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(219, 68, 55, 0.7); // Glow effect on hover
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px; // Space between icon and text
`;

const LoginForm = ({ onSwitchToSignup }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
    } catch (error) {
      console.error('Failed to log in user:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      console.log('User logged in with Google successfully!');
    } catch (error) {
      console.error('Failed to log in with Google:', error.message);
    }
  };

  return (
    <FormContainer>
      <Title>Login</Title> {/* Updated to use the Title component */}
      <form onSubmit={handleEmailLogin} style={{ width: '100%' }}>
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
        <Button type="submit">
          <Icon icon={faLock} />
          Login
        </Button>
        <GoogleButton type="button" onClick={handleGoogleLogin}>
          <Icon icon={faGoogle} />
          Login with Google
        </GoogleButton>
      </form>
      <p style={{ color: '#aaa' }}>
        Don't have an account?{' '}
        <span onClick={onSwitchToSignup} style={{ color: '#007bff', cursor: 'pointer' }}>
          Sign up
        </span>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
