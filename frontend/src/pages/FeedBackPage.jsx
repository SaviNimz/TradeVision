/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm.jsx';
import FeedbackList from '../components/FeedbackPage/FeedbackList.jsx';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

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

  return (
    <PageContainer>
      <ContentWrapper>
        <Header>We Value Your Feedback!</Header>
        <FeedbackForm onSubmit={handleFeedbackSubmit} />
        <FeedbackList feedbacks={feedbacks} />
      </ContentWrapper>
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
  background: linear-gradient(135deg, #002f, #002f40, #004060); 
  color: #ffffff;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); 
  padding: 40px;
  border-radius: 15px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
  max-width: 800px;
  width: 100%;
  backdrop-filter: blur(8px);
  
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

// Add more custom styling for feedback form and feedback list if needed
