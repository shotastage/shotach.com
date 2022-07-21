import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import {
  Box,
  Image,
  CardSquare,
  CardIcon,
  Heading3,
  Heading4,
  Heading5,
  Flex,
  Spacer,
} from '../../components';
import { AIMusicContent, BgDescript, CsDescript, TechDescript } from './WorkAIMusicContent';

// Componets
// -------------------------------------------------------
const ModalImage = styled.img.attrs((props) => ({
  width: props.width || '100%',
}))`
  max-width: ${(props) => props.width};
  object-fit: cover;
`;

// Main Page
// -------------------------------------------------------
export const WorkAIMusic = () => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection='column' alignItems='flex-start' marginRight='15px' marginLeft='15px'>
      <Box marginBottom='2em'>
        <Heading3>{t('aim.title')}</Heading3>
      </Box>
      <Box center width='100%'>
        <Image
          imgSrc={AIMusicContent.section1.headingImagePng}
          webPSrc={AIMusicContent.section1.headingImageWebP}
          alt='Screen shots'
          imgComponent={ModalImage}
          width='70%'
        />
      </Box>
      <Box marginTop='3em' marginBottom='1em'>
        <Heading5>{t('aim.heading1')}</Heading5>
      </Box>
      <BgDescript />

      <Box marginTop='3em' marginBottom='1em'>
        <Heading5 style={{ transform: 'rotate(-5deg)' }}>{t('aim.heading21')}</Heading5>
        <Heading5 style={{ marginLeft: '2.5em', transform: 'rotate(-15deg)' }}>
          {t('aim.heading22')}
        </Heading5>
        <Heading5 style={{ marginLeft: '7em', transform: 'rotate(-5deg)' }}>
          {t('aim.heading23')}
        </Heading5>
      </Box>
      <CsDescript />
      <Box marginTop='3em' marginBottom='1em'>
        <Heading5>
          ならば
          <span
            style={{
              fontSize: '3rem',
              marginLeft: '5px',
              marginRight: '5px',
              background:
                'linear-gradient(to right, rgba(255,15,70,1) 0%, rgba(255,193,71,1) 35%, rgba(0,212,255,1) 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }}
          >
            AI
          </span>
          に作ってもらおう
        </Heading5>
      </Box>
      <p>人間ができないのであれば、機械にやって貰えばいいのです。</p>
      <p>そこで、機械学習モデルを用いて自動作曲ができないか研究に取り組むことにしました。</p>
      <p>詳細をお話しする前にAIで作ったメロディーから作成した楽曲をお聞きください。</p>
      <audio controls src={AIMusicContent.section2.audio}>
        お使いのブラウザは<code>audio</code> 要素をサポートしていません.
      </audio>

      <Box marginTop='3em' marginBottom='1em'>
        <Heading4>使用した技術</Heading4>
      </Box>

      <Box center width='100%'>
        <Spacer />
        <CardSquare>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/tensorflow.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon type='image/svg+xml' data={`${process.env.PUBLIC_URL}/assets/python.svg`} />
        </CardSquare>
        <CardSquare>
          <CardIcon
            type='image/svg+xml'
            data='https://upload.wikimedia.org/wikipedia/commons/a/a0/MIDI_LOGO.svg'
          />
        </CardSquare>
        <Spacer />
      </Box>
      <TechDescript />

      <Box marginTop='3em' marginBottom='1em'>
        <Heading5>Basic RNN</Heading5>
      </Box>
      <p>
        まずは、最も基本的なReccurent Neural Network
        (RNN)アルゴリズムで実験を行いました。RNNは、翻訳など時系列データの学習に長けた機械学習アルゴリズムの一つです。
      </p>

      <audio
        controls
        src='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2FBasic%20RNN%20Music.mp3?alt=media'
      >
        お使いのブラウザは<code>audio</code> 要素をサポートしていません.
      </audio>

      <Box marginTop='3em' marginBottom='1em'>
        <Heading5>Lookback RNN</Heading5>
      </Box>
      <p>
        Lookback RNNは通常のRNNに1,
        2章節前のイベントを繰り返すかどうかという要素を与えた学習モデルです。上述した基本的なRNNと比べて、メロディーの小説毎の繰り返しを学習することができます。
      </p>

      <audio
        controls
        src='https://firebasestorage.googleapis.com/v0/b/shota-folio.appspot.com/o/assets%2Faimusic%2FBasic%20RNN%20Music.mp3?alt=media'
      >
        お使いのブラウザは<code>audio</code> 要素をサポートしていません.
      </audio>

      <Box marginTop='3em' marginBottom='1em'>
        <Heading5>まとめと展望</Heading5>
      </Box>
      <p>
        機械学習を用いた自動作曲は一定程度のメロディーを作ることができます。
        <br />
        最終的に出来上がった曲に関してもダンジョンゲームのBGMには使えそうです。
        <br />
      </p>
      <p>
        ただ、シンフォニーのようなパートの多い楽曲を一度に作ることができなかったり学習と生成にかかるコンピューティングリソースが膨大になるという課題もあります。
        <br />
        (今回もMac Pro相当のスペックを持つLinux Machineを同時に5台動かしています)
        <br />
        これらの問題は、並列処理が可能なCNNを時系列データに適用する手法などで解決できる余地があります。
      </p>

      <Box marginBottom='100px' />
    </Flex>
  );
};
