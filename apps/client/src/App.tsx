import { PageRouter } from './pages/router';
import { Layout } from './components/Layout/Layout';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useTheme } from './hooks/useTheme';
import { Modals } from './components/Modals/Modals';

function App() {
  return (
    <Layout>
      <ThemeProvider theme={useTheme()}>
        <CssBaseline />
        <PageRouter />
        <Modals />
      </ThemeProvider>
    </Layout>
  );
}

export default App;
