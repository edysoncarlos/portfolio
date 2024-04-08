import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  background-color: #0B1823;
  padding: 20px;
  border-radius: 10px;
  color: #00ADB5;

  @media (max-width: 401px) {
    max-width: 300px;
  }
  @media (min-width: 401px) {
    max-width: 100%;
  }
`;

const AboutTitle = styled.h3`
  font-size: 1.2rem;
`;

const AboutContent = styled.p`
  font-size: 1rem;
  margin-top: 10px;
`;

const About = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Me</AboutTitle>
      <AboutContent>
        I love tech, coding, automation and building exciting products. I also enjoy writing chronicles, theology and learning psychology. Gaming is my childhood passion.
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
