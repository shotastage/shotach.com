import styled from 'styled-components';

export const AppContainer = styled.div`
  width: 100%;
  padding-right: 1rem;
  padding-left: 1rem;
  margin-right: auto;
  margin-left: auto;
`;

export const Heading1 = styled.h1`
  font-size: 4rem;
  margin-left: 15px;
  font-weight: 300;
`;

export const Name = styled.span`
  font-size: 2.5rem;
  padding: 10px;
  padding-left: 0;
  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
  @media (prefers-color-scheme: dark) {
    color: #333;
  }
`;

export const UserName = styled.span``;

export const NameArea = styled.h1`
  display: flex;
  flex-direction: column;
`;

export const Avator = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.7s ease-in-out;
  @media screen and (max-width: 480px) {
    width: 100px;
    height: 100px;
  }

  &:hover {
    transform: rotate(360deg);
  }
`;
