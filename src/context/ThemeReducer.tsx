import {Theme} from '@react-navigation/native';
import {colors} from '../theme/appTheme';
type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: 'black',
    background: 'white',
    card: 'red',
    text: 'black',
    border: colors.quintet,
    notification: colors.whitebone,
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: 'white',
    background: colors.secundary,
    card: 'black',
    text: 'white',
    border: colors.quintet,
    notification: colors.primary,
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };

    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
