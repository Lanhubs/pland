import { View, Text, Image, TextInput, Button, Pressable, ScrollView } from "react-native";
import React from "react";
import { styles } from "./Style";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";


import { Avatar, Headline, IconButton } from "react-native-paper";
import userImg from "../../assets/user.png";
import Projects from "./Projects";
import Tasks from "./Tasks";
// import CustomHeader from "./CustomHeader/CustomHeader";
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
      <View style={styles.header}>
        <View style={styles.mainheader}>
          <Text>Habeeb Muhammed</Text>
          <Image source={userImg} style={styles.userImg} />
        </View>

        <View style={styles.headerInput}>
          <Ionicons
            name="search"
            color="rgba(0, 0, 0, 0.5)"
            style={{ marginHorizontal: 10 }}
            size={20}
          />
          <TextInput
            style={styles.headerInputElem}
            
            // left={<Ionicons color="green"  name="search" size={25}/>}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            placeholder="search for todo"
          />
          <Pressable style={[styles.dropdownListBtn, {}]}>
            <FontAwesome5
              name="bars"
              color="#fff"
              size={20}
              style={{ marginHorizontal: 10 }}
            />
          </Pressable>
        </View>
      </View>
      {/* main body component */}
      <View style={styles.mainBody}>
       
        <Projects/>
        <Tasks />
      </View>
    </View>
    
  );
};

export default TasksListScreen;
