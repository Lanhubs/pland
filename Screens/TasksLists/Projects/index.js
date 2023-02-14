import { View, Text, ScrollView, Animated } from "react-native";
import React, { useEffect } from "react";
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
        showsHorizontalScrollIndicator={false}
        style={projStyles.projectHorizontalScroller}
        accessible={true}
      >
          <Project />
          <Project />
      </ScrollView>
        </View>
    </>
  );
};

export default Projects;

