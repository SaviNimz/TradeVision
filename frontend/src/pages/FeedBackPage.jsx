import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm';
import FeedbackList from '../components/FeedbackPage/FeedbackList';
import styled from 'styled-components';


const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <PageContainer>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbacks={feedbacks} />
    </PageContainer>
  );
};

export default FeedBackPage;


const PageContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); /* Very dark blue gradient background */
  color: #ffffff; /* Light text color for contrast */
  min-height: 84vh; 
`;