import React, { Component } from 'react';
import DatePicker from 'react-native-datepicker';

export class dateform extends Component {

  render() {
    return(
        <DatePicker
        style={styles.datePickerStyle}
        date={date} // Initial date from state
        mode="date" // The enum of date, datetime and time
        placeholder="Selecione a data do seu nascimento"
        format="DD-MM-YYYY"
        minDate="01-01-1950"
        maxDate="30-12-2015"
        confirmBtnText="Confirm"
        cancelBtnText="Cancel"
        customStyles={{
            dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
            },
            dateInput: {
                marginLeft: 36,
            },
        }}
        onDateChange={(date) => {
            setBirthday(date);
        }}
    />
    )
  }

}