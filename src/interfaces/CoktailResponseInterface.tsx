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

// Cocktail details (creado a mano pq no se podia tipar)

export interface CocktailDetails {
  strDrink: string;
  strAlcoholic: string;
  strCategory: string;
  strDrinkThumb: string;
  strIngredient1?: string;
  strIngredient2?: string;
  strIngredient3?: string;
  strIngredient4?: string;
  strIngredient5?: string;
  strIngredient7?: string;
  strIngredient8?: string;
  strIngredient9?: string;
  strIngredient10?: string;
  strIngredient11?: string;
  strIngredient12?: string;
  strIngredient13?: string;
  strIngredient14?: string;
  strIngredient15?: string;
  strIngredient17?: string;
  strIngredient18?: string;
}
