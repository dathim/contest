import { PageRouter } from './pages/router';
import { Layout } from './components/Layout/Layout';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { useTheme } from './hooks/useTheme';

function App() {
  return (
    <Layout>
      <ThemeProvider theme={useTheme()}>
        <CssBaseline />
        <PageRouter />
      </ThemeProvider>
    </Layout>
  );
}

export default App;
