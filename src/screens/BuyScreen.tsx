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

import {colors} from '../theme/appTheme';
import {showIngredients} from '../helper/showIngredients';

import Icon from 'react-native-vector-icons/Ionicons';
import Costs from '../components/Costs';
import BuyCardTarget from '../components/BuyCardTarget';

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
      {/* TODO: Btn para regresar */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          zIndex: 999,
          backgroundColor: theme.colors.primary,
          width: 55,
          height: 50,
          top: 30,
          left: 30,
          borderRadius: 10,
          position: 'absolute',

          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="chevron-back-outline" size={25} color="white" />
      </TouchableOpacity>

      {/* TODO: Contenedor e imagen del cocktail */}
      <View>
        <View style={{...styles.imageContainer, height: height * 0.5}}>
          <Image
            source={{uri: params.cocktail.strDrinkThumb}}
            style={styles.imageCocktail}
          />
        </View>

        {/* TODO: Contenedor del header del card containerEncima */}

        <View
          style={{
            ...styles.containerEncima,
            top: height * 0.44,
            height: height * 0.36,
            backgroundColor: theme.colors.bgcardBuy,
          }}>
          {/* TODO: Contenedor del header del card containerEncima */}
          <View style={{left: 40, top: 30, width: 280}}>
            <Text style={{...styles.textCardEncima, color: theme.colors.text}}>
              {params.cocktail.strDrink}
            </Text>
            <Text
              style={{
                fontSize: 22,
                color: theme.colors.border,
              }}>
              {cocktaildetails[0].strCategory}
            </Text>
          </View>

          {/* Target for increase or decrement */}
          <BuyCardTarget cantidad />

          {/* TODO: Barra de ingredientes */}
          <View style={{left: 0, marginTop: 50, marginBottom: 20}}>
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
                      ...styles.ingredientItem,
                      backgroundColor: theme.colors.notification,
                      borderColor: theme.colors.bordercolors,
                    }}>
                    <Text
                      style={{color: theme.colors.border, fontWeight: 'bold'}}>
                      {item}
                    </Text>
                  </View>
                );
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>

          {/* TODO: Card de decrement and increase */}

          {/* Precios */}
          <Costs />
        </View>
      </View>

      {/* TODO: Contenedor de parches xd */}
      <View
        style={{
          ...styles.effectCardEncima,
          backgroundColor: theme.colors.bgcardBuy,
        }}
      />

      <View
        style={{
          ...styles.parcheCard,
          backgroundColor: theme.colors.bgcardBuy,
        }}
      />

      <View
        style={{
          position: 'absolute',
          bottom: 15,
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
        <View
          style={{
            marginHorizontal: 40,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
          }}>
          <View
            style={{
              alignItems: 'center',
            }}>
            <Icon name="cart-outline" size={35} color="white" />
            <Text
              style={{color: theme.colors.border, marginTop: 2, fontSize: 12}}>
              Total Drinks
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              marginRight: 40,
            }}>
            <Text
              style={{
                color: theme.colors.text,
                fontSize: 27,
                marginRight: 10,
                marginBottom: 2,
                fontWeight: 'bold',
              }}>
              $32
            </Text>
            <Text style={{color: theme.colors.border, fontSize: 12}}>
              Total Price
            </Text>
          </View>

          <View style={{backgroundColor: 'red'}}>
            <Text>Hola</Text>
          </View>
        </View>
      </View>

      {/* TODO: Pagar cont tarjeta */}
      <BuyCardTarget top={780} height={130} />
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
    bottom: 65,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 100,
    height: 140,
  },

  textCardEncima: {
    fontSize: 32,
    fontWeight: 'bold',
  },

  parcheCard: {
    position: 'absolute',
    width: '100%',
    bottom: 95,
    transform: [{rotate: '10deg'}],
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 20,
    height: 70,
  },

  ingredientItem: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    // height: 60,
    padding: 10,
    borderRadius: 10,
    borderWidth: 1.5,
  },
});

export default BuyScreen;
