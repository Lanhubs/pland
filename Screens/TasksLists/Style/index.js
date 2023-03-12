import {Dimensions, StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  username: {
    color: "#fff",
    fontWeight: "600",
  },
  userImg: {
    width: 70,
    height: 70,
  },
  heroText:{
    // marginTop: 10,
    color: "#fff",
    fontSize: 25,
    
  },
  headerInput: {
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    marginHorizontal: 'auto',
    borderRadius: 10,
    height: 50,
    overflow: 'hidden',
    position: 'absolute',
    bottom: '-20%',
    /* left: '5%',
    right: '5%', */
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  headerInputElem: {
    height: '100%',

  },
  //   main body
  dropdownListBtn: {
    backgroundColor: '#000',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 7,
    height: '70%',
    width: 40,
    borderRadius: 5,
  },
  mainBody: {
    flex: 1,
  },
  mainBodyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '5%',
    alignItems: 'center',
  },
  //   projects styles
  projects: {
    paddingHorizontal: 10,
    paddingVertical: 15,

    flexDirection: 'row',
    width: '100%',
  },
});
