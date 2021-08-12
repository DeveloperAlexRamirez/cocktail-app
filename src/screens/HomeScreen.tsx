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

  const {height, width} = Dimensions.get('screen');

  const {top} = useSafeAreaInsets();

  return (
    <>
      <View style={{...globalStyles.globalMargin, marginTop: top + 20}}>
        <View
          style={{
            ...styles.cardHeaderBg,
            backgroundColor: theme.colors.notification,
            height: height * 0.56,
          }}>
          <Text style={{...styles.title, color: theme.colors.text}}>
            EmbriagApp
          </Text>

          <View style={{width: width * 0.7}}>
            <Text style={{...styles.subtitle, color: theme.colors.text}}>
              We provide a variety of fresh cocktails with varius flavors get
              fresh juice easly
            </Text>
          </View>

          <View>
            <Image
              source={require('../assets/mojito.png')}
              style={{...styles.mojito, width: width / 2, height: height * 0.3}}
            />
          </View>
        </View>

        {/* Categorias / imagenes */}
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height * 0.35,
            paddingVertical: 20,
          }}>
          <TouchableOpacity
            style={styles.imageCategoriContainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CocktailScreen')}>
            <Image
              source={require('../assets/red-drink.jpg')}
              style={{...styles.imageCategories, height: '100%'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageCategoriContainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CocktailScreen')}>
            <Image
              source={require('../assets/green-drink.jpeg')}
              style={{...styles.imageCategories, height: '100%'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.imageCategoriContainer}
            activeOpacity={0.8}
            onPress={() => navigation.navigate('CocktailScreen')}>
            <Image
              source={require('../assets/blue-drink.jpeg')}
              style={{...styles.imageCategories, height: '100%'}}
            />
          </TouchableOpacity>
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
    fontSize: 28,
    position: 'absolute',
    top: 160,
    left: 20,
    textAlign: 'right',
  },

  subtitle: {
    fontSize: 16,
    position: 'absolute',
    top: 250,
    left: 20,
  },

  mojito: {
    height: 320,
    position: 'absolute',
    top: 60,
    right: -70,
    // transform: [{rotate: '-10deg'}],
  },

  imageCategories: {
    // flex: 1,
    width: 'auto',
    borderRadius: 10,
    marginHorizontal: 5,
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

  imageCategoriContainer: {
    flex: 1,
  },
});

export default HomeScreen;
