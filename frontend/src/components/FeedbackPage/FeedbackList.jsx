import React from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-height: 400px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
    max-height: 300px; /* Reduce height for smaller screens */
  }
`;

const Title = styled.h2`
  color: #333; /* Dark text color */
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FeedbackItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  color: #333; /* Dark text color */
  font-style: italic; /* Italic text */

  &:last-child {
    border-bottom: none;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const NoFeedbackMessage = styled.p`
  color: #666; /* Lighter dark color */
  text-align: center; /* Centered text */
  font-style: normal; /* Non-italic text */
`;

const FeedbackList = ({ feedbacks }) => {
  return (
    <ListContainer>
      <Title>Previous Feedbacks</Title>
      {feedbacks.length === 0 ? (
        <NoFeedbackMessage>Your previous feedback will appear here.</NoFeedbackMessage>
      ) : (
        feedbacks.map((feedback, index) => (
          <FeedbackItem key={index}>
            <strong>{feedback.name}</strong> ({feedback.email})
            <p>{feedback.feedback}</p>
          </FeedbackItem>
        ))
      )}
    </ListContainer>
  );
};

export default FeedbackList;
