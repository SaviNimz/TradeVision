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
  border-radius: 12px;
  background: linear-gradient(135deg, rgba(10, 10, 30, 0.9), rgba(30, 30, 60, 0.9)); /* Updated background */
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5), 0 0 15px rgba(0, 128, 255, 0.5);
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
  color: #ffffff; /* Updated color for the title */
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  text-shadow: 0 0 10px rgba(0, 128, 255, 0.8); /* Glowing effect */

  @media (max-width: 768px) {
    font-size: 20px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const FeedbackItem = styled.div`
  padding: 15px;
  border: 1px solid rgba(60, 60, 90, 0.7); /* Updated border color */
  border-radius: 8px;
  margin-bottom: 10px;
  background: rgba(40, 40, 60, 0.8); /* Updated background */
  color: #ffffff; /* Updated text color */
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 123, 255, 0.7); /* Updated hover effect */
  }

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

const NoFeedbackMessage = styled.p`
  color: #cccccc; /* Updated color */
  text-align: center;
  font-style: italic;
`;

const LoadingMessage = styled.p`
  color: #007bff; /* Consistent with the scheme */
  text-align: center;
`;
