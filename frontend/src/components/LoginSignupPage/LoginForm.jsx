import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #444;
  border-radius: 8px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
  position: relative;
  z-index: 1;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8);
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin: 10px -10px;
  border: 1px solid #666;
  border-radius: 4px;
  background-color: rgba(20, 20, 40, 0.9);
  color: #ffffff;
  font-size: 16px;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  margin-top: 10px;
  background: linear-gradient(135deg, #28a745, #21b146);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background: linear-gradient(135deg, #218838, #1e7e34);
    box-shadow: 0 0 15px rgba(40, 167, 69, 0.7);
  }
`;

const GoogleButton = styled(Button)`
  background: linear-gradient(135deg, #db4437, #c13527);
  margin-top: 10px;

  &:hover {
    background: linear-gradient(135deg, #c13527, #a8231f);
    box-shadow: 0 0 15px rgba(219, 68, 55, 0.7);
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px;
`;

const LoginForm = ({ onSwitchToSignup, onGoogleLogin, onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleEmailLogin = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User logged in successfully!');
      onLoginSuccess(); // Trigger the login success handler
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to log in user:', error.message);
      toast.error('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      console.log('User logged in with Google successfully!');
      onGoogleLogin(); // Trigger Google login success handler
      navigate('/dashboard');
    } catch (error) {
      console.error('Failed to log in with Google:', error.message);
      toast.error('Failed to log in with Google. Please try again.');
    }
  };

  return (
    <FormContainer>
      <Title>Login</Title>
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
      <ToastContainer position="top-right" autoClose={1500} hideProgressBar closeOnClick />
    </FormContainer>
  );
};

export default LoginForm;
