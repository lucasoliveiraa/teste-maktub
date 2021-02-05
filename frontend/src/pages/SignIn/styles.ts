import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 700px;

  form {
    margin: 70px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

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