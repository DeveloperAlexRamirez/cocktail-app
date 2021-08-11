import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../stack/Navigator';
import useCocktailDetails from '../hooks/useCocktailDetails';
import {useCounter} from '../hooks/useCounter';

import {colors} from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';
import {showIngredients} from '../helper/showIngredients';
// import {FlatList} from 'react-native';

interface Props extends StackScreenProps<RootStackParams, 'BuyScreen'> {}

const BuyScreen = ({route, navigation}: Props) => {
  const params = route.params;

  const {counter, increase, decrement} = useCounter(1);

  const {cocktaildetails, isloading} = useCocktailDetails(
    params.cocktail.idDrink,
  );

  const {theme} = useContext(ThemeContext);
  const {height} = Dimensions.get('screen');

  if (isloading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <ActivityIndicator size={30} color={colors.purple} />
      </View>
    );
  }

  return (
    <View style={{flex: 1, backgroundColor: theme.colors.background}}>
      <View
        style={{
          backgroundColor: theme.colors.primary,
          width: 50,
          height: 40,
          top: 30,
          left: 30,
          borderRadius: 10,
          position: 'absolute',
          zIndex: 999,
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon
            name="chevron-back-outline"
            size={35}
            color={theme.colors.text}
          />
        </TouchableOpacity>
      </View>

      <View>
        <View style={{...styles.imageContainer, height: height * 0.5}}>
          <Image
            source={{uri: params.cocktail.strDrinkThumb}}
            style={styles.imageCocktail}
          />
        </View>

        <View
          style={{
            ...styles.containerEncima,
            top: height * 0.47,
            height: height * 0.3,
            backgroundColor: theme.colors.notification,
          }}>
          {/* Contenedor del header del card containerEncima */}
          <View style={{left: 40, top: 40, width: 280}}>
            <Text style={{...styles.textCardEncima, color: theme.colors.text}}>
              {params.cocktail.strDrink}
            </Text>
            <Text
              style={{
                marginTop: 10,
                fontSize: 22,
                color: theme.colors.border,
              }}>
              {cocktaildetails[0].strCategory}
            </Text>
          </View>

          {/* Barra de ingredientes */}
          <View style={{left: 0, marginTop: 50}}>
            <FlatList
              style={{
                width: 'auto',
                marginLeft: 40,
                marginTop: 10,
              }}
              data={showIngredients(cocktaildetails[0])}
              keyExtractor={index => index}
              renderItem={({item}) => {
                return (
                  <View
                    style={{
                      marginRight: 10,
                      backgroundColor: theme.colors.card,
                      justifyContent: 'center',
                      width: 'auto',
                      height: 60,
                      padding: 10,
                      borderRadius: 10,
                    }}>
                    <Text style={{color: 'white', fontWeight: 'bold'}}>
                      {item}
                    </Text>
                  </View>
                );
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* Contenedor de parches xd */}
          <View
            style={{
              ...styles.cardSale,
              flexDirection: 'column',
              justifyContent: 'space-around',
              alignItems: 'center',
              padding: 10,
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.notification,
                alignItems: 'center',
                width: 30,
                height: 30,
                borderRadius: 100,
              }}
              onPress={increase}>
              <Text style={{...styles.textBuy, color: theme.colors.text}}>
                +
              </Text>
            </TouchableOpacity>

            <View
              style={{
                backgroundColor: theme.colors.border,
                alignItems: 'center',
                width: 30,
                height: 30,
                borderRadius: 100,
              }}>
              <Text style={styles.textBuy}>{counter}</Text>
            </View>

            <TouchableOpacity
              style={{
                backgroundColor: theme.colors.notification,
                alignItems: 'center',
                width: 30,
                height: 30,
                borderRadius: 100,
              }}
              onPress={decrement}>
              <Text style={{...styles.textBuy, color: theme.colors.text}}>
                -
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View
        style={{
          ...styles.effectCardEncima,
          backgroundColor: theme.colors.notification,
        }}
      />

      <View
        style={{
          ...styles.parcheCard,
          backgroundColor: theme.colors.notification,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
  },

  imageCocktail: {
    width: '100%',
    height: '100%',
  },

  containerEncima: {
    position: 'absolute',
    width: '100%',
    borderRadius: 30,
  },

  effectCardEncima: {
    position: 'absolute',
    width: 100,
    right: 0,
    bottom: 90,
    transform: [{rotate: '1deg'}],
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 100,
    height: 120,
  },

  textCardEncima: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  cardSale: {
    position: 'absolute',
    right: 50,
    top: -30,
    backgroundColor: '#48485B',
    width: 80,
    height: 140,
    borderRadius: 10,
  },

  textBuy: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },

  parcheCard: {
    position: 'absolute',
    width: '100%',
    left: 10,
    bottom: 120,
    transform: [{rotate: '10deg'}],
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 20,
    height: 70,
  },
});

export default BuyScreen;
