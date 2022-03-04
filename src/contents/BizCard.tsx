import styled from "styled-components";
import {
  Box,
  Image,
  Heading3,
  Heading4,
  Flex,
} from '../components';

const ModalImage = styled.img.attrs(props => ({
  width: props.width || '100%',
}))`
  max-width: ${props => props.width};
  object-fit: cover;
`;

export const BizCardDetail = () => {
  return (
    <Flex flexDirection="column" alignItems="flex-start" marginRight="15px" marginLeft="15px">
      <Heading3>プロフィール</Heading3>

      <p>慶應義塾大学SFC 環境情報学部を卒業</p>
      <p>慶應義塾大学大学院に進学</p>
      <p>そんな、イベントで来場者が最初に触るのがこの受付来場システム。最初からより良い体験を創出するためテーマである「SDGs」にマッチした、またインタラクションを取り入れたアプリケーションに仕上げました。</p>

      <Heading4>使用した技術</Heading4>


      <p>
        このサイトはReactを使用してFull-TypeScriptで記述しています。また、以下のライブラリを使用しています。
      </p>
      <Heading4>オペレーションシステム</Heading4>
      <Box width='100%' center>
        <Image
          imgSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Freception_slack_integration.png?alt=media"
          webPSrc="https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Freception_slack_integration.webp?alt=media"
          alt="Screen shots"
          imgComponent={ModalImage}
        />
      </Box>
      <p>この受付システムは、イベントを運営する管理スタッフ側の機能も備えてます。例えば、受付アプリケーションでエラーが発生した場合、その場にいるスタッフが「担当者を呼ぶ」というボタンを押すことで
        上のようにデバイスIDが通知されます。これによって、手の空いてるスタッフがどの端末で問題が起きたかを即座に把握して対応することができます。
        (幸いなことに、２日間でこの機能にお世話になることはありませんでした。)
      </p>

      <Heading4>分析システム</Heading4>
      <Box width='100%' center>
        <Image
          imgSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/9af9c467705d45fd8c22c7c2b4a1cdf2/2019-11-21_10-52-07_800.jpg"
          webPSrc="https://images.microcms-assets.io/assets/fdaf42be86754887af86a7af30ad514d/e07658fa88aa4483837cc2e2c8356b27/reception_heading_cmprs.webp"
          alt="Screen shots"
          imgComponent={ModalImage}
          width="30%"
        />
      </Box>
      <p>来場者の数や、どのゲートでどれくらい入場したかのデーターをリアルタイムで表示するWebアプリケーションの作成を行いました。</p>
      <Box marginBottom='100px' />
    </Flex>
  );
};