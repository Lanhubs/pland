import {Dimensions, StyleSheet} from 'react-native';
import {MD_TEXT, ROW, SM_TEXT} from '../../../Components/Utils/utilities';

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerFullDate: {
    fontSize: 13,
    fontWeight: "400",
  },
  taskContainer: {
    ...ROW,
    backgroundColor: '#fff',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical: 15,
    paddingHorizontal: 10
  },
  taskDetails: {
    flex: 1,
    marginHorizontal: 10,
  },
  taskTitle: {
    ...MD_TEXT,
  },
  taskBrief: {
    ...SM_TEXT,
    marginTop: 10
  },
});
