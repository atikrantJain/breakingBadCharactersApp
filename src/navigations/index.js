import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CharacterDetails from '../screens/characterDetailsScreen';
import HomeScreen from '../screens/homeScreen';
import {NavigationContainer} from '@react-navigation/native';
import SearchCharacter from '../screens/searchCharacterScreen';
import Favourites from '../screens/favouritesScreen';

const Stack = createStackNavigator();

export const MainStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CharacterDetails" component={CharacterDetails} />
        <Stack.Screen name="SearchCharacter" component={SearchCharacter} />
        <Stack.Screen name="favourites" component={Favourites} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
