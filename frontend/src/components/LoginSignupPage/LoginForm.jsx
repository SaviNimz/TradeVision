import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const FormContainer = styled.div`
  max-width: 400px;
  width: 100%;
  margin: auto;
  padding: 20px;
  border: 1px solid #eaeaea;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
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
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center; // Center icon and text vertically
  justify-content: center; // Center icon and text horizontally
  
  &:hover {
    background-color: #218838;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437; // Google red
  margin-top: 10px;

  &:hover {
    background-color: #c13527;
  }
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 8px; // Space between icon and text
`;

const LoginForm = ({ onSubmit, onSwitchToSignup, onGoogleLogin }) => {
  return (
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={onSubmit} style={{ width: '100%' }}>
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">
          <Icon icon={faLock} />
          Login
        </Button>
        <GoogleButton type="button" onClick={onGoogleLogin}>
          <Icon icon={faGoogle} />
          Login with Google
        </GoogleButton>
      </form>
      <p>
        Don't have an account? <span onClick={onSwitchToSignup} style={{ color: '#007bff', cursor: 'pointer' }}>Sign up</span>
      </p>
    </FormContainer>
  );
};

export default LoginForm;
