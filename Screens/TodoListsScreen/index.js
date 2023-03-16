import {View, Text, Pressable, FlatList, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {tasks} from '../TasksLists/Tasks';
import {Checkbox} from 'react-native-paper';
import Header from './Header';
const TodoListsScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView scrollToOverflowEnabled={false} showsVerticalScrollIndicator={false}>
        <Header />
        <FlatList
          data={tasks}
          keyExtractor={(_, index) => index.toString()}
          contentContainerStyle={{paddingVertical: 20, paddingHorizontal: 5}}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<View style={{height: 15}} />}
          renderItem={({item}) => (
            <View style={styles.taskContainer}>
              <Checkbox checked={false} color="#000" />
              <View style={styles.taskDetails}>
                <Text style={styles.taskTitle}>{item.title}</Text>
                <Text style={styles.taskBrief}>{item.desc}</Text>
              </View>
              <Pressable>
                {/* <FontAwesome name="mark" color="#000" size={20} /> */}
                <Ionicons name="md-arrow-back" color="#000" size={20} />
              </Pressable>
            </View>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoListsScreen;
