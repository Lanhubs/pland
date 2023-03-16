import {StyleSheet, Dimensions} from 'react-native';

export const style = StyleSheet.create({
  task: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    
    padding: 10,
    margin: 10,
    // height: 70,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    marginBottom: 10,
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 10,
    elevation: 5,
  },
//   tasks: {flex: 1},
  tasksHeader: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  taskTitle: {
    fontSize: 18,
    fontWeight: '500',
  },
  seperator:{
    height: 10
  }
});
