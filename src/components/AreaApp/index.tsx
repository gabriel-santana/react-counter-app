import React, { useState, useEffect } from 'react';
import { ImPlus, ImMinus } from 'react-icons/im';
import { MdRefresh } from 'react-icons/md';

import Button from '../Button';
import { Container, Content, IncrementDecrement, H1 } from './styles';

const AreaApp: React.FC = () => {
  const [total, setTotal] = useState(Number);

  useEffect(() => {
    setTotal(0);
  }, []);

  function sum() {
    setTotal(total + 1);
  }

  function subtraction() {
    setTotal(total - 1);
  }

  function refresh() {
    setTotal(0);
  }

  return (
    <Container>
      <Content>
        <Button type="submit" onClick={refresh}>
          <MdRefresh size={30} />
        </Button>
        <H1>{total}</H1>
        <IncrementDecrement>
          <Button type="submit" onClick={sum}>
            <ImPlus />
          </Button>
          <Button type="submit" onClick={subtraction}>
            <ImMinus />
          </Button>
        </IncrementDecrement>
      </Content>
    </Container>
  );
};

export default AreaApp;
