import { View, Text, ScrollView } from "react-native";
import React from "react";
import { styles } from "../Style";
import { styles as projStyles } from "./Project/style";
import Project from "./Project";
import { Headline } from "react-native-paper";

const Projects = () => {
  return (
    <>
      <View style={styles.mainBodyHeader}>
        <Headline style={styles.mainBodyHeaderHeadLine}>Projects</Headline>
        <Text style={styles.mainBodyHeaderPar}>TasksListScreen</Text>
      </View>
      <View style={projStyles.projects}>
        <ScrollView
          horizontal={true}
          style={[styles.projectHorizontalScroller, { flex: 1 }]}
          accessible={true}
        >
          <Project />
        </ScrollView>
      </View>
    </>
  );
};

export default Projects;
