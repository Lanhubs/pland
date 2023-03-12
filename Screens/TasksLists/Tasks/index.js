import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {Checkbox} from 'native-base';
import {Card} from 'native-base';
import {style} from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import {Headline} from 'react-native-paper';
// import { Checkbox } from 'react-native-paper'

const Tasks = () => {
  return (
    <View style={style.tasks}>
      <View style={style.tasksHeader}>
        <Text>Tasks</Text>
        <Pressable>
          <Text>View all</Text>{' '}
        </Pressable>
      </View>
      {tasks.map((item, idx) => (
        <Task title={item.title} key={idx} />
      ))}
    </View>
  );
};

const Task = ({title}) => {
  <View style={style.task}>
    <Checkbox value="checkbox" />
    <Text style={style.taskTitle}>{title}</Text>
    <Octicons name="dot-fill" size={10} />
  </View>;
};

const tasks = [
  {
    title: 'Buy a new laptop',
  },
  {
    title: 'Get new clothes',
  },
  {
    title: 'Code a software',
  },
];
export default Tasks;
