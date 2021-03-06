import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
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
`;