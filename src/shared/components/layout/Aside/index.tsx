import React from 'react';

import {
  Container, Icone, MenuContainer, LabelIcone, MenuItemLink, ItemContainer,
} from './styles';

import iconeCompromissos from '../../../../assets/IconeCompromissos.svg';
import iconeDashboard from '../../../../assets/IconeDashboard.svg';
import iconeEmpresas from '../../../../assets/IconeEmpresas.svg';
import iconeVagas from '../../../../assets/IconeVagas.svg';
import iconeProcessos from '../../../../assets/IconeProcessos.svg';

const Aside: React.FC = () => (
  <Container>
    <MenuContainer>
      <MenuItemLink to="/processos">
        <ItemContainer>
          <Icone src={iconeProcessos} />
          <LabelIcone>Processos</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="/dashboard">
        <ItemContainer>
          <Icone src={iconeDashboard} />
          <LabelIcone>Dashboard</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="#">
        <ItemContainer>
          <Icone src={iconeCompromissos} />
          <LabelIcone>Agenda</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="#">
        <ItemContainer>
          <Icone src={iconeEmpresas} />
          <LabelIcone>Empresas</LabelIcone>
        </ItemContainer>
      </MenuItemLink>

      <MenuItemLink to="#">
        <ItemContainer>
          <Icone src={iconeVagas} />
          <LabelIcone>Vagas</LabelIcone>
        </ItemContainer>
      </MenuItemLink>
    </MenuContainer>
  </Container>
);

export default Aside;
