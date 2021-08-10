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
          backgroundColor: theme.colors.notification,
        }}>
        <View>
          <FadeInImage
            uri={cocktail.strDrinkThumb}
            style={{width: 80, height: 80, borderRadius: 10, marginLeft: 5}}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{...styles.textCard, color: theme.colors.text}}>
            {cocktail.strDrink}
          </Text>
          <Text
            style={{
              ...styles.textCard,
              color: 'grey',
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
    height: 110,
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

    elevation: 13,
  },

  textCard: {
    fontSize: 21,
    textAlign: 'left',
    left: 20,
    fontWeight: 'bold',
  },
});

export default CocktailCard;
