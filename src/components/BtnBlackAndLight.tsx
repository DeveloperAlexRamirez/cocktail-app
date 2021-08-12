import React, {useContext} from 'react';
import {View, Text, Switch} from 'react-native';
import {useState} from 'react';
import {ThemeContext} from '../context/ThemeContext';

const BtnBlackAndLight = () => {
  const {setChangeTheme, theme} = useContext(ThemeContext);

  const [isenable, setIsEnable] = useState(false);

  const toggleSwitch = () => {
    setIsEnable(!isenable);
    setChangeTheme();
  };

  return (
    <View
      style={{
        zIndex: 999,
        top: 20,
        right: 10,
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <Text style={{marginRight: 10, color: theme.colors.text}}>
        {isenable ? 'Dark' : 'Ligth'}
      </Text>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isenable ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isenable}
      />
    </View>
  );
};

export default BtnBlackAndLight;
