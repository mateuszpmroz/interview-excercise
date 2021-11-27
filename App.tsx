import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { MainNavigator } from '@app/navigation';
import { Provider } from 'react-redux';
import { store } from '@app/state';

export default function App() {
  return (
    <Provider store={store}>
      <MainNavigator />
      <StatusBar style="auto" />
    </Provider>
  );
}
