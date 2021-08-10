export interface CoktailResponse {
  drinks: Drink[];
}

export interface Drink {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
}

export interface DrinkCategoriesResponse {
  drinks: DrinkCategories[];
}

export interface DrinkCategories {
  strCategory: string;
}
