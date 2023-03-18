import {Dimensions, StyleSheet} from 'react-native';
import {profileImg, ROW} from '../../../Components/Utils/utilities';
export const styles = StyleSheet.create({
  mainContainer: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  headerContainer: {
    ...ROW,
  },
  headerText: {},
  headerTextHeader: {},
  userImg: {
    ...profileImg,
  },
  formHeaderText: {fontSize: 30, fontWeight: '400', alignSelf: 'center'},
  formInput: {
    height: 60,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  formLabel: {
    marginBottom: 5,
    fontSize: 14,
    
    color: '#000',
    textTransform: 'capitalize',
  },
  descriptionInput: {
    height: 100,
  
    backgroundColor: "#fff"
    
  },
  submitBtn: {
    height: 50,
    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
});
