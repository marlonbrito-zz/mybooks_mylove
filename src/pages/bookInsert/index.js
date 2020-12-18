import React, { useState, useEffect } from 'react';
import { AsyncStorage, View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import logo from "../../images/logo.png";
import api from '../../services/api';
import * as DocumentPicker from 'expo-document-picker';
import DatePicker from 'react-native-datepicker';
function inserBook({ navigation }) {

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [nome, setNome] = useState('');
    const [birthday, setBirthday] = useState('');
    const [imagem, setImagem] = useState('');


    function validate() {
        setBirthday('08/08/1990')
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(mail) === false) {
            alert("Email invalido");
            handleSubmit
            return false;
        }
        else {
            handleSubmit()

        }
    }
    async function handleSubmit() {
        if (mail === null || mail === undefined || mail === '' || mail === ' ') {
            alert('Informe um e-mail valido!')
        } else {
            if (pass === null || pass === undefined || pass === '' || pass === ' ') {
                alert('Informe Sua senha!')
            } else {
                if (pass.length < 6) {
                    alert('Senha inválida!')
                } else {
                    //chama login

                    await login()
                }
            }
        }
    }
    async function login() {
        try {
            const image = imagem.uri
            const data = JSON.parse={
                mail,
                nome,
                pass,
                birthday,
                image};
            const response = await api.post('/register', {
               
                    mail,
                    nome,
                    pass,
                    birthday,
                    image
                
            });
            console.log(response)
            if (response !== null) {
                console.log(response)
                await AsyncStorage.setItem(1, JSON.stringify(data));
                alert(JSON.stringify(await AsyncStorage.removeItem(key)));
                navigation.navigate('Main')    
            } else {
                alert('a requisição falhou')
            }

        } catch (erro) {
            console.log(erro)
            alert(erro)
        }
    }


    async function selectFile() {
        // Opening Document Picker to select one file
        try {
            const res = await DocumentPicker.getDocumentAsync({
                type: "*/*" // all files
                // type: "image/*" // all images files
                // type: "audio/*" // all audio files
                // type: "application/*" // for pdf, doc and docx
                // type: "application/pdf" // .pdf
                // type: "application/msword" // .doc
                // type: "application/vnd.openxmlformats-officedocument.wordprocessingml.document" // .docx
                // type: "vnd.ms-excel" // .xls
                // type: "vnd.openxmlformats-officedocument.spreadsheetml.sheet" // .xlsx
                // type: "text/csv" // .csv
            });
            // Printing the log realted to the file
            //console.log('res : ' + JSON.stringify(res));
            // Setting the state to show single file attributes
            setImagem(res);

        } catch (err) {
            setImagem(null);
            // Handling any exception (If any)
            alert('Unknown Error: ' + JSON.stringify(err));
            throw err;
            // if (DocumentPicker.isCancel(err)) {
            //     // If user canceled the document selection
            //     alert('Canceled');
            // } else {
            //     // For Unknown Error
            //     alert('Unknown Error: ' + JSON.stringify(err));
            //     throw err;
            // }
        }

    };
    return (
        <KeyboardAvoidingView style={styles.background}>

            <View style={styles.containerLogo}>
                <Text style={styles.textLogo}>My books</Text>
                <Image style={styles.logo} source={logo} />
                <Text style={styles.textLogo}>My Loves</Text>
            </View>

            <View
                style={styles.container
                }

            >
                <TextInput
                    name='nome'
                    style={styles.input}
                    placeholder="Nome Completo"
                    autoCorrect={false}
                    onChangeText={(text) => { setNome(text) }}
                />
                <TextInput
                    name='mail'
                    style={styles.input}
                    placeholder="E-mail"
                    autoCorrect={false}
                    onChangeText={(text) => { setMail(text) }}
                />

                <TextInput
                    name='pass'
                    style={styles.input}
                    placeholder="Senha"
                    autoCorrect={false}
                    onChangeText={(text) => { setPass(text) }}
                />
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

                <View style={styles.mainBody}>
                    {/*Showing the data of selected Single file*/}
                    {imagem !== null ? (
                        <Text style={styles.textStyle}>
                            Nome do arquivo: {imagem.name ? imagem.name : ''}
                            {'\n'}
                            Tipo: {imagem.type ? imagem.type : ''}
                            {'\n'}
                            Tamanho: {imagem.size ? imagem.size : ''} bytes
                            {'\n'}

                        </Text>
                    ) : null}
                    <TouchableOpacity
                        style={styles.buttonStyle}
                        activeOpacity={0.5}
                        onPress={selectFile}>
                        <Text style={styles.buttonTextStyle}>Select File</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={validate} style={styles.btnSubmit}>
                    <Text style={styles.submitText}>Registrar</Text>
                </TouchableOpacity>

            </View>
        </KeyboardAvoidingView>

    );
}



const styles = StyleSheet.create({
    background: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#D2B2C5',
        height: '20%'
    },
    containerLogo: {
        //flex: 1,
        width: '100%',
        height: '20%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        height: '20%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        resizeMode: 'contain'
    },
    textLogo: {
        color: '#EB5E76',
        fontSize: 21,
        fontFamily: 'sans-serif-light'
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        paddingBottom: 50,

    },
    input: {
        backgroundColor: '#FFF',
        width: '90%',
        // marginBottom: '15',
        color: '#222',
        fontSize: 17,
        borderRadius: 7,
        padding: 10,
        marginTop: 10
    },
    btnSubmit: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10

    },
    submitText: {
        color: '#FFF',
        fontSize: 18
    },
    btnRegister: {
        marginTop: 10,

    },
    registerText: {
        color: '#FFF'
    },
    mainBody: {
        // flex: 1,
        justifyContent: 'center',
        width: '90%',
        alignItems: 'center',
        borderRadius: 7
    },
    buttonStyle: {
        backgroundColor: '#35AAFF',
        width: '90%',
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        marginTop: 10
    },
    buttonTextStyle: {
        color: '#FFF',
        fontSize: 18
    },
    textStyle: {
        backgroundColor: '#fff',
        fontSize: 15,
        marginTop: 16,
        marginLeft: 35,
        marginRight: 35,
        textAlign: 'center',
        borderRadius: 7
    },
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

export default inserBook;