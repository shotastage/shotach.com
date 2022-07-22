import { css } from 'styled-components';

const HorizontalNoscroll = css`
  overflow-x: scroll;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default HorizontalNoscroll;
