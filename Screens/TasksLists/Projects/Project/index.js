import { View, Text, ScrollView, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";
import { Card } from "native-base";
import { FontAwesome, FontAwesome5, Ionicons } from "@expo/vector-icons";
import { Headline, Paragraph } from "react-native-paper";
const Project = ({ title, description, iconName, isCompletedIcon }) => {
  return (
    <View style={styles.project}>
      <Pressable
        style={styles.cardPressable}
        p="2"
        borderWidth="1"
        onPress={() => {
          console.log("hello");
        }}
      >
        <Ionicons name="game-controller-outline" color="#fff" size={25} />
      </Pressable>
      <Headline>Game design</Headline>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus ipsa,
        molestias ea est culpa
      </Paragraph>
      <Pressable style={styles.checkoutTaskButton}> 
        <FontAwesome5 name="angle-right" color="#fff" size={25}/>
      </Pressable>
    </View>
  );
};

export default Project;
