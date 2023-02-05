import { StatusBar } from "expo-status-bar";
import { Dimensions, ScrollView, StyleSheet, Text, View } from "react-native";
import BottomTab from "./Components/Templates/BottomTab";
import Navigation from "./Components/Templates/Navigation";
import { NativeBaseProvider } from "native-base";
export default function App() {
  return (
    <NativeBaseProvider >
      <ScrollView>
        <View style={styles.container}>
          {/* <Navigation/> */}
          <BottomTab />
          <StatusBar style="auto" hidden={false} />
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: "10%",
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
});
