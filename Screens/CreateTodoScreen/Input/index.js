import {View, Text, TextInput} from 'react-native';
import React from 'react';
import { styles } from '../style';

const Input = ({handleChange, label}) => {
  return (
    <View  style={{marginVertical: 5}}>
      <Text style={styles.formLabel}>{label}</Text>
      <TextInput
        keyboardType="default"
        style={styles.formInput}
        onChange={e => handleChange(e.target.valueOf)}
      />
    </View>
  );
};

export default Input;
