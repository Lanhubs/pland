import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const index = () => {
  return (
    <View style={styles.headerInput}>
      <View style={styles.searchIcon}>

      <Ionicons name="search" size={25} color="rgba(0, 0, 0, 0.5)"  />
      </View>
      <TextInput
        placeholder="search"
        inputMode="search"
        style={styles.headerInputElem}
      />
      <Pressable
        style={{
          width: 50,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#000',
          borderRadius: 10,
          marginHorizontal: 5
        }}>
        <FontAwesome size={20} color="#fff" name="bars" />
      </Pressable>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  headerInput: {
    backgroundColor: '#fff',
    height: 60,
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    marginTop: Dimensions.get("screen").height/15,
    alignSelf: "center",
    width: "97%",

    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    
  },
  headerInputElem: {
    flex: 1,
    fontSize: 16
  },
  searchIcon:{
    alignItems: "center",
    justifyContent: "center",
    width: 40,
  }
});
