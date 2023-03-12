/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './Components/Templates/BottomTab';
import {NativeBaseProvider} from 'native-base';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <BottomTab />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default App;
