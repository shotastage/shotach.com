export const GlobalStyle = `
  body {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    font-family: 'Avenir','Helvetica Neue','Helvetica','Arial','Hiragino Sans','ヒラギノ角ゴシック',YuGothic,'Yu Gothic','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #f2f2f5;
    box-sizing: border-box;
    margin: 0;
    overflow-x: hidden;
  }

  @supports (-webkit-touch-callout: none) {
    html {
      height: -webkit-fill-available;
    }

    body {
      min-height: 100vh;
      min-height: -webkit-fill-available;
    }
  }

  .ReactModal__Body--open {
    overflow-y: hidden;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }

  .ReactModal__Overlay--after-open{
    opacity: 1;
  }

  .ReactModal__Overlay--before-close{
    opacity: 0;
  }

  .StoryModal {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .StoryModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65, 65, 65, 0.75);
  }

  .SHModal {
    position: absolute;
    top: 40px;
    left: 20%;
    right: 20%;
    bottom: 0px;
    border: none;
    background: #fff;
    overflow: scroll;
    border-radius: 20px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    outline: none;
    padding: 20px;
    padding-top: 30px;
    padding-left: 40px;
    padding-right: 40px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }

    @media screen and (max-width: 1100px) {
      left: 10%;
      right: 10%;
      padding-top: 20px;
      padding-left: 20px;
      padding-right: 20px;
    }

    @media screen and (max-width: 480px) {
      border-radius: 0;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }

  .SHModalOverlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(65, 65, 65, 0.75);
  }
`;
