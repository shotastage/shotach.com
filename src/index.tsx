import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import MainRouter from './routers/main-router';
import NormalizeCSS from 'normalize-css.ts';
import { GlobalStyle } from './styles/globalStyle';
import './i18n/config';
import reportWebVitals from './reportWebVitals';

const GlobalStyles = createGlobalStyle`
  ${NormalizeCSS}
  ${GlobalStyle}
`;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <GlobalStyles />
    <MainRouter />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
