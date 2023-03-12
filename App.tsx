/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTab from './Components/Templates/BottomTab';

function App(): JSX.Element {
  return (
    <NavigationContainer>
     
        <BottomTab />
    </NavigationContainer>
  );
}

export default App;
