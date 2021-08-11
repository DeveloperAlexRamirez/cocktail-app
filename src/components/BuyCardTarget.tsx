import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import {useCounter} from '../hooks/useCounter';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  top?: number;
  cantidad?: boolean;
  height?: number;
  width?: number;
  right?: number;
}

const BuyCardTarget = ({
  top = -35,
  cantidad,
  height = 140,
  width = 80,
}: Props) => {
  const {theme} = useContext(ThemeContext);
  const {decrement, increase, counter} = useCounter(0);

  return (
    <View
      style={{
        ...styles.cardSale,
        top: top,
        backgroundColor: theme.colors.cardsale,
        height: height,
        width: width,
      }}>
      {cantidad ? (
        <>
          <TouchableOpacity
            style={{
              backgroundColor: theme.colors.notification,
              alignItems: 'center',
              width: 30,
              height: 30,
              borderRadius: 100,
            }}
            onPress={increase}>
            <Text style={{...styles.textBuy, color: theme.colors.text}}>+</Text>
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
            <Text style={{...styles.textBuy, color: theme.colors.text}}>-</Text>
          </TouchableOpacity>
        </>
      ) : (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'space-around',
            width: width,
            height: height - 40,
          }}>
          <Icon name="card-outline" size={30} color="white" />

          <View>
            <Text style={{fontSize: 12, color: 'white'}}>Mastercard</Text>
          </View>

          <View>
            <Text style={{fontSize: 21, color: 'white', fontWeight: 'bold'}}>
              Pay
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardSale: {
    position: 'absolute',
    right: 50,
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
  },

  textBuy: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
});

export default BuyCardTarget;
