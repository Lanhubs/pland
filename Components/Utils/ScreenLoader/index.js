import {View, Text, Image} from 'react-native';
import React from 'react';

const ScreenLoader = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
      }}>
      <Image
        source={require('../../../assets/book-loader.gif')}
        style={{tintColor: '#000', width: 100, height: 100}}
      />
      <Text
        style={{
          fontSize: 20,
          color: '#000',
          fontWeight: '500',
          letterSpacing: 1,
          marginTop: 20,
        }}>
        PlanD
      </Text>
      <Text style={{fontSize: 18, marginTop: 20}}>
        Let me plan your day{'('}s{')'}
      </Text>
    </View>
  );
};

export default ScreenLoader;
