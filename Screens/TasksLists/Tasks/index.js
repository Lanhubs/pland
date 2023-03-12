import {View, Text, Pressable, FlatList} from 'react-native';
import React from 'react';
import {style} from './style';
import Octicons from 'react-native-vector-icons/Octicons';
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
      <FlatList
        alwaysBounceVertical={true}
        data={tasks}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ padding: 5, flex: 1}}
        keyExtractor={(_, index) => String(index)}
        renderItem={({item}) => <Task title={item.title} />}
      />
    </>
  );
};

const Task = ({title}) => {
  return (
    <View style={style.task}>
      <Checkbox value="checkbox" />
      <Text style={style.taskTitle}>{title}</Text>
      <Octicons name="dot-fill" size={10} />
    </View>
  );
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
