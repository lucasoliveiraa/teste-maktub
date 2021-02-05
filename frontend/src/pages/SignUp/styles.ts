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

    input {
      background: #09b1f9;
      border-radius: 10px;
      border: 2px solid #09b1f9;
      padding: 16px;
      width: 100%;
      color: #fff;

      &::placeholder {
        color: #d1d1d1;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #343434;
      height: 56px;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      color: #fff;
      font-weight: bold;
      width: 100%;
      margin-top: 17px;
      transition: background-color 0.2s;

      &:hover {
        background:  ${shade(0.2, '#343434')};
      }
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
