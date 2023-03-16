import {
  View,
  Text,
  Image,
  TextInput,
  Button,
  Pressable,
  ScrollView,
  LogBox,
} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import HeaderInput from './HeaderInput';
import Projects from './Projects';
import Tasks from './Tasks';
import Header from './Header';
import TaskListBackground from '../../Components/Utils/Backgrounds/TaskListBackground';
const TasksListScreen = () => {
  React.useEffect(() => {
    LogBox.ignoreLogs([
      'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.',
    ]);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <TaskListBackground />
      <ScrollView
        style={{ paddingVertical: 20, paddingHorizontal: 15}}
        nestedScrollEnabled={true}>
        <Header />
        <HeaderInput />
        {/* main body component */}
        <View style={{flex: 1}}>
          <Projects />
          <Tasks />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TasksListScreen;
