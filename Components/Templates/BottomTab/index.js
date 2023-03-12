import {View, Text} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodoListsScreen from '../../../Screens/TodoListsScreen';
import {NavigationContainer} from '@react-navigation/native';
import CreateTodoScreen from '../../../Screens/CreateTodoScreen';
import ReminderScreen from '../../../Screens/ReminderScreen';
import ProfileScreen from '../../../Screens/ProfileScreen';
import TasksListScreen from '../../../Screens/TasksLists';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
const BottomTab = () => {
  const {Navigator, Screen} = createMaterialBottomTabNavigator();
  return (
    <Navigator
      barStyle={{animate: true, alignItems: 'center'}}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;
          switch (route.name) {
            case 'todos':
              iconName = focused ? 'list' : 'list-outline';
              break;
            case 'create-todos':
              iconName = focused ? 'create' : 'create-outline';
              break;
            case 'reminders':
              iconName = focused ? 'notifications' : 'notifications-outline';
              break;
            case 'profile':
              iconName = focused ? 'person' : 'person-outline';
              break;
            case 'home':
              iconName = focused ? 'home-sharp' : 'home-outline';
              break;
            default:
              break;
          }
          return (
            <View>
              <Ionicons name={iconName} size={25} />
            </View>
          );
        },

        tabBarColor: '#fff',
        tabBarLabel: false,
        headerShown: false,
      })}>
      <Screen name="home" component={TasksListScreen} />
      <Screen name="todos" component={TodoListsScreen} />
      <Screen name="create-todos" component={CreateTodoScreen} />
      <Screen name="reminders" component={ReminderScreen} />
      <Screen name="profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTab;
