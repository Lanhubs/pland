import {View, Text, Pressable, FlatList, ScrollView} from 'react-native';
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HrDatePicker from './HrDatePicker';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {tasks} from '../TasksLists/Tasks';
import {Checkbox} from 'react-native-paper';
import Header from './Header';
import {transparent} from '../../Components/Utils/utilities';
const TodoListsScreen = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView
        scrollToOverflowEnabled={false}
        style={transparent}
        showsVerticalScrollIndicator={false}>
        <Header />
        <HrDatePicker />
        <ScrollView
          onScroll={({nativeEvent}) => {}}
          contentContainerStyle={{paddingVertical: 20}}
          style={{flex: 1, ...transparent}}>
          {tasks.map((item, index) => (
            <View key={index} style={styles.taskContainer}>
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
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TodoListsScreen;
