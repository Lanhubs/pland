import { View, Text, Image } from "react-native";
import React from "react";
import { styles } from "./Style";
import { Avatar } from "react-native-paper";
import userImg from "../../assets/user.png";
const TasksListScreen = () => {
  return (
    <View
      style={[
        styles.mainContainer,
        {
          backgroundColor: "#fff",
          padding: 0,
          flex: 1,
        },
      ]}
    >
      <CustomHeader />
      <Text>TasksListScreen</Text>
    </View>
  );
};

const CustomHeader = ({ children }) => (
  <View style={styles.header}>
    <View style={styles.mainheader}>
      <Text>Habeeb Muhammed</Text>
      <Avatar>
        <Image source={userImg} />
      </Avatar>
    </View>
  </View>
);

export default TasksListScreen;
