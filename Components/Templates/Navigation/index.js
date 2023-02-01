import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TodoListsScreen from '../../../Screens/TodoListsScreen'

const Navigation = () => {
    const {Navigator, Screen} = createNativeStackNavigator()
  return (
    <NavigationContainer >
       <Navigator initialRouteName='home'>
          <Screen  name="home" component={TodoListsScreen}/>
       </Navigator>
    </NavigationContainer>
  )
}

export default Navigation