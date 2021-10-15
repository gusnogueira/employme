import React from 'react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import Theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import Layout from './shared/components/layout/Layout';

function App() {
  return (
    <BrowserRouter basename="/processos/">
      <ThemeProvider theme={Theme}>
        <GlobalStyles />
        <Layout>
          <Routes />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
