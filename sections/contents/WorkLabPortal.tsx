import React from 'react';
import styled from 'styled-components';
import { Box, Image, Heading3, Heading4, Heading5, SHText, Flex } from '../../components';

const ModalImage = styled.img.attrs((props) => ({
  width: props.width || '100%',
}))`
  max-width: ${(props) => props.width};
  object-fit: cover;
`;

export const WorksLaboPortal = () => {
  return (
    <Flex flexDirection='column' alignItems='flex-start' marginRight='15px' marginLeft='15px'>
      <Heading3>Labo Portal</Heading3>
      <p>細かい雑務をこなしてくれるWebアプリケーションです</p>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.54.02.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <p>Labo Portalは研究室運営を補助するポータサイト＆Webアプリケーションです。</p>
      <Heading4>背景</Heading4>
      <SHText>
        研究室のメンバーが増加し、いつもの教室の定員を超えてしまったため毎週空いている教室を予約するなどの作業が必要になりました。同時に、教室の場所を告知する必要があり発表者をローテーションで振り分けて連絡するなどの事務作業が多くなっていました。
      </SHText>
      <SHText>
        そこで、これらを自動で行うWebシステムの開発に踏み切りました。成績評定に関わる出席情報を自分で管理するのは心許ないのでこれもシステムに任せることにしました。
        しかしWebを使った出席は、不正出席が可能であり信頼性に欠けると言う話も上がっていたためある程度の不正対策も同時に行うことにしました。
      </SHText>
      <Heading4>ギャラリー</Heading4>

      <Heading5>ホームスクリーン</Heading5>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.49.03.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.51.00.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <p>
        ホームスクリーンにはお知らせが表示されます。またお知らせの重要度によって色分けができます。締め切り日などの超重要なお知らせは赤になり注意を喚起します。
      </p>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.49.06.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.51.00.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <Box center width='100%'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.51.12.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
      <Box center width='100%' marginBottom='100px'>
        <Image
          imgSrc='https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg'
          webPSrc='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Flaboportal%2FScreen-Shot-2020-06-15-at-19.51.25.webp?alt=media'
          alt='Screen shots'
          imgComponent={ModalImage}
        />
      </Box>
    </Flex>
  );
};
