import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  projects: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: "1rem",
    flexDirection: "row",
    width: "100%",
  },
  project: {
    width:
      Dimensions.get("window").width / 2 + Dimensions.get("window").width / 15,
    borderRadius: "10%",
    height: "90%",
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  cardPressable: {
    padding: 5,
    margin: 15,
    fontSize: 25,
    backgroundColor: "black",
    width: 60,
    height: 60,
    color: "#fff",
    borderRadius: "50%",
    alignItems: "center",
    justifyContent: "center",
  },
  checkoutTaskButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  projectHorizontalScroller: {
    width: "100%",
    // flexDirection: "row",
    
    rowGap: 10,
    gap: 10,

  },
});
