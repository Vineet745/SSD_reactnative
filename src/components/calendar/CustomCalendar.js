import React, { useState } from 'react';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { useDispatch } from 'react-redux';
import { selectDate } from '../../redux/slice/orderSlice';
import { format } from 'date-fns';

const CustomCalendar = () => {
  const [selected, setSelected] = useState(null);
  const dispatch = useDispatch();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return format(date, 'dd-MM-yyyy');
  };

  return (
    <Calendar
      style={{
        borderColor: 'gray',
        height: 320,
      }}
      enableSwipeMonths
      onDayPress={(day) => {
        const formattedDate = formatDate(day.dateString);
        setSelected(formattedDate);
        dispatch(selectDate(formattedDate));
      }}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: 'white',
        textSectionTitleColor: '#b6c1cd',
        selectedDayBackgroundColor: '#90EE90',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDayFontFamily: 'Geologica-Medium',
        textMonthFontFamily: 'Geologica-Bold',
      }}
      markedDates={{
        [selected]: { selected: true, disableTouchEvent: true, selectedDotColor: 'orange' },
      }}
    />
  );
};

// Memoize the CustomCalendar component to prevent unnecessary re-renders
export default React.memo(CustomCalendar);
