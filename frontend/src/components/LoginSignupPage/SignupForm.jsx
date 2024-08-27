import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignupForm = ({ onSwitchToLogin }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleEmailSignup = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User registered successfully!');
      navigate('/dashboard'); // Redirect to dashboard on successful signup
    } catch (error) {
      console.error('Failed to register user:', error.message);
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Email already taken!', {
          position: 'top-right',
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
        });
      }
    }
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      console.log('User registered with Google successfully!');
      navigate('/dashboard'); // Redirect to dashboard on successful Google signup
    } catch (error) {
      console.error('Failed to sign up with Google:', error.message);
    }
  };

  return (
    <FormContainer>
      <ToastContainer />
      <Title>Sign Up</Title>
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
  background: linear-gradient(135deg, #007bff, #0056b3); // Blue gradient background
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.3s, box-shadow 0.3s; // Smooth transition for hover effects

  &:hover {
    background: linear-gradient(135deg, #0056b3, #004494); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(0, 123, 255, 0.7); // Glow effect on hover
  }
`;

const GoogleButton = styled(Button)`
  background: linear-gradient(135deg, #db4437, #c13527); // Gradient for Google button
  margin-top: 20px;

  &:hover {
    background: linear-gradient(135deg, #c13527, #a8231f); // Darker gradient on hover
    box-shadow: 0 0 15px rgba(219, 68, 55, 0.7); // Glow effect on hover
  }
`;
