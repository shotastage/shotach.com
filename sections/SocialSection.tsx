import React from 'react';
import styled from 'styled-components';
import { Container, Grid, GridGlobal, CardIcon, Heading2, Box } from '../components';

const SocialButtonBase = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  height: 200px;
  width: 350px;
  margin-right: 8em;
  margin-left: 8em;

  @media screen and (max-width: 480px) {
    height: 140px;
    width: 320px;
    margin-right: 3em;
    margin-left: 3em;
  }

  @media screen and (min-width: 481px) and (max-width: 1060px) {
    height: 140px;
    max-width: 200px;
    margin-right: 3em;
    margin-left: 3em;
  }
`;

const Twitter = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  background: #00acee;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
`;

const Instagram = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
  background: #f09433;
  background: linear-gradient(
    45deg,
    #f09433 0%,
    #e6683c 25%,
    #dc2743 50%,
    #cc2366 75%,
    #bc1888 100%
  );
`;

const Github = styled(SocialButtonBase)`
  display: flex;
  align-items: center;
  justify-content: center;
  word-wrap: break-word;
  background-clip: border-box;
  background: #1d1d1d;
  border-radius: 20px;
  margin: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
`;

const SocialGrid = styled(Grid)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
`;

// MARK: Skills grid layout
const FooterGridLayoutGlobal: GridGlobal = {
  colStart: 1,
  colEnd: 4,
  rowStart: 19,
  rowEnd: 20,
};

export const SocialSection = (): JSX.Element => {
  return (
    <Container>
      <Box marginTop='80px' marginBottom='30px'>
        <Heading2>Social</Heading2>
      </Box>
      <SocialGrid global={FooterGridLayoutGlobal}>
        <Twitter onClick={() => window.open('https://twitter.com/shotastage', '_blank')}>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/twitter.svg`} />
        </Twitter>
        <Instagram onClick={() => window.open('https://instagram.com/shotastage', '_blank')}>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/instagram.svg`} />
        </Instagram>
        <Github onClick={() => window.open('https://github.com/shotastage', '_blank')}>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/github.svg`} />
        </Github>
      </SocialGrid>
    </Container>
  );
};
