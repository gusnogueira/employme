import React from 'react';

import {
  Container, Conteudo, LogoImg, Username, UserContainer, Company, IconeSettings, RigthContainer,
  IconeLogout,
} from './styles';

import imgLogo from '../../../../assets/logo.svg';
import iconeSettings from '../../../../assets/IconeSettings.svg';
import iconeLogout from '../../../../assets/IconeLogout.svg';

const Header: React.FC = () => (
  <Container>

    <Conteudo>
      <LogoImg src={imgLogo} alt="logo employMe" />
      <RigthContainer>
        <IconeSettings src={iconeSettings} />
        <UserContainer>
          <Username>Gustavo Nogueira</Username>
          <Company>Empresa do Gustavo</Company>
        </UserContainer>
        <IconeLogout src={iconeLogout} />
      </RigthContainer>
    </Conteudo>

  </Container>
);

export default Header;
