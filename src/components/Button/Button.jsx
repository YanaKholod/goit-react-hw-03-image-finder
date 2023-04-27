import React from 'react';
import { Styled } from './StyleButton';

const Button = ({ clickLoad }) => {
  return (
    <Styled.Button onClick={clickLoad} type="button">
      Load more
    </Styled.Button>
  );
};

export default Button;
