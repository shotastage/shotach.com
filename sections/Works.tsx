import React, { Suspense, useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Container,
  FullContainer,
  Box,
  Spacer,
  Flex,
  ContainerMargin,
  Image,
  Card,
  CardHeading,
  CardDescription,
  Heading2,
  RoundButton,
  SHModal,
} from '../components';
import HorizontalNoscroll from '../styles/NoneScrollBar';

const WorksInception = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksInception,
  })),
);

const WorksLaboPortal = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksLaboPortal,
  })),
);

const WorksDjangoMirage = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorksDjangoMirage,
  })),
);

const WorksShotachCom = React.lazy(() =>
  import('./contents/WorksContents').then((module) => ({
    default: module.WorksShotachCom,
  })),
);

const WorkAIMusic = React.lazy(() =>
  import('./contents').then((module) => ({
    default: module.WorkAIMusic,
  })),
);

const WorkCardsSection = styled(Box)`
  width: 100vw;
  display: flex;
  overflow-x: scroll;
  overflow-y: hidden;
  color: inherit;
  ${HorizontalNoscroll}
`;

const WorkCard = styled(Card)`
  min-height: 400px;
  max-height: 400px;
  min-width: 250px;
  max-width: 250px;
  margin-right: 1rem;
  margin-left: 1rem;

  @media (max-width: 480px) {
    margin-right: 0.7rem;
    margin-left: 0.7rem;
  }
`;

/*
const BhaaCard = styled(WorkCard)`
  background: #fc1547;

  * {
    color: #fff;
  }
`;
*/

const WarkCardTopMargin = styled.div`
  background: transparent;
  @media (max-width: 480px) {
    min-width: 1rem;
  }
`;

const TileImage = styled.img`
  max-width: 150px;
  object-fit: cover;
`;

const CardButton = styled(RoundButton)`
  height: 100%;
`;

export const Works = () => {
  const { t } = useTranslation();

  const [modalIsOpen, setIsOpen] = useState(false);
  const [aimIsOpen, setAimIsOpen] = useState(false);

  const [laboPortalIsOpen, setLaboPortalIsOpen] = useState(false);
  const [djModalIsOpen, setDjModalIsOpen] = useState(false);
  const [siteModalIsOpen, setSiteModalIsOpen] = useState(false);

  return (
    <React.Fragment>
      <Container>
        <Box marginTop='80px' marginBottom='30px'>
          <Heading2>Works</Heading2>
        </Box>
      </Container>
      <FullContainer>
        <WorkCardsSection>
          <ContainerMargin />
          <WarkCardTopMargin />
          <WorkCard>
            <CardHeading>{t('aim.cardTitle')}</CardHeading>
            <Box center>
              <Image
                imgSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Faim_header.png?alt=media'
                webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Faim_header.webp?alt=media'
                alt='Screen shots'
                imgComponent={TileImage}
              />
            </Box>
            <CardDescription>
              <p>AI技術を用いた強力な作曲アシスタント.</p>
              <Flex>
                <CardButton onClick={() => setAimIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={aimIsOpen} onClose={() => setAimIsOpen(false)}>
              <Suspense fallback={<div />}>
                <WorkAIMusic />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>
              ファースト
              <br />
              インプレッションを
              <br />
              Sustainableに
            </CardHeading>
            <Box center>
              <Image
                imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
                webPSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp'
                alt='Screen shots'
                imgComponent={TileImage}
              />
            </Box>
            <Spacer />
            <CardDescription>
              <Flex>
                <CardButton onClick={() => setIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={modalIsOpen} onClose={() => setIsOpen(false)}>
              <Suspense fallback={<div />}>
                <WorksInception />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>自分の秘書。研究室のリーダー</CardHeading>
            <Spacer />
            <Box center>
              <Image
                imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
                webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.54.02.webp?alt=media'
                alt='Screen shots'
                imgComponent={TileImage}
              />
            </Box>
            <Spacer />
            <CardDescription>
              <p>研究室運営のためのWebアプリケーションポータルサイト</p>
              <Flex>
                <CardButton onClick={() => setLaboPortalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={laboPortalIsOpen} onClose={() => setLaboPortalIsOpen(false)}>
              <Suspense fallback={<div />}>
                <WorksLaboPortal />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>
              瞬時に開発
              <br />
              すぐに披露
            </CardHeading>
            <Spacer />
            <Box center>
              <Image
                imgSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Fdjmirage%2Fdjmirage_logo.png?alt=media'
                webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Fdjmirage%2Fdjmirage_logo.webp?alt=media'
                alt='Screen shots'
                imgComponent={TileImage}
              />
            </Box>
            <Spacer />
            <CardDescription>
              <p>Webバックエンド開発を瞬時に終わらせる効率化CLIのお話。</p>
              <Flex>
                <CardButton onClick={() => setDjModalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={djModalIsOpen} onClose={() => setDjModalIsOpen(false)}>
              <Suspense fallback={<div />}>
                <WorksDjangoMirage />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WorkCard>
            <CardHeading>shotach.com</CardHeading>
            <Box center>
              <Image
                imgSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Fshotach_hd.png?alt=media'
                webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2Fshotach_hd.webp?alt=media'
                alt='Screen shots'
                imgComponent={TileImage}
              />
            </Box>
            <CardDescription>
              <p>@shotastageのポートフォリオサイト遂に公開</p>
              <Flex>
                <CardButton onClick={() => setSiteModalIsOpen(true)}>More</CardButton>
              </Flex>
            </CardDescription>
            <SHModal isOpen={siteModalIsOpen} onClose={() => setSiteModalIsOpen(false)}>
              <Suspense fallback={<div />}>
                <WorksShotachCom />
              </Suspense>
            </SHModal>
          </WorkCard>
          <WarkCardTopMargin />
        </WorkCardsSection>
      </FullContainer>
    </React.Fragment>
  );
};
