import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {ThemeContext} from '../context/ThemeContext';
import CocktailScreen from '../screens/CocktailScreen';

const Stack = createStackNavigator();

const Navigator = () => {
  const {theme} = React.useContext(ThemeContext);

  return (
    <View style={{backgroundColor: theme.colors.background, flex: 1}}>
      <NavigationContainer theme={theme}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="CocktailScreen" component={CocktailScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

export default Navigator;
