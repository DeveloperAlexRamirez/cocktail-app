import {useEffect, useState} from 'react';
import {cocktailDB} from '../api/cocktailDB';
import {CocktailDetails} from '../interfaces/CoktailResponseInterface';

const useCocktailDetails = (idDrink: string) => {
  const [cocktaildetails, setCocktailDetails] = useState<CocktailDetails[]>([]);
  const [isloading, setIsLoading] = useState(true);

  const getDrinkDetails = async () => {
    const resp = await cocktailDB.get(
      `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idDrink}`,
    );

    setCocktailDetails(resp.data.drinks);
    setIsLoading(false);
  };

  useEffect(() => {
    getDrinkDetails();
  }, []);

  return {
    cocktaildetails,
    isloading,
  };
};

export default useCocktailDetails;
