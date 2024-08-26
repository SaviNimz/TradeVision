// FeedbackSection.jsx
import React, { useState } from 'react';
import FeedbackForm from '../components/FeedbackPage/FeedbackForm';
import FeedbackList from '../components/FeedbackPage/FeedbackList';

const FeedBackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  const handleFeedbackSubmit = (feedback) => {
    setFeedbacks([feedback, ...feedbacks]);
  };

  return (
    <div>
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      <FeedbackList feedbacks={feedbacks} />
    </div>
  );
};

export default FeedBackPage;
