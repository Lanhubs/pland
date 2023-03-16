import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import {styles} from '../style';
import {Avatar} from 'react-native-paper';
import {MD_TEXT} from '../../../Components/Utils/utilities';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.headerTextContainer}>
        <Text style={styles.headerFullDate}>index</Text>
        <Text style={MD_TEXT}>Helo</Text>
      </View>
      <Pressable>
        <Image
          source={require('../../../assets/user.png')}
          style={{width: 70, height: 70, borderRadius: 50}}
        />
      </Pressable>
    </View>
  );
};

export default Header;
