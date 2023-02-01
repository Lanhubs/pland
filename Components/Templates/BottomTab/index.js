import { View, Text } from "react-native";
import React from "react";
import { AntDesign, FontAwesome5, Ionicons } from "@expo/vector-icons";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import TodoListsScreen from "../../../Screens/TodoListsScreen";
import { NavigationContainer } from "@react-navigation/native";
import CreateTodoScreen from "../../../Screens/CreateTodoScreen";
import ReminderScreen from "../../../Screens/ReminderScreen";
import ProfileScreen from "../../../Screens/ProfileScreen";
import TasksListScreen from "../../../Screens/TasksLists";
const BottomTab = () => {
  const { Navigator, Screen } = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case "todos":
                iconName = focused ? "list" : "list-outline";
                break;
              case "create-todos":
                iconName = focused ? "create" : "create-outline";
                break;
              case "reminders":
                iconName = focused ? "notifications" : "notifications-outline";
                break;
              case "profile":
                iconName = focused ? "person" : "person-outline";
                break;
              case "home":
                iconName = focused ? "home-sharp" : "home-outline";
                break;
              default:
                break;
            }
            return (
              <View >
                <Ionicons name={iconName} size={30} />
              </View>
            );
          },
          tabBarShowLabel: false,
          tabBarStyle: {
            height: "15%",

          },
          headerShown: false
        })}
      >
        <Screen name="home" component={TasksListScreen} />
        <Screen name="todos" component={TodoListsScreen} />
        <Screen name="create-todos" component={CreateTodoScreen} />
        <Screen name="reminders" component={ReminderScreen} />
        <Screen name="profile" component={ProfileScreen} />
      </Navigator>
    </NavigationContainer>
  );
};



export default BottomTab;
