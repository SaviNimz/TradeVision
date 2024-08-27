import React, { useState } from 'react';
import LoginForm from '../components/LoginSignupPage/LoginForm';
import SignupForm from '../components/LoginSignupPage/SignUpForm';
import styled from 'styled-components';
import bgimg from '../assets/loginpg.jpg';
import { useNavigate } from 'react-router-dom';

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

const LoginSignupPage = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    // Handle Google login logic
    console.log('Google login clicked');
    onLogin(); // Set the authentication state to true
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  const handleLoginSuccess = () => {
    // Handle successful login logic
    onLogin(); // Set the authentication state to true
    navigate('/dashboard'); // Redirect to dashboard after login
  };

  const handleSignupSuccess = () => {
    // Handle successful signup logic
    onLogin(); // Set the authentication state to true
    navigate('/dashboard'); // Redirect to dashboard after signup
  };

  return (
    <PageContainer>
      <BackgroundImageContainer />
      {isLogin ? (
        <LoginForm 
          onSwitchToSignup={() => setIsLogin(false)} 
          onGoogleLogin={handleGoogleLogin} 
          onLoginSuccess={handleLoginSuccess} // Handle successful login
        />
      ) : (
        <SignupForm 
          onSwitchToLogin={() => setIsLogin(true)} 
          onSignupSuccess={handleSignupSuccess} // Handle successful signup
        />
      )}
    </PageContainer>
  );
};

export default LoginSignupPage;
