import { Dimensions, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  header: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderBottomEndRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomStartRadius: 20,
    shadowColor: "rgba(0, 0, 0, 0.5)",
    shadowOpacity: 0.5,
    shadowOffset: 1,
    shadowRadius: 10,
    height: "20%",
  },
  mainheader: {
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    marginHorizontal: 10,
    flexDirection: "row",
  },

  userImg: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
  headerInput: {
    zIndex: 1000,
    width: "90%",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#f1f1f1",
    marginHorizontal: "auto",
    borderRadius: 10,
    height: 50,
    overflow: "hidden",
    position: "absolute",
    bottom: "-15%",
    left: "5%",
    right: "5%",
    shadowColor: "#000",
    // shadowOffset: {width: 3, height: 2},
    // shadowRadius: "50%",
    elevation:2
  },
  headerInputElem: {
    height: "100%",
    flex: 1,
    borderColor: "none",
  },
  //   main body
  dropdownListBtn: {
    backgroundColor: "#000",
    color: "#fff",
    alignItems: "center",
    justifyContent: "center",

    marginHorizontal: 7,
    height: "70%",
    width: 40,
    borderRadius: 5,
  },
  mainBody: {
    flex: 1,
    paddingTop: "1.7rem",
  },
  mainBodyHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: "5%",
    alignItems: "center",
  },
//   projects styles
projects:{
   

}
});
