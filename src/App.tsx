import React, { Suspense, useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from './env-values';
import Navbar from './components/Navbar';
import { Container } from './components/Grid';
import { Heading } from './components/Typography';
import { Footer, FooterCopyright } from './components/Footer';
import { Avator, Name, UserName, NameArea } from './components/AppComponent';
import { TopBanner } from './components/TopPopup';


// Page Sections
import { StorySection } from './sections/StorySection';
import { Works } from './sections/Works';
import { Writings } from './sections/Writings';
import { SocialSection } from './sections/SocialSection';

const SkillsSection = React.lazy(() =>
  import('./sections/Skills')
    .then(({ SkillsSection }) => ({ default: SkillsSection })),
);


const App = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiClient.GET("https://shota-folio.microcms.io/api/v1/main_contents", [["X-MICROCMS-API-KEY", API_KEYS.microCMSKey]])
    .then((data: any) => {
      setMessage(data.contents);
    });
  }, []);

  const userClick = () => {
    window.location.href = 'https://twitter.com/shotastage';
  };

  return (
    <React.Fragment>
      { message !== '' && <TopBanner>{message}</TopBanner> }
      <Navbar>@shotastage</Navbar>
      <StorySection />
      <Heading>
        <Avator src="https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg" />
        <NameArea>
          <Name>Shota Shimazu</Name>
          <UserName onClick={userClick}>@shotastage</UserName>
        </NameArea>
      </Heading>
      <Container>
        <Works />
        <Writings />
        <Suspense fallback="loading...">
          <SkillsSection />
        </Suspense>
        <SocialSection />
      </Container>
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
}

export default App;
