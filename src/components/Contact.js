import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactContainer = styled.div`
  margin-top: 40px;
`;

const Link = styled.a`
  color: #00ADB5;
  margin: 0 10px;
  font-size: 24px;
  transition: color 0.3s;

  &:hover {
    color: #18FFFF;
  }
`;

const Contact = () => {
  return (
    <ContactContainer>
      <Link href="https://github.com/edysoncarlos" target="_blank" rel="noopener noreferrer">
        <FaGithub />
      </Link>
      <Link href="https://www.linkedin.com/in/edson-carlos-mahumane/" target="_blank" rel="noopener noreferrer">
        <FaLinkedin />
      </Link>
    </ContactContainer>
  );
};

export default Contact;
