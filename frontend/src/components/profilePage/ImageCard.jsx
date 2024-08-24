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
  position: relative; // Position relative for the pseudo-element
  width: 45%; // Reduced width for side-by-side layout
  height: 150px; // Increased height
  background-image: url(${(props) => props.image}); // Background image from props
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  margin: 10px; // Adjust margin to create space between cards
  cursor: pointer;
  color: black; // Change text color to white for better contrast
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; // Hide overflow for the pseudo-element

  &:hover {
    opacity: 0.8; // Change opacity on hover
  }

  // Pseudo-element for the blurred background
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: inherit; // Inherit the background image
    filter: blur(2px); // Apply blur effect
    z-index: 1; // Place it below the text
  }

  // Text styling to make it more dominant
  & > span {
    position: relative;
    z-index: 2; // Place text above the blurred background
  }
`;
