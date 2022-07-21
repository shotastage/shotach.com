import React from 'react';
import styled from 'styled-components';
import { Box, Image, Heading3, Heading4, ModalText, Flex, Button } from '../../components';
import WorkDjangoMirageContent from './WorkDjangoMirageContent';

const ModalImage = styled.img.attrs((props) => ({
  width: props.width || '100%',
}))`
  max-width: ${(props) => props.width};
  object-fit: cover;
`;

export const WorksDjangoMirage = () => {
  return (
    <Flex flexDirection='column' alignItems='flex-start' marginRight='15px' marginLeft='15px'>
      <Box center width='100%'>
        <Image
          imgSrc={WorkDjangoMirageContent.section1.headingImagePng}
          webPSrc={WorkDjangoMirageContent.section1.headingImageWebP}
          alt='Mirage Django Logo'
          imgComponent={ModalImage}
        />
      </Box>
      <Box marginBottom='2em'>
        <Heading3>Django Mirage</Heading3>
      </Box>
      <ModalText>{WorkDjangoMirageContent.section1.description}</ModalText>
      <Button
        onClick={() => (window.location.href = 'https://github.com/shotastage/mirage-django-lts')}
      >
        Github Repository
      </Button>

      <Box marginTop='3em' marginBottom='1em'>
        <Heading4>背景</Heading4>
      </Box>

      <ModalText>{WorkDjangoMirageContent.section2.description}</ModalText>

      <Box marginTop='3em' marginBottom='1em'>
        <Heading4>主な機能</Heading4>
      </Box>

      <table style={{ border: '1px solid #333' }}>
        <thead>
          <tr>
            <th>Commands</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid #333' }}>new</td>
            <td style={{ border: '1px solid #333' }}>Create a new Django project.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>new:react</td>
            <td style={{ border: '1px solid #333' }}>
              Create a new Django API project with React.js front-end.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>new:ng</td>
            <td style={{ border: '1px solid #333' }}>
              Create a new Django API project with Angular.
            </td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>c or console</td>
            <td style={{ border: '1px solid #333' }}>Launch Django Python shell.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>c:db</td>
            <td style={{ border: '1px solid #333' }}>Launch databse shell.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>db:migrate</td>
            <td style={{ border: '1px solid #333' }}>Create and apply new migrations.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>db:merge</td>
            <td style={{ border: '1px solid #333' }}>Merge fragmented migrations.</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid #333' }}>db:reset</td>
            <td style={{ border: '1px solid #333' }}>
              Clear all tables and data. (SQLite debuggable only)
            </td>
          </tr>
        </tbody>
      </table>

      <Box marginBottom='80px' />
    </Flex>
  );
};
