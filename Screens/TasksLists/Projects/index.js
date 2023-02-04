import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "../Style";
import Project from "./Project";
import { Headline } from "react-native-paper";

const Projects = () => {
  return (
    <>
      <View style={styles.mainBodyHeader}>
        <Headline style={styles.mainBodyHeaderHeadLine}>Projects</Headline>
        <Text style={styles.mainBodyHeaderPar}>TasksListScreen</Text>
      </View>
      <View style={styles.projects}>
        {/* <ScrollView  horizontal={true} accessible={true}>

        </ScrollView> */}
      </View>
    </>
  );
};

export default Projects;
