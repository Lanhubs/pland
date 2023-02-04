import { StatusBar } from 'expo-status-bar';
import { Dimensions, ScrollView, StyleSheet, Text, View } from 'react-native';
import BottomTab from './Components/Templates/BottomTab';
import Navigation from './Components/Templates/Navigation';

export default function App() {
  
  return (
      <ScrollView>
    <View style={styles.container}>

      {/* <Navigation/> */}
      <BottomTab/>
      <StatusBar style="auto" hidden={false} />
    </View>
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: "10%",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height
  },
});
