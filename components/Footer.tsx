import React from 'react';
import styled from 'styled-components';

const FooterArea = styled.div`
  margin: 0;
  margin-bottom: env(safe-area-inset-bottom);
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

type Props = {
  children: React.ReactNode;
};

export const Footer = (props: Props) => {
  return <FooterArea>{props.children}</FooterArea>;
};

const CopyrightText = styled.p`
  font-family: 'Roboto', sans-serif;
  width: 100%;
  text-align: center;
  letter-spacing: 0.1em;
  margin-top: 1em;
  margin-bottom: 1em;
  @media screen and (max-width: 480px) {
    font-size: 0.6rem;
  }
`;

export const FooterCopyright = () => {
  const currentDate = new Date().getFullYear();

  return (
    <CopyrightText>
      Copyright © {currentDate}{' '}
      <FooterLink href='https://twitter.com/shotastage' target='_blank' rel='noopener noreferrer'>
        Shota Shimazu
      </FooterLink>
      , All rights reserved.
    </CopyrightText>
  );
};
