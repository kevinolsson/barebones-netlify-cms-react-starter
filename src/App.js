import React from 'react';
import { DataProvider } from './DataContext'
import { theme } from './Theme';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { Head } from 'components/Head/Head'; 
import { Router } from 'Router';
import data from './data.json'

const App = () => {
  
  return (
    <DataProvider value={data}>
      <MuiThemeProvider theme={theme}>
        <Head />
        <Router />
      </MuiThemeProvider>
    </DataProvider>
  );
};

export default App;