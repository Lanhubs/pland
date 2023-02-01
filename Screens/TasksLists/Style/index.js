import { Dimensions, StyleSheet } from "react-native"


export const styles = StyleSheet.create({
    mainContainer: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    header:{
        flex: 1, 
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        borderBottomEndRadius: "10%",
        borderBottomRightRadius: "10%",
        borderBottomLeftRadius: "10%",
        borderBottomStartRadius: "10%",
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOpacity:0.5,
        shadowOffset: 1,
        shadowRadius: "10%",
        height: "15%",

    },
    mainheader:{
        alignItems: "center",
        justifyContent: "space-between",
        margin: "1rem 10%"
    }
})