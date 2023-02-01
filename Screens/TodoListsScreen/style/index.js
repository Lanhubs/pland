import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get("screen").width,
        height: Dimensions.get("screen").height,
        backgroundColor: "#fff"
    }
})