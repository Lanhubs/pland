import { StatusBar } from 'expo-status-bar';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import BottomTab from './Components/Templates/BottomTab';
import Navigation from './Components/Templates/Navigation';

export default function App() {
  
  return (
    <View style={styles.container}>
      
      {/* <Navigation/> */}
      <BottomTab/>
      <StatusBar style="auto" hidden={false} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: "10%",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height
  },
});
