import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './SearchScreen';
import ResultsScreen from './ResultsScreen';
import DetailScreen from './DetailScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Search">
          <Stack.Screen name="Search" component={SearchScreen} options={{ title: 'Buchsuche' }} />
          <Stack.Screen name="Results" component={ResultsScreen} options={{ title: 'Ergebnisse' }} />
          <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Details' }} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}
