import styled, { css } from 'styled-components';

const textAlignment = css`
  text-align: center;
`;

const HeadingBase = css`
  margin: 0;
  margin-top: 0.5em;
  margin-bottom: 1em;
`;

export const Heading = styled.div`
  ${textAlignment}
  display: flex;
  background-clip: border-box;
  background: white;
  height: 450px;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 480px) {
    height: 300px;
    width: 100%;
  }
`;

export const Heading1 = styled.h1`
  ${HeadingBase}
  font-size: 3.7rem;
`;

export const Heading2 = styled.h2`
  ${HeadingBase}
  font-size: 3.1rem;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Heading3 = styled.h3`
  ${HeadingBase}
  font-size: 2.6rem;
`;

export const Heading4 = styled.h4`
  ${HeadingBase}
  font-size: 2.1rem;
`;

export const Heading5 = styled.h5`
  ${HeadingBase}
  font-size: 1.8rem;
`;
