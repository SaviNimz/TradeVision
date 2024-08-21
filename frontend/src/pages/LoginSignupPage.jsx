// LoginSignupPage.js
import React, { useState } from 'react';
import LoginForm from '../components/LoginSignupPage/LoginForm';
import SignupForm from '../components/LoginSignupPage/SignUpForm';
import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  background-color: #eaeaea;
`;

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here
    alert('Login submitted');
  };

  const handleSignupSubmit = (event) => {
    event.preventDefault();
    // Handle signup logic here
    alert('Signup submitted');
  };

  return (
    <PageContainer>
      {isLogin ? (
        <LoginForm 
          onSubmit={handleLoginSubmit} 
          onSwitchToSignup={() => setIsLogin(false)} 
        />
      ) : (
        <SignupForm 
          onSubmit={handleSignupSubmit} 
          onSwitchToLogin={() => setIsLogin(true)} 
        />
      )}
    </PageContainer>
  );
};

export default LoginSignupPage;
