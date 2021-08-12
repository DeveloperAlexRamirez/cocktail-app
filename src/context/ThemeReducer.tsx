import {Theme} from '@react-navigation/native';
import {colors} from '../theme/appTheme';
type ThemeAction =
  | {type: 'set_light_theme'}
  | {type: 'set_dark_theme'}
  | {type: 'changeTheme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: colors.quintet,
    background: 'white',
    card: colors.primary,
    text: 'black',
    border: colors.primary,
    notification: colors.whitebone,
    bgIngredientes: colors.quintet,
    bordercolors: colors.quartet,
    bgcardBuy: colors.whitebone,
    cardsale: colors.quintet,
    textPrice: colors.whitebone,
    bgCardCocktail: colors.white,
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0, 0, 0, 0.3)',
  colors: {
    primary: colors.primary,
    background: colors.secundary,
    card: colors.secundary,
    text: 'white',
    border: colors.quintet,
    notification: colors.primary,
    bgIngredientes: colors.secundary,
    bordercolors: colors.quartet,
    cardsale: colors.quartet,
    bgcardBuy: colors.primary,
    textPrice: colors.quintet,
    bgCardCocktail: colors.primary,
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

    case 'changeTheme':
      if (!state.dark) {
        return {...darkTheme};
      }

      return {
        ...lightTheme,
      };

    default:
      return state;
  }
};
