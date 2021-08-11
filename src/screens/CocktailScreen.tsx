import React, {useContext} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useCoktailGeneral from '../hooks/useCoktailGeneral';
import {ThemeContext} from '../context/ThemeContext';
import {colors, globalStyles} from '../theme/appTheme';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import CocktailCard from '../components/CocktailCard';
import BtnBack from '../components/BtnBack';

const CocktailScreen = () => {
  const {top} = useSafeAreaInsets();

  const {loading, coktail} = useCoktailGeneral();
  const {theme} = useContext(ThemeContext);

  if (loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size={30} color={colors.purple} />
      </View>
    );
  }

  return (
    <View style={globalStyles.globalMargin}>
      <BtnBack left={0} />
      <FlatList
        data={coktail}
        keyExtractor={({strDrink}) => strDrink}
        renderItem={({item}) => <CocktailCard cocktail={item} />}
        ListHeaderComponent={() => (
          <Text
            style={{
              color: theme.colors.text,
              fontSize: 32,
              paddingTop: top + 10,
            }}>
            CocktailScreen
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default CocktailScreen;
