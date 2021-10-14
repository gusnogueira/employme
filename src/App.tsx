import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Routes from './routes';
import Layout from './shared/components/layout/Layout';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <Layout>
        <Routes />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
