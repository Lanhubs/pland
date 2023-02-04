import { View, Text, Image, TextInput, Button, Pressable } from "react-native";
import React from "react";
import { styles } from "./Style";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Avatar, Headline, IconButton } from "react-native-paper";
import userImg from "../../assets/user.png";
import Projects from "./Projects";
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
            maxLength=""
            // left={<Ionicons color="green"  name="search" size={25}/>}
            placeholderTextColor="rgba(0, 0, 0, 0.5)"
            placeholder="search for todo"
          />
          <Pressable style={[styles.dropdownListBtn, {}]}>
            <FontAwesome5
              name="range"
              color="#fff"
              size={20}
              style={{ marginHorizontal: 10 }}
            />
          </Pressable>
        </View>
      </View>
      {/* main body component */}
      <View style={styles.mainBody}>
        {/* <View style={styles.mainBodyHeader}>
          <Headline style={styles.mainBodyHeaderHeadLine}>Projects</Headline>
          <Text style={styles.mainBodyHeaderPar}>TasksListScreen</Text>
        </View> */}
        <Projects/>
      </View>
    </View>
    
  );
};

export default TasksListScreen;
