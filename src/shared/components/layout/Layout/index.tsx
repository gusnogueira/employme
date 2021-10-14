import React from 'react';
import Header from '../Header';
import Aside from '../Aside';
import Content from '../Content';

import { Container } from './styles';

const Layout: React.FC = ({ children }) => (
  <Container>
    <Header />
    <Aside />
    <Content>
      {children}
    </Content>
  </Container>
);

export default Layout;
