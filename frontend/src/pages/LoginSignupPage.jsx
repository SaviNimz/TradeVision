// LoginSignupPage.js
import React, { useState } from 'react';
import LoginForm from '../components/LoginSignupPage/LoginForm';
import SignupForm from '../components/LoginSignupPage/SignUpForm';
import styled from 'styled-components';
import bgimg from '../assets/loginpg.jpg';

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 88vh;
  position: relative;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url(${bgimg}); 
  background-size: cover;
  background-position: center;
  z-index: 0;
  filter: blur(8px);
`;

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google login clicked');
  };

  return (
    <PageContainer>
      <BackgroundImageContainer />
      {isLogin ? (
        <LoginForm 
          onSwitchToSignup={() => setIsLogin(false)} 
          onGoogleLogin={handleGoogleLogin} 
        />
      ) : (
        <SignupForm 
          onSwitchToLogin={() => setIsLogin(true)} 
        />
      )}
    </PageContainer>
  );
};

export default LoginSignupPage;