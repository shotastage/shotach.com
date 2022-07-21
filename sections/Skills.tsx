import React from 'react';
import styled from 'styled-components';
import { Container, Grid, GridGlobal, CardSquare, CardIcon, Heading2, Box } from '../components';

const SkillsGrid = styled(Grid)`
  display: flex;
  flex-direction: column;
`;

const SkillsBlock = styled.div`
  display: flex;
  overflow: hidden;
  overflow-x: scroll;
`;

// MARK: Skills grid layout
const SkillGridLayout: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 15,
  rowEnd: 16,
};

const SkillMaker = (name: string, dataPath: string) => {
  return (
    <CardSquare>
      <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/${dataPath}`} />
    </CardSquare>
  );
};

export const SkillsSection = (): JSX.Element => {
  return (
    <Container>
      <Box marginTop='80px' marginBottom='30px'>
        <Heading2>Skills & Experiences</Heading2>
      </Box>
      <SkillsGrid global={SkillGridLayout}>
        <SkillsBlock>
          {SkillMaker('Swift', 'swift.svg')}
          {SkillMaker('TypeScript', 'typescript-icon.svg')}
          {SkillMaker('Python', 'python.svg')}
          {SkillMaker('Go', 'go.svg')}
          {SkillMaker('React', 'react.svg')}
          {SkillMaker('Google Cloud Platform', 'google-cloud.svg')}
          {SkillMaker('AWS', 'aws.svg')}
        </SkillsBlock>
        <SkillsBlock>
          {SkillMaker('Djnago', 'django-icon.svg')}
          {SkillMaker('Play Framework', 'play.svg')}
          {SkillMaker('WordPress', 'wordpress-icon.svg')}
          {SkillMaker('Ubuntu', 'ubuntu.svg')}
          {SkillMaker('HTML5', 'html-5.svg')}
          {SkillMaker('CSS3', 'css-3.svg')}
          {SkillMaker('Sass', 'sass.svg')}
        </SkillsBlock>
        <SkillsBlock>{SkillMaker('Git', 'git-icon.svg')}</SkillsBlock>
      </SkillsGrid>
    </Container>
  );
};
