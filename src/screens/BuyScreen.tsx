import {StackScreenProps} from '@react-navigation/stack';
import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {RootStackParams} from '../stack/Navigator';
import useCocktailDetails from '../hooks/useCocktailDetails';

import {colors} from '../theme/appTheme';
import {showIngredients} from '../helper/showIngredients';

import Costs from '../components/Costs';
import BuyCardTarget from '../components/BuyCardTarget';
import BtnBack from '../components/BtnBack';

import Icon from 'react-native-vector-icons/Ionicons';
import {CarContext} from '../context/CarContext';

interface Props extends StackScreenProps<RootStackParams, 'BuyScreen'> {}

const BuyScreen = ({route, navigation}: Props) => {
  const params = route.params;

  const {carState} = useContext(CarContext);

  const {cocktaildetails, isloading} = useCocktailDetails(
    params.cocktail.idDrink,
  );

  const {theme} = useContext(ThemeContext);
  const {height, width} = Dimensions.get('screen');

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
      <Text style={{color: 'white'}}>{JSON.stringify(carState, null, 3)}</Text>

      <BtnBack sumaTop={-10} topBtn={20} left={20} />
      {/* TODO: Contenedor e imagen del cocktail */}
      <View>
        <View style={{...styles.imageContainer, height: height * 0.6}}>
          <Image
            source={{uri: params.cocktail.strDrinkThumb}}
            style={styles.imageCocktail}
          />
        </View>

        {/* TODO: Contenedor del header del card containerEncima */}
        <View
          style={{
            ...styles.containerEncima,
            top: height * 0.45,
            // height: height * 0.39,
            height: height * 0.4,
            backgroundColor: theme.colors.bgcardBuy,
            // backgroundColor: 'red',
          }}>
          {/* TODO: Contenedor del header del card containerEncima */}
          <View
            style={{
              left: 20,
              top: 30,
              // Esto se hace para que haya compatibiliadad con las pantallas
              width: width / 1.5,
            }}>
            <Text style={{...styles.textCardEncima, color: theme.colors.text}}>
              {params.cocktail.strDrink}
            </Text>
            <Text
              style={{
                fontSize: 15,
                color: theme.colors.border,
              }}>
              {cocktaildetails[0].strCategory}
            </Text>
          </View>

          {/* <BuyCardTarget cantidad bottom={height * 0.25} /> */}

          {/* TODO: Barra de ingredientes */}
          <View style={{left: 0, marginTop: 50, marginBottom: 10}}>
            <FlatList
              style={{
                width: 'auto',
                marginLeft: 20,
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
                      style={{
                        color: theme.colors.border,
                        fontWeight: 'bold',
                        fontSize: 12,
                      }}>
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

      {/* TODO: PARCHEEEEEEEEEEEEEEEES */}
      {/* <View
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
      /> */}

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
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
            }}>
            <Icon name="cart-outline" size={25} color={theme.colors.text} />
            <Text
              style={{color: theme.colors.border, marginTop: 2, fontSize: 12}}>
              Total Drinks
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flex: 1,
            }}>
            <Text
              style={{
                color: theme.colors.text,
                fontSize: 18,
                marginBottom: 2,
                fontWeight: 'bold',
              }}>
              $0
            </Text>
            <Text style={{color: theme.colors.border, fontSize: 12}}>
              Total Price
            </Text>
          </View>

          <View
            style={{
              alignItems: 'center',
              flex: 1,
            }}>
            <Text style={{color: theme.colors.border, fontSize: 12}}></Text>
          </View>
        </View>
      </View>

      {/* Target for increase or decrement */}
      <BuyCardTarget
        cantidad
        bottom={height / 2.5}
        right={width - width / 1.05}
      />

      {/* TODO: Pagar cont tarjeta */}
      <BuyCardTarget
        bottom={height / 40}
        height={height * 0.14}
        right={width - width / 1.05}
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
    width: 90,
    right: 0,
    bottom: 90,
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 10,
    height: 110,
  },

  textCardEncima: {
    fontSize: 22,
    fontWeight: 'bold',
  },

  parcheCard: {
    position: 'absolute',
    width: '100%',
    bottom: 110,
    transform: [{rotate: '7deg'}],
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 20,
    height: 50,
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
