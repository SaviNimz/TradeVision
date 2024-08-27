// FeedbackList.jsx
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
  
  @media (max-width: 600px) {
    padding: 15px;
    max-height: 300px;
  }
`;

const FeedbackItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 600px) {
    padding: 8px;
  }
`;

const FeedbackList = ({ feedbacks }) => {
  return (
    <ListContainer>
      <h2>Previous Feedbacks</h2>
      {feedbacks.length === 0 ? (
        <p>No feedbacks yet.</p>
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
