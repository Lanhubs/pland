import {View, Text, Pressable, FlatList, ScrollView} from 'react-native';
import React from 'react';
import {style} from './style';
import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {Checkbox} from 'react-native-paper';

const Tasks = () => {
  return (
    <>
      <View style={style.tasksHeader}>
        <Text style={style.taskTitle}>Tasks</Text>
        <Pressable>
          <Text>View all</Text>
        </Pressable>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: "transparent"}}>
        {tasks.filter((item, idx)=>idx <3).map((item, idx) => (
          <Task key={idx} title={item.title} />
        ))}
      </ScrollView>
    </>
  );
};

const Task = ({title}) => {
  return (
    <View style={style.task}>
      <Checkbox value="checkbox" />
      <Text style={style.taskTitle}>{title}</Text>
      <FontAwesome name="angle-right" size={20} />
    </View>
  );
};

export const tasks = [
  {
    title: 'Buy a new laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Buy a new laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Buy a new laptop',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Get new clothes',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Code a software',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Code a software',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
  {
    title: 'Code a software',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing ',
  },
];
export default Tasks;
