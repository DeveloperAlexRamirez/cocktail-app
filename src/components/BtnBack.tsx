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

const BtnBack = ({sumaTop = 50, topBtn = 20, left = 30}: Props) => {
  const {top} = useSafeAreaInsets();

  const navigation = useNavigation();

  const {theme} = useContext(ThemeContext);

  return (
    <View style={{}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          zIndex: 999,
          backgroundColor: theme.colors.primary,
          width: 45,
          height: 40,
          top: topBtn,
          left: left,
          borderRadius: 10,
          position: 'absolute',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 20,
        }}>
        <Icon name="chevron-back-outline" size={25} color="white" />
      </TouchableOpacity>
      <View
        style={{...globalStyles.globalMargin, marginTop: top + sumaTop}}></View>
    </View>
  );
};

export default BtnBack;
