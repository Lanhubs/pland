import { StyleSheet, Dimensions } from "react-native";


export const style =StyleSheet.create({
    tasks:{
        flex: 1,
        flexDirection: "column",
      backgroundColor: "#d3d3d3",
        alignItems: "center",
        columnGap: 10,
        paddingHorizontal: "7%",
    },
    task: {
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "90%",
        height: 70,
        shadowColor: "rgba(0, 0, 0, 0.5)",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    tasksHeader:{
        flex: 1,
        width: "100%",
        paddingHorizontal:10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"

    },
    taskTitle:{
        fontSize: 18,
        fontWeight: 600,
    }
})