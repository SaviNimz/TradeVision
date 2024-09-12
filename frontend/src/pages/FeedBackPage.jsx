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
    </PageContainer>
  );
};

export default FeedBackPage;

const PageContainer = styled.div`
  display: flex; /* Use flexbox for layout */
  flex-direction: row; /* Align children in a row */
  padding: 20px;
  background: linear-gradient(135deg, #000000, #002f4c, #004080); /* Very dark blue gradient background */
  color: #ffffff; /* Light text color for contrast */
  min-height: 84vh;

  @media (max-width: 768px) {

  }
`;
