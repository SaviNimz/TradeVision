// SignupForm.js
import React from 'react';
import styled from 'styled-components';
import { FaGoogle } from 'react-icons/fa'; // Importing Google icon

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centering content horizontally */
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
  background-color: #db4437; /* Google red color */
  margin-top: 20px;

  &:hover {
    background-color: #c13527; /* Darker red on hover */
  }
`;

const SignupForm = ({ onSubmit, onSwitchToLogin }) => {
  return (
    <FormContainer>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <Input type="text" placeholder="Username" required />
        <Input type="email" placeholder="Email" required />
        <Input type="password" placeholder="Password" required />
        <Button type="submit">Sign Up</Button>
      </form>
      <GoogleButton type="button">
        <FaGoogle style={{ marginRight: '8px' }} /> Sign up with Google
      </GoogleButton>
      <p>
        Already have an account? <span onClick={onSwitchToLogin} style={{ color: '#007bff', cursor: 'pointer' }}>Login</span>
      </p>
    </FormContainer>
  );
};

export default SignupForm;
