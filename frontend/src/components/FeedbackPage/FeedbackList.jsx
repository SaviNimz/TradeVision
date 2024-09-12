import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const FeedbackContainer = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeedbacks = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/Getfeedbacks');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        // Slice to get the most recent 10 feedbacks
        setFeedbacks(data.slice(0, 10));
      } catch (error) {
        console.error('Error fetching feedbacks:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeedbacks();
  }, []);

  return (
    <FeedbackList feedbacks={feedbacks} loading={loading} />
  );
};

const FeedbackList = ({ feedbacks, loading }) => {
  return (
    <ListContainer>
      <Title>Previous Feedbacks</Title>
      {loading ? (
        <LoadingMessage>Loading feedbacks...</LoadingMessage>
      ) : feedbacks.length === 0 ? (
        <NoFeedbackMessage>Your previous feedback will appear here.</NoFeedbackMessage>
      ) : (
        feedbacks.map((feedback, index) => (
          <FeedbackItem key={index}>
            <strong>{feedback.name}</strong>
            <p>{feedback.feedback}</p>
          </FeedbackItem>
        ))
      )}
    </ListContainer>
  );
};

export default FeedbackContainer;

const ListContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  border-radius: 12px; /* Slightly more rounded corners */
  background: #f9f9f9; /* Light background color */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-height: 500px;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 15px;
    max-width: 90%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    max-width: 100%;
    max-height: 300px;
  }
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; /* Modern font */

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FeedbackItem = styled.div`
  padding: 15px;
  border: 1px solid #e0e0e0; /* Soft border */
  border-radius: 8px; /* Rounded corners */
  margin-bottom: 10px; /* Spacing between items */
  background: #fff; /* White background for items */
  color: #333;
  transition: transform 0.2s, box-shadow 0.2s; /* Smooth hover effects */

  &:hover {
    transform: translateY(-2px); /* Slight lift effect on hover */
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Deeper shadow on hover */
  }

  &:last-child {
    margin-bottom: 0; /* Remove margin for last item */
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const NoFeedbackMessage = styled.p`
  color: #666;
  text-align: center;
  font-style: normal;
`;

const LoadingMessage = styled.p`
  color: #007bff;
  text-align: center;
`;
