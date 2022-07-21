import styled from 'styled-components';

const ButtonBase = styled.button`
  border: none;
  cursor: pointer;
  outline: none;
  padding: 0;
  appearance: none;
`;

export const Button = styled(ButtonBase)`
  display: inline-block;
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  transition: 0.5s;
  color: #363636;
  border-radius: calc(45px / 2);
  background: #c2c2c2;
  font-weight: bold;
  font-size: 0.75rem;
  font-family: 'Roboto Condensed', sans-serif;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: #333;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;

export const CopyButton = styled(Button)`
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  width: 77px;
  min-width: 77px;
  font-size: 1rem;
  background: #2440c9;
  color: white;

  &:hover {
    letter-spacing: 1px;
  }

  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const RoundButton = styled(ButtonBase)`
  display: inline-block;
  min-width: 100px;
  padding-left: 10px;
  padding-right: 10px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  transition: 0.5s;
  color: #363636;
  border-radius: calc(45px / 2);
  background: #c2c2c2;
  font-weight: bold;
  font-size: 0.75rem;
  font-family: 'Roboto Condensed', sans-serif;

  &:focus {
    outline: 0;
  }

  &:hover {
    background: #333;
    color: white;
  }

  a {
    text-decoration: none;
    color: white;
  }

  @media screen and (max-width: 480px) {
    font-size: 0.8rem;
  }
`;
