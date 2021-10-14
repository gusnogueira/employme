import React from 'react';

import { Container } from './styles';

interface ICardInfoProps {
  title: string;
  ammount: string;
}

const CardInfo: React.FC<ICardInfoProps> = ({
  title,
  ammount,
}) => (
  <Container>
    <span>{title}</span>
    <h1>
      {ammount}
    </h1>
  </Container>
);

export default CardInfo;
