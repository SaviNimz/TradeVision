/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm.jsx';
import FeedbackList from '../components/FeedbackPage/FeedbackList.jsx';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import the styles

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <PageContainer>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <ToastContainer /> {/* Add ToastContainer to render toasts */}
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
