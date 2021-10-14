import React from 'react';
import CardInfo from '../components/CardInfo';

import { Container } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <CardInfo
      title="Total de vagas em aberto:"
      ammount="27"
    />
    {' '}
    <CardInfo
      title="Média de candidatos por vaga:"
      ammount="5"
    />
    {' '}
    <CardInfo
      title="Taxa de conversão de abordagens em processos:"
      ammount="50%"
    />
    <CardInfo
      title="Taxa de conversão de abordagens em contratações:"
      ammount="50%"
    />
  </Container>
);

export default Dashboard;
