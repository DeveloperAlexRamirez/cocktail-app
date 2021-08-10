import React, {useContext} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/core';

const HomeScreen = () => {
  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);

  const {height} = Dimensions.get('screen');

  const {top} = useSafeAreaInsets();

  return (
    <>
      {/* <View
        style={{
          position: 'absolute',
          bottom: -18,
          backgroundColor: theme.colors.notification,
          borderTopRightRadius: 50,
          borderTopLeftRadius: 50,
          width: '100%',
          height: 110,
        }}
      /> */}
      <View style={{...globalStyles.globalMargin, marginTop: top + 20}}>
        <View
          style={{
            ...styles.cardHeaderBg,
            backgroundColor: theme.colors.notification,
            height: height * 0.55,
          }}>
          <Text style={{...styles.title, color: theme.colors.text}}>
            EmbriagApp
          </Text>

          <View style={{width: 260}}>
            <Text style={{...styles.subtitle, color: theme.colors.text}}>
              We provide a variety of fresh cocktails with varius flavors get
              fresh juice easly
            </Text>
          </View>

          <View>
            <Image
              source={require('../assets/mojito.png')}
              style={styles.mojito}
            />
          </View>

          {/* circle */}
          {/* <View
          style={{
            position: 'absolute',
            bottom: -10,
            right: -10,
            backgroundColor: theme.colors.background,
            borderRadius: 100,
            width: 60,
            height: 60,
          }}
        /> */}
        </View>

        <View style={{marginTop: 20}}>
          <Text style={{fontSize: 26, color: theme.colors.text, top: 20}}>
            Categories:
          </Text>

          {/* Categorias / imagenes */}
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: height * 0.3,
            }}>
            <TouchableOpacity
              style={styles.imageCategoriContainer}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CocktailScreen')}>
              <View style={styles.boxShadow}>
                <Image
                  source={require('../assets/red-drink.jpg')}
                  style={styles.imageCategories}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageCategoriContainer}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CocktailScreen')}>
              <View style={styles.boxShadow}>
                <Image
                  source={require('../assets/green-drink.jpeg')}
                  style={styles.imageCategories}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.imageCategoriContainer}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('CocktailScreen')}>
              <View style={styles.boxShadow}>
                <Image
                  source={require('../assets/blue-drink.jpeg')}
                  style={styles.imageCategories}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  cardHeaderBg: {
    borderRadius: 10,
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.39,
    shadowRadius: 10,

    elevation: 3,
  },

  title: {
    fontSize: 38,
    position: 'absolute',
    top: 160,
    left: 20,
    textAlign: 'right',
  },

  subtitle: {
    fontSize: 18,
    position: 'absolute',
    top: 250,
    left: 20,
  },

  mojito: {
    width: 280,
    height: 320,
    position: 'absolute',
    top: 60,
    right: -70,
    // transform: [{rotate: '-10deg'}],
  },

  imageCategories: {
    // flex: 1,
    width: 130,
    height: 210,
    borderRadius: 10,
  },

  imageCategoriContainer: {
    shadowColor: 'red',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },

  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 6,
  },
});

export default HomeScreen;
