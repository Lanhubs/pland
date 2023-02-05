import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  projects: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    gap: "1rem",
    width: "100%",
  },
  project: {
    width:
      Dimensions.get("window").width / 2 +
      Dimensions.get("window").width / 15,
    borderRadius: "10%",
    padding: 15,
    backgroundColor: "#fff",
    shadowColor: "",
    elevation: {
      outerWidth: 1,
    },
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.5)",
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
    justifyContent: "center"
  },
  checkoutTaskButton: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: "flex-end",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
    
  },
  projectHorizontalScroller: {
    width: "100%",
  },
});
