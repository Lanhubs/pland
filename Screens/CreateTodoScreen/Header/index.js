import {View, Text, Image} from 'react-native';
import React from 'react';
import {styles} from '../style';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.headerText}>Lanre</Text>
        <Text style={styles.headerTextHeader}></Text>
      </View>
      <Image source={require('../../../assets/user.png')} style={styles.userImg} />
    </View>
  );
};

export default Header;
