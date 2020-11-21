import styled from 'styled-components';

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
  height: 100%;
  max-width: 400px;
  max-height: 500px;
  border: 6px solid #8d99ae;
  background-color: #edf2f4;
  border-radius: 10px;
`;

export const IncrementDecrement = styled.div`
  display: fixed;
`;

export const H1 = styled.h1`
  color: #ef233c;
  font-size: 150px;
`;
