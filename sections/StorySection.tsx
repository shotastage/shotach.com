import React from 'react';
import { Suspense, useEffect, useState } from 'react';
import { ApiClient } from 'mini-apiclient';
import styled from 'styled-components';
import Stories from 'react-insta-stories';
import Modal from 'react-modal';
import SvgIcon from '../assets/close_button.svg';
import { useDimension } from '../hooks';
import { API_KEYS } from '../env-values';
import { Image } from '../components/Image';

const Story = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
  width: 100%;
  background: white;
  margin: 0;
  margin-top: 0;
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StoryCircleBase = styled.div`
  flex: 0 0 70px;
  min-width: 70px;
  min-height: 70px;
  max-width: 70px;
  max-height: 70px;
  background: transparent;
  border: 1px solid #c0c0c0;
  border-radius: calc(70px / 2);
  margin: 10px 10px 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  picture {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 480px) {
    margin: 5px 5px 0 5px;
  }
`;

const StoryCircleImage = styled.img`
  width: 66px !important;
  height: 66px !important;
  object-fit: cover;
  border-radius: calc(66px / 2);
`;

const StoryCircleBlank = styled.span`
  width: 66px;
  height: 66px;
  background: pink;
  border-radius: calc(66px / 2);
`;

interface StoryCircleProps {
  webpImageUrl?: string;
  imageUrl: string;
  altText: string;
  onClick: () => void;
}

export interface StoryModalProps {
  children?: React.ReactNode;
  isOpen: boolean | false;
  onClose(initialState: boolean): void;
}

export const ModalCloseButton = styled.button`
  position: absolute;
  z-index: 1000;
  bottom: 2em;
  background-color: #aaaaaa;
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalIconObjElm = styled.img`
  width: 18px;
  height: 18px
  pointer-events: none;
`;

export const ModalClose = ({ ...props }) => {
  return (
    <ModalCloseButton {...props}>
      <ModalIconObjElm src={SvgIcon} alt='close icon' />
    </ModalCloseButton>
  );
};

export const StoryModal = (props: StoryModalProps) => {
  const { height } = useDimension();
  const { children, isOpen, onClose } = props;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose(false)}
      closeTimeoutMS={310}
      className='StoryModal'
      overlayClassName='StoryModalOverlay'
      style={{
        content: {
          height: height,
        },
      }}
    >
      <ModalClose onClick={() => onClose(false)} />
      {children}
    </Modal>
  );
};

const StoryCircle = (props: StoryCircleProps) => {
  return (
    <StoryCircleBase onClick={props.onClick}>
      <Suspense fallback={<StoryCircleBlank />}>
        <Image
          alt={props.altText}
          webPSrc={props.webpImageUrl}
          imgSrc={props.imageUrl}
          imgComponent={StoryCircleImage}
        />
      </Suspense>
    </StoryCircleBase>
  );
};

export const StorySection = () => {
  const [stories, setStories] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    ApiClient.GET('https://shota-folio.microcms.io/api/v1/story', [
      ['X-MICROCMS-API-KEY', API_KEYS.microCMSKey],
    ]).then((data) => {
      setStories(Object(data).contents);
    });
  }, []);

  return (
    <Story>
      <div style={{ height: '1px', width: '30px' }} />
      {stories.map((value) => {
        return value['headlineMinified'] ? (
          <StoryCircle
            onClick={() => setIsOpen(true)}
            key={value['id']}
            altText={value['story_id']}
            webpImageUrl={value['headlineMinified']['url']}
            imageUrl={value['headline']['url']}
          />
        ) : (
          <StoryCircle
            onClick={() => setIsOpen(true)}
            key={value['id']}
            altText={value['story_id']}
            imageUrl={value['headline']['url']}
          />
        );
      })}
      <StoryModal isOpen={modalIsOpen} onClose={() => setIsOpen(false)}>
        <Stories
          loop
          keyboardNavigation
          defaultInterval={8000}
          stories={stories2}
          storyContainerStyles={{ borderRadius: 8, overflow: 'hidden' }}
        />
      </StoryModal>
    </Story>
  );
};

const stories2 = [{}];
