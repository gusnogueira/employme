import React from 'react';

import {
  Container, Icone, MenuContainer, LabelIcone, MenuItemLink,
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
        <Icone src={iconeProcessos} />
        <LabelIcone>Processos</LabelIcone>
      </MenuItemLink>

      <MenuItemLink to="/dashboard">
        <Icone src={iconeDashboard} />
        <LabelIcone>Dashboard</LabelIcone>
      </MenuItemLink>

      <MenuItemLink to="#">
        <Icone src={iconeCompromissos} />
        <LabelIcone>Agenda</LabelIcone>
      </MenuItemLink>

      <MenuItemLink to="#">
        <Icone src={iconeEmpresas} />
        <LabelIcone>Empresas</LabelIcone>
      </MenuItemLink>

      <MenuItemLink to="#">
        <Icone src={iconeVagas} />
        <LabelIcone>Vagas</LabelIcone>
      </MenuItemLink>
    </MenuContainer>
  </Container>
);

export default Aside;
