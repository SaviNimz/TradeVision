/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import Icon1 from '../../assets/f746gxB9euy6hRsnMdsqaF.jpg'; // Example for the icon
import Icon2 from '../../assets/f746gxB9euy6hRsnMdsqaF.jpg'; // Replace with actual image paths
import Icon3 from '../../assets/f746gxB9euy6hRsnMdsqaF.jpg';
import Icon4 from '../../assets/f746gxB9euy6hRsnMdsqaF.jpg';

const FeatureSection = () => {
  const features = [
    {
      icon: Icon1,
      title: 'Dependable',
      description: 'Our 99.97% uptime ensures your uninterrupted access to the markets.',
    },
    {
      icon: Icon2,
      title: 'Safe and secure',
      description: 'We keep your personal data and funds safe.',
    },
    {
      icon: Icon3,
      title: 'Regulated',
      description: 'We’re regulated and licensed by global financial authorities.',
    },
    {
      icon: Icon4,
      title: '24/7 support',
      description: 'Our professional multilingual team is here for you anytime.',
    },
  ];

  return (
    <FeatureContainer>
      {features.map((feature, index) => (
        <FeatureCard key={index}>
          <Icon src={feature.icon} alt={feature.title} />
          <Title>{feature.title}</Title>
          <Description>{feature.description}</Description>
        </FeatureCard>
      ))}
    </FeatureContainer>
  );
};

export default FeatureSection;

const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 20px;
  padding: 20px;
`;

const FeatureCard = styled.div`
  background-color: #f9f9f9;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Icon = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
`;
