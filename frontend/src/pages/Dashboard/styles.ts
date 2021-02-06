import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const Header = styled.header`
  padding: 32px;
  background: #343434;
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  img {
    width: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;
  }

  svg {
    color: #fff;
    width: 20px;
    height: 20px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    line-height: 24px;
  }

  span {
    color: #fff;
  }

  strong {
    color: #09b1f9;
    text-transform: capitalize;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 30px auto;
  padding: 0 32px;
`;

export const SubHeader = styled.div`
  display: flex;
  align-items:center;
  justify-content: space-between;

  > a {
    display: flex;
    align-items: center;
    color: #09b1f9;
    text-decoration: none;
    margin-top: 24px;
    transition: color 0.2s;
    font-size: 18px;

    svg {
      margin-right: 16px;
    }

    &:hover {
      color:  ${shade(0.2, '#09b1f9')};
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 20px;

  @media (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items:center;
  width: 350px;
  height: 350px;
  background: #09b1f9;
  border-radius: 10%;
  margin: 20px 0;

  img {
    width: 100%;
    height: 200px;
    border-radius: 10%;
  }

  p {
    padding: 5px;
    text-align: center;
  }
`;

export const ButtonsContent = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
  gap: 60px;

  button {
    border: 0;
    background: transparent;
  }
`;