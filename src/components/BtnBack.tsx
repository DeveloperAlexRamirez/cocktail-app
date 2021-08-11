import React, {useContext} from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import {ThemeContext} from '../context/ThemeContext';
import {globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  sumaTop?: number;
  topBtn?: number;
  left?: number;
}

const BtnBack = ({sumaTop = 50, topBtn = 10, left = 30}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);

  return (
    <View style={{paddingBottom: 20}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          zIndex: 999,
          backgroundColor: theme.colors.primary,
          width: 55,
          height: 50,
          top: topBtn,
          left: left,
          borderRadius: 10,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Icon name="chevron-back-outline" size={25} color="white" />
      </TouchableOpacity>
      <View
        style={{...globalStyles.globalMargin, marginTop: top + sumaTop}}></View>
    </View>
  );
};

export default BtnBack;
