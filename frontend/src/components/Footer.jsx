// components/Footer.js
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterContainer = styled.footer`
  background-color: #0f2027;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: auto; // Push the footer to the bottom
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 14px;
`;

const Footer = () => {
  return (
    <Wrapper>
      {/* Other components can go here */}
      <FooterContainer>
        <FooterText>© 2024 Trade Vision. All rights reserved.</FooterText>
      </FooterContainer>
    </Wrapper>
  );
};

export default Footer;
