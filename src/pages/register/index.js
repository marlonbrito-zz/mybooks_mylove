import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, Image, StyleSheet, TextInput, TouchableOpacity, Text } from 'react-native';
import logo from "../../images/logo.png";
import Storage from '../../utils/storage';
import api from '../../services/api';
import {GoToButton} from '../../utils/GoToButton'
import Dateform from '../../utils/dateform'
import Selectimages from '../../utils/selectImages'
function Register({ navigation }) {

    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [nome, setNome] = useState('');
    const [birthday, setBirthday] = useState('');
    const [image, setImage] = useState('');


    function validate() {

        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
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

            await api.post('/register', {
                params: {
                    mail,
                    nome,
                    pass,
                    birthday,
                    image
                }
            }).then(function (response) {
                // handle success
                console.log(response);
                if (response.data === null || response.data.name === undefined) {
                    //chama cadastro
                    alert('falha ao cadastrar!')
                } else {
                    //salva dados e chama tela principal
                    //Storage.setItem(data, response.data);
                    alert(JSON.stringify(Storage.getItem(data)));
                    navigation.navigate('Main')
                }

            })
                .catch(function (error) {
                    // handle error
                    alert(error)
                    console.log(error);
                });

            console.log(response)
            if (response.status === 404) {
                return alert('retornad 404')
            }

        } catch (erro) {
            console(erro)
            alert(erro)
        }
    }


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
                
                <Dateform />
                <Selectimages />
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
        height:'20%'
    },
    containerLogo: {
        //flex: 1,
        width: '100%',
        height:'20%',       
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        flex: 1,
        height:'20%',
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
    }

});

export default Register;