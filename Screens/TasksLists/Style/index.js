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
    zIndex: 1000,
    width: '90%',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    marginHorizontal: 'auto',

    borderRadius: 10,
    height: 50,
    overflow: 'hidden',
    position: 'absolute',
    bottom: '-20%',
    left: '5%',
    right: '5%',
    shadowColor: '#000',
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
    flex: 1,
    borderColor: 'none',
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
    paddingTop: '1.7rem',
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
  project: {
    width:
      Dimensions.get('window').width / 2 + Dimensions.get('window').width / 15,
    borderRadius: 20,
    height: '90%',
    padding: 15,
    backgroundColor: '#fff',
    shadowColor: '#000',
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
    backgroundColor: 'black',
    width: 60,
    height: 60,
    color: '#fff',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutTaskButton: {
    width: 50,
    height: 50,
    borderRadius: 50,
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  projectHorizontalScroller: {
    width: '100%',
    // flexDirection: "row",
  },
});
