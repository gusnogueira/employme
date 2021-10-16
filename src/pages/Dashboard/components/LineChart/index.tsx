/* eslint-disable no-unused-vars */
import React from 'react';
import {
  LineChart as LineChartRecharts,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Container } from './styles';

const data = [
  {
    mes: 'Abr/21',
    Abordagens: 30,
    Respostas: 22,
    Contratações: 13,
  },
  {
    mes: 'Mai/21',
    Abordagens: 20,
    Respostas: 18,
    Contratações: 7,
  },
  {
    mes: 'Jun/21',
    Abordagens: 27,
    Respostas: 12,
    Contratações: 10,
  },
  {
    mes: 'Jul/21',
    Abordagens: 18,
    Respostas: 18,
    Contratações: 2,
  },
  {
    mes: 'Ago/21',
    Abordagens: 23,
    Respostas: 15,
    Contratações: 5,
  },
  {
    mes: 'Set/21',
    Abordagens: 34,
    Respostas: 23,
    Contratações: 5,
  },
];

export default function LineChart() {
  return (
    <Container>
      <ResponsiveContainer>
        <LineChartRecharts
          data={data}
        >
          <CartesianGrid
            strokeDasharray="4 4"
            style={{
              marginBottom: '10px',
            }}
          />
          <XAxis
            dataKey="mes"
            tickMargin={10}
          />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Abordagens"
            stroke="#3346F0"
            strokeWidth={3}
          />
          <Line type="monotone" dataKey="Respostas" stroke="#FC5050" strokeWidth={3} />
          <Line type="monotone" dataKey="Contratações" stroke="#83ca9d" strokeWidth={2} />
        </LineChartRecharts>
      </ResponsiveContainer>
    </Container>
  );
}
