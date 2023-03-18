import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  ScrollView,
  Animated,
  FlatList,
  Pressable,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../Style';
import Tasks from '../Tasks';
import {projects} from './data';
import {Paragraph, Headline} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Projects = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollHandler = ({nativeEvent}) => {
    const {layoutMeasurement, contentOffset} = nativeEvent;
    const contentWidth = layoutMeasurement.width;
    const scrollPosition = contentOffset.x;
    const index = Math.floor(scrollPosition / contentWidth);
    setActiveIndex(index);
  };
  return (
    <>
      <View style={styles.mainBodyHeader}>
        <Text style={styles.mainBodyHeaderTitle}>Projects</Text>
        <Pressable>
          <Text style={styles.mainBodyHeaderViewAllBtnText}>View all</Text>
        </Pressable>
      </View>
      <ScrollView
        style={{backgroundColor: 'transparent',  flex: 1, flexGrow: 0}}
        horizontal
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        pagingEnabled={true}
        contentContainerStyle={{alignItems: 'flex-end', flexGrow: 0}}
        onScroll={scrollHandler}
        snapToInterval={16}
        scrollEventThrottle={10}>
        {projects.map((item, index) => (
          <Animated.View
            key={index}
            animation={activeIndex === index ? 'fadeOut' : undefined}
            useNativeDriver
            style={[
              projectStyles.project,
              activeIndex === index && projectStyles.activeProject,
            ]}>
            <Animated.View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor:
                    activeIndex === index ? '#0e0c0c' : '#f2f2f2',
                },
              ]}
            />
            <Pressable
              style={[
                projectStyles.projectIcon,
                {
                  backgroundColor: activeIndex === index ? '#fff' : '#000',
                },
              ]}>
              <AntDesign
                name={item.iconName}
                color={activeIndex === index ? '#000' : '#fff'}
                size={20}
              />
            </Pressable>
            <Text
              style={[
                projectStyles.projectTitle,
                {
                  textTransform: "capitalize",
                  color: activeIndex === index ? '#fff' : '#000',
                },
              ]}>
              {item.task}
            </Text>
            <Paragraph
              style={[
                projectStyles.projectDescription,
                {
                  color: activeIndex === index ? '#fff' : '#000',
                },
              ]}>
              {item.description}
            </Paragraph>
            <Pressable
              style={[
                projectStyles.projectCheckOutButton,
                {backgroundColor: activeIndex === index ? '#fff' : '#000'},
              ]}>
              <FontAwesome5
                name="angle-right"
                color={activeIndex === index ? '#000' : '#fff'}
                size={25}
              />
            </Pressable>
          </Animated.View>
        ))}
      </ScrollView>
    </>
  );
};

export default Projects;
const projectStyles = StyleSheet.create({
  project: {
    width: Dimensions.get('screen').width / 1.7,
    height: 220,
    shadowColor: '#000',
    margin: 10,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 30,

    marginRight: 20,
    backgroundColor: 'transparent',
    backfaceVisibility: "hidden",
    padding: 10,
    overflow: 'hidden',
  },
  projectIcon: {
    width: 50,
    height: 50,
    borderRadius: 30,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  projectTitle: {
    fontSize: 16,
    marginVertical: 10,
    fontWeight: '500',
  },
  projectDescription: {
    fontSize: 13,
    fontWeight: '300',
    // marginTop: ,
  },
  projectCheckOutButton: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    // marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeProject: {
    height: 280,
    padding: 20,
    justifyContent: 'center',
  },
});
