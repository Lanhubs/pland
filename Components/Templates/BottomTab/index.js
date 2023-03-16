import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TodoListsScreen from '../../../Screens/TodoListsScreen';
import CreateTodoScreen from '../../../Screens/CreateTodoScreen';
import ReminderScreen from '../../../Screens/ReminderScreen';
import ProfileScreen from '../../../Screens/ProfileScreen';
import TasksListScreen from '../../../Screens/TasksLists';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const BottomTab = () => {
  const {Navigator, Screen} = createBottomTabNavigator();
  return (
    <Navigator
      sceneAnimationEnabled={true}
      sceneAnimationType={'fadeOut'}
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
            <View style={route.name==="create-todos" &&creatTodoStyle}>
              <Ionicons name={iconName} color={route.name==="create-todos" ? "#fff": "#000"} size={25} />
            </View>
          );
        },

        tabBarColor: '#fff',
        tabBarStyle: {height: 80},
        tabBarShowLabel: false,
        headerShown: false,
      })}>
      <Screen name="home" component={TasksListScreen} />
      <Screen name="todos" component={TodoListsScreen} />
      <Screen
        name="create-todos"
        options={{
          tabBarIconStyle: {
            backgroundColor: '#000',
            color: '#fff',
          },
        }}
        component={CreateTodoScreen}
      />
      <Screen name="reminders" component={ReminderScreen} />
      <Screen name="profile" component={ProfileScreen} />
    </Navigator>
  );
};

export default BottomTab;

const  creatTodoStyle= {
  backgroundColor: "#000",
  padding: 10,
  borderRadius: 50,
  height: 60,
  width: 60,
  color: "#fff",
  justifyContent: "center",
  alignItems: "center",
  outline: "3px solid #f3f3f3",
  borderColor: "rgba(0, 0, 0, 0.5)",
  borderWidth: 2
}
const creatTodoIconStyle={

}