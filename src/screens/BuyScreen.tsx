import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../stack/Navigator';
import useCocktailDetails from '../hooks/useCocktailDetails';
import {colors} from '../theme/appTheme';

interface Props extends StackScreenProps<RootStackParams, 'BuyScreen'> {}

const BuyScreen = ({route, navigation}: Props) => {
  const params = route.params;

  const {cocktaildetails, isloading} = useCocktailDetails(
    params.cocktail.idDrink,
  );

  const {theme} = useContext(ThemeContext);

  const {height} = Dimensions.get('screen');

  if (isloading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={30} color={colors.purple} />
      </View>
    );
  }

  console.log(cocktaildetails[0].strCategory);

  return (
    <>
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
            top: height * 0.46,
            height: height * 0.28,
            backgroundColor: theme.colors.notification,
          }}>
          <View style={{left: 30, top: 30}}>
            <Text style={{...styles.textCardEncima, color: theme.colors.text}}>
              {params.cocktail.strDrink}
            </Text>
            <Text
              style={{marginTop: 10, fontSize: 22, color: theme.colors.border}}>
              {cocktaildetails[0].strCategory}
            </Text>
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
          ...styles.cardBottom,
          backgroundColor: theme.colors.background,
        }}></View>

      <View
        style={{
          ...styles.cardBottom,
          width: '100%',
          backgroundColor: theme.colors.notification,
          bottom: 140,
          transform: [{rotate: '10deg'}],
          borderBottomRightRadius: 40,
          borderBottomLeftRadius: 40,
          height: 90,
        }}></View>
    </>
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
    borderRadius: 50,
  },

  cardBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 50,
  },

  effectCardEncima: {
    position: 'absolute',
    bottom: 110,
    width: 30,
    height: 300,
    right: 0,
    borderBottomRightRadius: 30,

    // transform: [{rotate: '90deg'}],
  },

  textCardEncima: {
    fontSize: 32,
    fontWeight: 'bold',
  },
});

{
  /* <Text style={{color: theme.colors.text}}>
          Hello world from BuyScreen
        </Text> */
}
export default BuyScreen;
