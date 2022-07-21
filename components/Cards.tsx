import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  word-wrap: break-word;
  background-clip: border-box;
  background: white;
  border-radius: 20px;
  padding: 1.9rem 1.9rem;
  padding-top: 0.2rem;
  margin-top: 10px;
  margin-bottom: 10px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
`;

export const CardSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-clip: border-box;
  background: white;
  border-radius: 30px;
  margin: 10px;
  min-width: 150px;
  min-height: 150px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.06);

  @media screen and (max-width: 1360px) {
    min-width: 130px;
    min-height: 130px;
  }

  @media screen and (max-width: 480px) {
    min-width: 100px;
    min-height: 100px;
    border-radius: 20px;
  }
`;

export const CardIcon = styled.object`
  pointer-events: none;
  width: 80px;
  height: 80px;

  @media screen and (max-width: 480px) {
    width: 55px;
    height: 55px;
  }
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.9rem 1.9rem;
  padding-top: 0.2rem;
`;

export const CardHeading = styled.h3`
  font-size: 1.5rem;
`;

export const CardDescription = styled.div`
  display: flex;
  flex-direction: column;

  p {
    color: #333;
  }
`;
