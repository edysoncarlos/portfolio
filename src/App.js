import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import Contact from './components/Contact';
import About from './components/About';
import Picture from './components/Picture';

const Container = styled.div`
  background-color: #12232E;
  color: #00ADB5;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: 10px;
`;

const Content = styled.div`
  margin-top: 20px;
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  justify-content: center;
  justify-content: space-between;
  text-align: center;
  position: relative;
`;

const Header = styled.div`
  width: 100%;
  text-align: center;
  flex: 1;
`;

const HeaderEffect = styled.div`
  font-size: 2rem;
  margin-bottom: 20px;
  font-family: 'Courier New', Courier, monospace;
`;

const typingAnimation = keyframes`
  0% { width: 0; }
  50% { width: 100%; }
  100% { width: 0; }
`;

const TypingText = styled.span`
  display: inline-block;
  overflow: hidden;
  animation: ${typingAnimation} 3s steps(20, end) infinite;
`;

const TypingShell = styled.span`
 
  overflow: hidden;
  animation: ${typingAnimation} 3s steps(20, end) infinite;
`;

const Footer = styled.div`
  width: 100%;
  text-align: center;
  margin-top: 20px;
`;


const glowingEffect = keyframes`
  0% { box-shadow: 0 0 10px #00ADB5; }
  50% { box-shadow: 0 0 20px #00FFFF; }
  100% { box-shadow: 0 0 10px #00ADB5; }
`;

const SectionBox = styled.div`
  background-color: #0B1823;
  padding: 20px;
  border-radius: 10px;
  cursor: pointer;
  max-width: 100%;
  position: relative;
  margin-bottom: 20px;
  font-family: 'Courier New', Courier, monospace;
  animation: ${glowingEffect} 2s linear infinite alternate;

  &:hover {
    background-color: #183E4D;
    color: #18FFFF;
  }
`;


const App = () => {

  const [typingText, setTypingText] = useState('Creative');
  const roles = ['Systems Administrator', 'Software Engineer', 'Digital Designer', 'Writer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingText(prevText => {
        const nextIndex = (roles.indexOf(prevText) + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);


  const [typingShell, setTypingShell] = useState('root# sudo su -');
  const shell = ['root# echo "Welcome to my page!"', 'root# systemctl start myportfolio.service', 'root# reboot'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTypingShell(prevCode => {
        const nextIndex = (shell.indexOf(prevCode) + 1) % shell.length;
        return shell[nextIndex];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  return (
    <Container>
      <Content>
        <Header>
          <HeaderEffect>
            Hi!
            <br />
            I am <i>Edson CM</i>
            <br/>
            <TypingText>{typingText}</TypingText>
            <br />
            <br />
            <TypingShell><b>{typingShell}</b></TypingShell>
          </HeaderEffect>
        </Header>

        <SectionBox>
          <Picture/>
          <Contact/>
        </SectionBox>

        <SectionBox>
          <About />
        </SectionBox>

        <Footer>
          <p><b>edysoncarlos</b> • 2024 • MZ</p>
        </Footer>
      </Content>
    </Container>
  );
};

export default App;
