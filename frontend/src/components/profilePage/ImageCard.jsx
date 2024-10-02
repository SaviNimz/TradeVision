/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

// ImageCard component
const ImageCard = ({ image, text, onClick }) => {
  return (
    <Card image={image} onClick={onClick}>
      <span>{text}</span> {/* Wrap text in a span for z-index control */}
    </Card>
  );
};

export default ImageCard;

// Styled component for the image card
const Card = styled.div`
  position: relative;
  width: 90%; // Reduced width for small screens
  max-width: 400px; // Reduced max width for larger screens
  height: 200px; // Reduced height for better visibility
  background-image: url(${(props) => props.image}); 
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    opacity: 0.8;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit;
    filter: blur(0px);
    z-index: 1;
  }

  & > span {
    position: relative;
    top: 0;

    z-index:2;
    font-size: 16px; // Reduced font size for smaller screens
    font-weight: bold;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
    padding: 10px;
  }

  @media (min-width: 768px) {
    width: 40%; // Reduced width for larger screens
    height: 250px; // Reduced height for larger screens
    & > span {
      font-size: 24px; // Adjusted font size for larger screens
    }
  }
`;