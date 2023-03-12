import { View, Text, SafeAreaView} from 'react-native'
import React from 'react'
import { styles } from './Style'
import TaskListBackground from "../../Components/Utils/Backgrounds/TaskListBackground"
import Header from "./Header"
const TasksListScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.mainContainer}>
        <TaskListBackground/>
        <Header/>
      </View>

    </SafeAreaView>
  )
}

export default TasksListScreen