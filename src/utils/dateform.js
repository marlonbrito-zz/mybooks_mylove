import React from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

function dateform() {


    return (
        <DatePicker
            style={styles.datePickerStyle}
             // Initial date from state
            mode="date" // The enum of date, datetime and time
            placeholder="Selecione a data do seu nascimento"
            format="DD/MM/YYYY"
            minDate="01/01/1950"
            maxDate="30/12/2015"
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
export default dateform;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        padding: 20,
    },
    datePickerStyle: {
        width: '90%',
        marginTop: 20,
        backgroundColor: '#FFF',
        width: '90%',
        // marginBottom: '15',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginTop: 10
        
    },
});