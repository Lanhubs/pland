import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import {styles} from './Style';
import TaskListBackground from '../../Components/Utils/Backgrounds/TaskListBackground';
import Header from './Header';
import HeaderInput from './HeaderInput';
import Projects from './Projects';
import Tasks from './Tasks';
const TasksListScreen = ({navigation}) => {
  return (

      <SafeAreaView
        style={{flex: 1, paddingVertical: 20, paddingHorizontal: 15}}>
        <TaskListBackground />
        <Header />
        <HeaderInput />
        <View
          style={{
            marginVertical: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 17, color: '#000', fontWeight: '500'}}>
            Projects
          </Text>
          <Text style={{fontSize: 14, color: '#000'}}>All tasks</Text>
        </View>
        <Projects />
        <Tasks />
      </SafeAreaView>
  );
};

export default TasksListScreen;
