// SignupForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #333;
  border-radius: 8px;
  background-color: rgba(20, 20, 20, 0.95); // Darker background
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #fff;
  text-align: center; // Center align the title
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #555; // Darker border
  border-radius: 4px;
  background-color: #222; // Dark input background
  color: #fff; // White text
  font-size: 16px;

  &::placeholder {
    color: #aaa; // Lighter placeholder text
  }

  &:focus {
    outline: none;
    border-color: #007bff; // Highlight border color on focus
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background-color: #007bff; // Blue background
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3; // Darker blue on hover
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437; // Google red
  margin-top: 20px;

  &:hover {
    background-color: #c13527; // Darker red on hover
  }
`;

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully!');
    } catch (error) {
      console.error('Failed to register user:', error.message);
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      console.log('User registered with Google successfully!');
    } catch (error) {
      console.error('Failed to sign up with Google:', error.message);
    }
  };

  return (
    <FormContainer>
      <Title>Sign Up</Title> {/* Updated to use the Title component */}
      <form onSubmit={handleEmailSignup}>
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
        <GoogleButton type="button" onClick={handleGoogleSignup}>
          <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
          Sign up with Google
        </GoogleButton>
      </form>
      <p style={{ color: '#aaa' }}>
        Already have an account?{' '}
        <span onClick={onSwitchToLogin} style={{ color: '#007bff', cursor: 'pointer' }}>
          Login
        </span>
      </p>
    </FormContainer>
  );
};

export default SignupForm;
