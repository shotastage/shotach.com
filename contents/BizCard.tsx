import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Box, Heading3, Heading4, Flex } from '../components';

const ModalText = styled.p`
  line-height: 3rem;
`;

export const BizCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 530px;
  aspect-ratio: 7 / 4;
  background: white;
  border-radius: 8px;
  box-shadow: 0 6px 12px -3px rgba(0, 0, 0, 0.3);

  @media screen and (max-width: 480px) {
    max-width: 400px;
    min-width: 200px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const BizDepartment = styled.span`
  font-size: 1rem;

  @media screen and (max-width: 480px) {
    font-size: 0.7rem;
  }
`;

export const BizCardButton = styled.button`
  background: none;
  border: none;
  outline: none;
  appearance: none;
  margin: 0;
  padding: 0;
  margin-top: 1em;
  font-size: 0.8rem;
  color: #707070;
`;

export const BizCardDetail = () => {
  const { t } = useTranslation();

  return (
    <Flex flexDirection='column' alignItems='flex-start' marginRight='15px' marginLeft='15px'>
      <Heading3>{t('profile.title')}</Heading3>
      <Box marginTop='3em' marginBottom='1em'>
        <Heading4>{t('profile.heading1')}</Heading4>
      </Box>
      <ModalText>
        <span>
          {t('profile.desc001')}
          <br />
          {t('profile.desc002')}
        </span>
      </ModalText>
      <ModalText>
        <span>{t('profile.desc101')}</span>
      </ModalText>
      <ModalText>
        <span>
          {t('profile.desc003')}
          <br />
        </span>
      </ModalText>
      <ModalText>
        {t('profile.desc004')}
        <br />
      </ModalText>
      <Heading4>SHOTA&apos;s Philosophy</Heading4>
      <p>自分がソフトウェアを開発する理由はただ一つ</p>
      <p>「おもしろい」から</p>
      <p>テクノロジーを用いて使ってる人に驚きを届けられると思うからです。</p>
      <p>従って、以下のポイントは非常にこだわります。</p>
      <ul>
        <li>ユーザー視点に立った仕様の策定</li>
        <li>使っているだけで楽しさを体験できる工夫</li>
      </ul>
      <Box marginBottom='100px' />
    </Flex>
  );
};
