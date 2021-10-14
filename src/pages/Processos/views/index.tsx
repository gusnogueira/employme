/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import CardProcesso from '../components/CardProcesso';
import mockDados from '../services/ProcessosService';

import {
  StyledButton, HeaderContainer, CardsContainer, StyledInput, StyledSelect,
} from './styles';

const currencies = [
  {
    value: 'nomeCandidato',
    label: 'Nome do Candidato',
  },
  {
    value: 'vaga',
    label: 'Vaga',
  },
  {
    value: 'empresa',
    label: 'Empresa',
  },
  {
    value: 'status',
    label: 'Status',
  },
  {
    value: 'pesquisarPor',
    label: 'Pesquisar por...',
  },
];

const Processos: React.FC = () => {
  const [texto, setTexto] = useState('');
  const [select, setSelect] = useState('pesquisarPor');
  const dadosPorNome = mockDados.filter((item) => item.nome
    .toUpperCase().includes(texto.toUpperCase()));
  const dadosPorVaga = mockDados.filter((item) => item.vaga
    .toUpperCase().includes(texto.toUpperCase()));
  const dadosPorEmpresa = mockDados.filter((item) => item.empresa
    .toUpperCase().includes(texto.toUpperCase()));
  const dadosPorStatus = mockDados.filter((item) => item.status
    .toUpperCase().includes(texto.toUpperCase()));

  return (
    <>
      <HeaderContainer>
        <Grid container item xs={12} spacing={2} direction="row">
          <Grid container item xs={7}>
            <StyledInput onChange={(event) => setTexto(event.target.value)} type="text" placeholder="Pesquisar processo..." value={texto} />
          </Grid>
          <Grid container item xs={3}>
            <StyledSelect onChange={(event) => setSelect(event.target.value)} value={select}>
              {currencies.map((option) => (
                <option value={option.value}>
                  {option.label}
                </option>
              ))}
            </StyledSelect>
          </Grid>
          <Grid container item xs={2}>
            <StyledButton>Novo Processo</StyledButton>
          </Grid>
        </Grid>
      </HeaderContainer>

      <CardsContainer>
        {
        select === 'nomeCandidato'
          ? dadosPorNome.map((item) => (
            <CardProcesso
              nome={item.nome}
              email={item.email}
              telefone={item.telefone}
              vaga={item.vaga}
              empresa={item.empresa}
              status={item.status}
            />
          ))
          : select === 'vaga'
            ? dadosPorVaga.map((item) => (
              <CardProcesso
                nome={item.nome}
                email={item.email}
                telefone={item.telefone}
                vaga={item.vaga}
                empresa={item.empresa}
                status={item.status}
              />
            ))
            : select === 'empresa'
              ? dadosPorEmpresa.map((item) => (
                <CardProcesso
                  nome={item.nome}
                  email={item.email}
                  telefone={item.telefone}
                  vaga={item.vaga}
                  empresa={item.empresa}
                  status={item.status}
                />
              ))
              : select === 'status'
                ? dadosPorStatus.map((item) => (
                  <CardProcesso
                    nome={item.nome}
                    email={item.email}
                    telefone={item.telefone}
                    vaga={item.vaga}
                    empresa={item.empresa}
                    status={item.status}
                  />
                ))
                : mockDados.map((item) => (
                  <CardProcesso
                    nome={item.nome}
                    email={item.email}
                    telefone={item.telefone}
                    vaga={item.vaga}
                    empresa={item.empresa}
                    status={item.status}
                  />
                ))
        }
      </CardsContainer>
    </>
  );
};

export default Processos;
