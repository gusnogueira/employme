import React from 'react';
import CardInfo from '../components/CardInfo';
import LineChart from '../components/LineChart';
// import BarChart from '../components/BarChart';

import { ContainerInfo, ContainerChart } from './styles';

const Dashboard: React.FC = () => (
  <>
    <ContainerInfo>
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
    </ContainerInfo>
    <ContainerChart>
      <LineChart />
    </ContainerChart>
  </>
);

export default Dashboard;
