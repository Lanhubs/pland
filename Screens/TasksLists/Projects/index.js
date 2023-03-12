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
  return (
    <FlatList
      contentContainerStyle={{padding: 5}}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      data={projects} 
      alwaysBounceHorizontal={true}
      scrollEnabled={false}
      keyExtractor={(_, index) => String(index)}
      renderItem={({item}) => (
        <Pressable
          onPress={() => {
            console.log('hello');
          }}>
          <View style={projectStyles.project}>
            <View
              style={[
                StyleSheet.absoluteFillObject,
                {
                  backgroundColor: '#fff',
                },
              ]}
            />
            <Pressable style={projectStyles.projectIcon}>
              <AntDesign name={item.iconName} color="#fff" size={20} />
            </Pressable>
            <Text style={projectStyles.projectTitle}>{item.task}</Text>
            <Paragraph style={projectStyles.projectDescription}>
              {item.description}
            </Paragraph>
            <Pressable style={projectStyles.projectCheckOutButton}>
              <FontAwesome5 name="angle-right" color="#fff" size={25} />
            </Pressable>
          </View>
        </Pressable>
      )}
    />
  );
};

export default Projects;
const projectStyles = StyleSheet.create({
  project: {
    width: Dimensions.get('screen').width / 1.7,
    height: 270,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 30,

    marginRight: 20,

    padding: 20,
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
    marginTop: 10,
  },
  projectCheckOutButton: {
    alignSelf: 'flex-end',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#000',
    marginTop: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
