import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const Costs = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View>
      {/* Precios */}

      <View style={{left: 20, flexDirection: 'row'}}>
        <View
          style={{
            ...styles.ingredientItem,
            width: 110,
            backgroundColor: theme.colors.bgIngredientes,
          }}>
          <Text
            style={{
              color: theme.colors.textPrice,
              fontWeight: 'bold',
              fontSize: 10,
            }}>
            $8{' '}
            <Text style={{color: theme.colors.textPrice, fontSize: 10}}>
              Price x Drink
            </Text>
          </Text>
        </View>

        {/* Precio total */}
        <View
          style={{
            ...styles.ingredientItem,
            width: 130,
            backgroundColor: theme.colors.bgIngredientes,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 15,
            }}>
            $16 <Text style={{color: 'white', fontSize: 11}}>Total Price</Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  ingredientItem: {
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 'auto',
    height: 60,
    padding: 10,
    borderRadius: 10,
  },
  // parcheCard: {
  //   width: '100%',
  //   height: 50,
  // },
});

export default Costs;
