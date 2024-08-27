// FeedbackSection.jsx
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm';
import FeedbackList from '../components/FeedbackPage/FeedbackList';
import styled from 'styled-components';

const PageContainer = styled.div`
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9));
  min-height: 100vh;
  padding: 20px;
`;

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
