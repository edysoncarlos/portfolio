import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  max-width: 300px;
  height: auto;
  border: 3px solid #18FFFF;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
`;

const PictureContainer = styled.div`
  margin-top: 40px;
  margin-left: 20px;
  flex-shrink: 0; 
  overflow: hidden; 
`;

const Picture = () => {
  return (
    <PictureContainer>
      <Image src="/generaleddy.png" alt="Your Image" />
    </PictureContainer>
  );
};

export default Picture;
