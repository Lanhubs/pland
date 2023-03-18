import {View, Text} from 'react-native';
import React from 'react';
import HorizontalDatePicker from '@awrminkhodaei/react-native-horizontal-datepicker';
const HrDatePicker = () => {
    const [selectedDate, setSelectedDate] = React.useState()
  return (
    <View style={{marginHorizontal: 0}}>
      <HorizontalDatePicker
        mode="gregorian"
        onSelectedDateChange={(date)=>setSelectedDate(date)}
        initialSelectedDate={new Date()}
        startDate={new Date()}
        endDate={new Date('2023-12-31')}
        itemHeight={50}
        itemRadius={10}
        selectedItemWidth={170}
        flatListContainerStyle={{flex: 1}}
        
        selectedItemBackgroundColor={'rgba(0, 0, 0, 0.7)'}
        
      />
    </View>
  );
};

export default HrDatePicker;
