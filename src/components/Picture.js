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
  margin-top: 30px;
  align-items: center;
  flex-shrink: 0; 
  overflow: hidden; 
`;
const imageUrl = process.env.PUBLIC_URL + '/generaleddy.png';
const Picture = () => {
  return (
    <PictureContainer>
      <Image src={imageUrl} alt="..." />
      
    </PictureContainer>
  );
};

export default Picture;
