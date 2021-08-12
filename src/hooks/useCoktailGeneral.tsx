import {useState, useEffect, useRef} from 'react';
import {cocktailDB} from '../api/cocktailDB';
import {CoktailResponse, Drink} from '../interfaces/CoktailResponseInterface';

// strDrinkThum
const useCoktailGeneral = () => {
  const [coktail, setCoktail] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);

  const nextCategorie = useRef(
    'https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary%20Drink',
  );

  const isMounted = useRef(true);

  const loadCoktails = async () => {
    const resp = await cocktailDB.get<CoktailResponse>(nextCategorie.current);

    // nextCategorie.current = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`;
    // setCoktail([...coktail, ...resp.data.drinks]);
    setCoktail(resp.data.drinks);
    setLoading(false);
  };

  useEffect(() => {
    loadCoktails();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return {
    loading,
    coktail,
    loadCoktails,
  };
};

export default useCoktailGeneral;
