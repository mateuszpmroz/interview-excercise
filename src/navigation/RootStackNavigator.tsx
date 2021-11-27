import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootRoute, RootRouteNavigatorParams } from './Routes';
import { PostListScreen, PostDetailsScreen } from '@app/screens';

const Stack = createNativeStackNavigator<RootRouteNavigatorParams>();

const RootStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
    }}>
    <Stack.Screen
      name={RootRoute.PostListScreen}
      component={PostListScreen}
    />
    <Stack.Screen
      name={RootRoute.PostDetailsScreen}
      component={PostDetailsScreen}
    />
  </Stack.Navigator>
);
  
export default RootStackNavigator;
  