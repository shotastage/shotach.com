import type { NextPage } from 'next';
import React, { useEffect, useState, Suspense } from 'react';
import { useTranslation } from 'react-i18next';

import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { Flex, Navbar, Heading, Image, Footer, FooterCopyright, SHModal } from '../components';
import { Avator, Name, UserName } from '../components/AppComponent';
import { TopBanner } from '../components/TopPopup';

import { StorySection, Works, Writings, SkillsSection, SocialSection } from '../contents/sections';

import { BizCard, BizCardButton, BizDepartment } from '../contents/BizCard';

import { ApiClient } from 'mini-apiclient';
import { API_KEYS } from '../env-values';

import { BizCardDetail } from '../contents/BizCard';



/* eslint react/display-name: 0 */
const MemorizedComponents = React.memo(() => {
  const { t } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Navbar>@bout shota</Navbar>
      <StorySection />
      <Heading style={{ display: 'flex', justifyContent: 'center' }}>
        <Flex>
          <BizCard onClick={() => setIsOpen(true)}>
            <Image
              imgSrc='https://pbs.twimg.com/profile_images/1414945557999665161/W_ccWI58_400x400.jpg'
              webPSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/b96412c26fe9490296ad05db23a692e4/IMG_0086.webp'
              alt='avator image'
              imgComponent={Avator}
            />
            <Flex flexDirection='column' alignItems='flex-start' marginLeft='2em'>
              <Flex flexDirection='column' alignItems='flex-start'>
                <BizDepartment>{t('bizCard.department')}</BizDepartment>
                <Name>Shota Shimazu</Name>
                <UserName>@shotastage</UserName>
              </Flex>
              <BizCardButton onClick={() => setIsOpen(true)}>
                {window.ontouchstart !== undefined && 0 < window.navigator.maxTouchPoints
                  ? t('bizCard.touch')
                  : t('bizCard.click')}
              </BizCardButton>
            </Flex>
          </BizCard>
          <SHModal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <BizCardDetail />
          </SHModal>
        </Flex>
      </Heading>
      <Works />
      <Writings />
      <SkillsSection />
      <SocialSection />
      <Footer>
        <FooterCopyright />
      </Footer>
    </React.Fragment>
  );
});

const Home: NextPage = () => {

  const [message, setMessage] = useState('');

  useEffect(() => {
    ApiClient.GET('https://shota-folio.microcms.io/api/v1/main_contents', [
      ['X-MICROCMS-API-KEY', API_KEYS.microCMSKey],
    ]).then((data) => {
      setMessage(Object(data).contents);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="SFC16 政策メディア研究科 | RG NECO Swift, FlutterとGoが好きです. Bhaaとか http://l.pnstr.com とか http://tipstock.net 作ってます"
        />
        <meta property="og:site_name" content="shotastageのポートフォリオ" />
        <meta property="og:title" content="@shotastageのポートフォリオ" />
        <meta property="og:description" content="SFC16 政策メディア研究科 | RG NECO Swift, FlutterとGoが好きです. Bhaaとか http://l.pnstr.com とか http://tipstock.net 作ってます" />
        <meta property="og:url" content="https://shotach.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://shotach.com/images/avator.jpg" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <title>@shotastage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <React.Fragment>
        {message !== '' && <TopBanner>{message}</TopBanner>}
        <MemorizedComponents />
      </React.Fragment>
    </div>
  )
}

export default Home
