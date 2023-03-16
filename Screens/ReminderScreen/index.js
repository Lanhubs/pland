import React, { useRef, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { SafeAreaView } from 'react-native-safe-area-context';

const ReminderScreen = () => {
  const data = [
    { id: 1, title: 'Component 1' },
    { id: 2, title: 'Component 2' },
    { id: 3, title: 'Component 3' },
    { id: 4, title: 'Component 4' },
    { id: 5, title: 'Component 4' },
    { id: 6, title: 'Component 4' },
    { id: 7, title: 'Component 4' },
    { id: 8, title: 'Component 4' },
    { id: 9, title: 'Component 4' },
    { id: 10, title: 'Component 4' },
  ];

  const scrollViewRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = ({nativeEvent}) => {
    const x = nativeEvent.contentOffset.x;
    const width = nativeEvent.layoutMeasurement.width;
    const index = Math.round(x / width);
    setActiveIndex(index);
  };

  

  return (
    <SafeAreaView style={{flex: 1}}>

    <ScrollView
      ref={scrollViewRef}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      {data.map((item, index) => (
        <Animatable.View
        
        style={[styles.item, activeIndex === index && styles.activeItem]}
        animation={activeIndex ===index ? 'fadeIn' : undefined}
        useNativeDriver
      >
        <Animatable.Text
          style={[styles.title, activeIndex ===index && styles.activeTitle]}
          animation={activeIndex ===index ? 'zoomIn' : undefined}
          useNativeDriver
        >
          {item.title}
        </Animatable.Text>
      </Animatable.View>
      ))}
    </ScrollView>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    width: Dimensions.get("screen").width,
    backgroundColor: '#fff',
    padding: 10
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    height: 100,
    paddingHorizontal: 16,
    marginHorizontal: 10,
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
  },
  activeItem: {
    height: 150,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activeTitle: {
    fontSize: 24,
  },
});


export default ReminderScreen