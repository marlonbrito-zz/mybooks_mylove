import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function GoToButton({ navigation}) {
    return (
        <TouchableOpacity onPress={() => navigation.navigate(register)} style={styles.btnRegister}>
            <Text style={styles.registerText}>Criar conta</Text>
        </TouchableOpacity>

    );


}
const styles = StyleSheet.create({
    btnRegister: {
        marginTop: 10,

    },
    registerText: {
        color: '#FFF'
    }
})