import React, {createContext, useReducer} from 'react';
import {Appearance} from 'react-native';
import {themeReducer, ThemeState, lightTheme, darkTheme} from './ThemeReducer';

export interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
  setChangeTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({children}: any) => {
  // TODO: leer el tema global del dispositivo...
  const [theme, dispatch] = useReducer(
    themeReducer,
    Appearance.getColorScheme() === 'dark' ? darkTheme : lightTheme,
  );

  // useEffect(() => {
  //   AppState.addEventListener('change', status => {
  //     if (status === 'active') {
  //       Appearance.getColorScheme() === 'dark'
  //         ? setDarkTheme()
  //         : setLightTheme();
  //     }
  //   });
  // }, []);

  const setDarkTheme = () => {
    dispatch({type: 'set_dark_theme'});
  };

  const setLightTheme = () => {
    dispatch({type: 'set_light_theme'});
  };

  const setChangeTheme = () => {
    dispatch({type: 'changeTheme'});
  };

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
        setChangeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
