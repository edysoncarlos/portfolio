import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.div`
  display: ${props => props.show ? 'block' : 'none'};
  margin-top: 20px;
`;

const SkillLabel = styled.span`
  font-size: 1rem;
`;

const SkillBar = styled.div`
  width: 100%;
  height: 20px;
  background-color: #393E46;
  margin-top: 5px;
  border-radius: 5px;
  overflow: hidden;
`;

const SkillProgress = styled.div`
  height: 100%;
  background-color: #00ADB5;
`;

const Skills = ({ show, skills }) => {
  return (
    <SkillsContainer show={show}>
      {skills.map(skill => (
        <React.Fragment key={skill.label}>
          <SkillLabel>{skill.label}:</SkillLabel>
          <SkillBar><SkillProgress style={{ width: `${skill.level}%` }} /></SkillBar>
        </React.Fragment>
      ))}
    </SkillsContainer>
  );
};

export default Skills;
