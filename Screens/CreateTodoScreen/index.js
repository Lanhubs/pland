import {View, Text, Image, TextInput,Pressable} from 'react-native';
import React from 'react';
import Textarea from "react-native-textarea"
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from './Header';
import Input from './Input';
const CreateTodoScreen = () => {
  const [taskName, setTaskName] = React.useState()
  const [taskType, setTaskType] = React.useState()
  const [startDate, setStartDate] = React.useState()
  const [endDate, setEndDate] = React.useState()


  return (
    <SafeAreaView style={{flex: 1, padding: 20, paddingTop: 30}}>
      <Header />
      <Text style={styles.formHeaderText}>Add your own task</Text>
      <Input handleChange={setTaskName} label={"task name:"}/>
      <Input handleChange={setTaskType} label={"task type:"}/>
      {/* <View style={{marginVertical: 10}}>
        <Text>Description</Text>
        <Textarea  maxLength={120} placeholder='describe your task'  style={styles.descriptionInput} />

      </View> */}
      <Input handleChange={setStartDate} label={"start date:"}/>
      <Input handleChange={setEndDate} label={"end date:"}/>

      <Pressable style={styles.submitBtn}>
        <Text style={{alignSelf: "center",  color: "#fff", }}>Create Todo </Text>
      </Pressable>


    </SafeAreaView>
  );
};

export default CreateTodoScreen;
