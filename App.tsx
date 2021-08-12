import React from 'react';
import Navigator from './src/stack/Navigator';
import ThemeProvider from './src/context/ThemeContext';
import CarProvider from './src/context/CarContext';

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return (
    <ThemeProvider>
      <CarProvider>{children}</CarProvider>
    </ThemeProvider>
  );
};

export default App;
