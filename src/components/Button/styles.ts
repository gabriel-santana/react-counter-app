import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #8d99ae;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  color: #d90429;
  width: 56px;
  font-weight: 500;
  margin: 30px;
  transition: background-color 0.2s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    background: ${shade(0.2, '#8d99ae')};
  }
`;
