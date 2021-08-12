import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Drink} from '../interfaces/CoktailResponseInterface';
import FadeInImage from './FadeInImage';
import {ThemeContext} from '../context/ThemeContext';
import {useNavigation} from '@react-navigation/core';

interface Props {
  cocktail: Drink;
}

const CocktailCard = ({cocktail}: Props) => {
  const {theme} = useContext(ThemeContext);

  const navigation = useNavigation();

  return (
    <View style={{flex: 1}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          navigation.navigate('BuyScreen', {
            cocktail: cocktail,
          })
        }>
        <View
          style={{
            ...styles.cardContainer,
            backgroundColor: theme.colors.bgCardCocktail,
          }}>
          <View>
            <FadeInImage
              uri={cocktail.strDrinkThumb}
              style={{width: 50, height: 50, borderRadius: 10, marginLeft: 5}}
            />
          </View>
          <View style={{justifyContent: 'center', marginRight: 10}}>
            <Text style={{...styles.textCard, color: theme.colors.text}}>
              {cocktail.strDrink}
            </Text>
            <Text
              style={{
                ...styles.textCard,
                color: 'grey',
                fontSize: 12,
              }}>
              id: {cocktail.idDrink}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    borderRadius: 10,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 10,

    elevation: 2,
  },

  textCard: {
    fontSize: 17,
    textAlign: 'left',
    left: 20,
    fontWeight: 'bold',
  },
});

export default CocktailCard;
