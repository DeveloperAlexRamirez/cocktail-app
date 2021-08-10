import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Drink} from '../interfaces/CoktailResponseInterface';
import FadeInImage from './FadeInImage';
import {ThemeContext} from '../context/ThemeContext';

interface Props {
  cocktail: Drink;
}

const CocktailCard = ({cocktail}: Props) => {
  const {theme} = useContext(ThemeContext);

  return (
    <TouchableOpacity activeOpacity={0.8}>
      <View
        style={{
          ...styles.cardContainer,
          backgroundColor: theme.colors.notification,
        }}>
        <FadeInImage
          uri={cocktail.strDrinkThumb}
          style={{width: 100, height: 100, borderRadius: 10}}
        />
        <View>
          <Text style={{...styles.textCard, color: theme.colors.text}}>
            {cocktail.strDrink}
          </Text>
          <Text
            style={{
              ...styles.textCard,
              color: theme.colors.text,
              fontSize: 16,
            }}>
            id: {cocktail.idDrink}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
  },

  card: {},

  textCard: {
    fontSize: 21,
    textAlign: 'left',
    left: 15,
  },
});

export default CocktailCard;
