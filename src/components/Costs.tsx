import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';

const Costs = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <View>
      {/* Precios */}

      <View style={{left: 40, flexDirection: 'row'}}>
        <View
          style={{
            ...styles.ingredientItem,
            width: 150,
            backgroundColor: theme.colors.bgIngredientes,
          }}>
          <Text
            style={{
              color: theme.colors.textPrice,
              fontWeight: 'bold',
              fontSize: 18,
            }}>
            $8{' '}
            <Text style={{color: theme.colors.textPrice, fontSize: 12}}>
              Price x Drink
            </Text>
          </Text>
        </View>

        {/* Precio total */}
        <View
          style={{
            ...styles.ingredientItem,
            width: 170,
            backgroundColor: theme.colors.bgIngredientes,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
              fontSize: 21,
            }}>
            $16 <Text style={{color: 'white', fontSize: 15}}>Total Price</Text>
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
});

export default Costs;
