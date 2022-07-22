import React from 'react';
import {
  Container,
  Box,
  Heading2,
  Card,
  CardBody,
  CardHeading,
  CardDescription,
} from '../../components';

export const Writings = () => {
  return (
    <React.Fragment>
      <Container>
        <Box marginTop='80px' marginBottom='30px'>
          <Heading2>Writing</Heading2>
        </Box>
        <Box margin='1em'>
          <Card>
            <CardBody>
              <CardHeading>Blog</CardHeading>
              <CardDescription>@shotastageのブログ記事です</CardDescription>
            </CardBody>
          </Card>
        </Box>
        <Box margin='1em'>
          <Card onClick={() => (window.location.href = 'https://zenn.dev/shotastage')}>
            <CardBody>
              <CardHeading>Zenn</CardHeading>
              <CardDescription>テックブログ記事は主にZennに記述しています。</CardDescription>
            </CardBody>
          </Card>
        </Box>
        <Box margin='1em'>
          <Card
            style={{ background: '#1be31b' }}
            onClick={() => (window.location.href = 'https://qiita.com/shotastage')}
          >
            <CardBody>
              <CardHeading>Qiita</CardHeading>
              <CardDescription>@shotastageのQiita記事はこちら</CardDescription>
            </CardBody>
          </Card>
        </Box>
      </Container>
    </React.Fragment>
  );
};
