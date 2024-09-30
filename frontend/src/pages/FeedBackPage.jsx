/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm.jsx';
import FeedbackList from '../components/FeedbackPage/FeedbackList.jsx';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the styles
import BackgroundImage from '../assets/image.png'; // Import the background image
import Icon1 from '../assets/dependability.png'; // Example for the icon
import Icon2 from '../assets/Safeandsecure.webp'; // Replace with actual image paths
import Icon3 from '../assets/Regulated.jpeg';
import Icon4 from '../assets/247support.avif';

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
    toast.success("Feedback submitted successfully!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const features = [
    {
      icon: Icon1,
      title: 'Dependable',
      description: 'Our 99.97% uptime ensures your uninterrupted access to the markets.',
    },
    {
      icon: Icon2,
      title: 'Safe and secure',
      description: 'We keep your personal data and funds safe.',
    },
    {
      icon: Icon3,
      title: 'Regulated',
      description: 'We’re regulated and licensed by global financial authorities.',
    },
    {
      icon: Icon4,
      title: '24/7 support',
      description: 'Our professional multilingual team is here for you anytime.',
    },
  ];

  return (
    <PageContainer>
      <ContentWrapperAll>
      <ContentWrapper>
        <FeatureContainer>
          {features.map((feature, index) => (
            <FeatureCard key={index}>
              <Icon src={feature.icon} alt={feature.title} />
              <Title>{feature.title}</Title>
              <Description>{feature.description}</Description>
            </FeatureCard>
          ))}
        </FeatureContainer>
      </ContentWrapper>
      <ContentWrapper>
        <Header>We Value Your Feedback!</Header>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
        <FeedbackList feedbacks={feedbacks} />
      </ContentWrapper>
      </ContentWrapperAll>
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
    </PageContainer>
  );
};

export default FeedBackPage;

const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: url(${BackgroundImage}) no-repeat center center fixed; /* Set background image */
  background-size: cover; /* Ensure image covers the container */
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

   animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0,0.5); /* Use a dark overlay to improve text readability */
  padding: 20px;
  border-radius: 15px;
  
  max-width: 800px;
  gap: 20px;
  width: 100%;
  backdrop-filter: blur(px);
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentWrapperAll = styled.div`
  
display: flex;
  flex-direction: row;
  background: rgba(0, 0, 0, 0.5); /* Use a dark overlay to improve text readability */
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 1700px;
  gap: 30px;
  width: 100%;
  backdrop-filter: blur(10px);
  
  
  @media (max-width: 768px) {
    padding: 20px;
  }
`;
const Header = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2.5em;
  color: #f9f9f9;
  font-family: 'Arial', sans-serif;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom:20px;
  animation: fadeIn 1s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease, background-color 0.4s ease;

  &:hover {
   transform: scale(1.05);
    
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* Adds a more pronounced shadow */
    background-color: #ffffff; /* Changes background color to white on hover */
  }
`;


const Icon = styled.img`
  width: 200px;
  height: 200px;
  margin-bottom: 10px;
animation: fadeIn 2s ease-in-out;
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
`;

const Title = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;
