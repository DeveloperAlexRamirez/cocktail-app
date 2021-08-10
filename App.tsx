import React from 'react';
import Navigator from './src/stack/Navigator';
import {NavigationContainer} from '@react-navigation/native';
import ThemeProvider from './src/context/ThemeContext';

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default App;
