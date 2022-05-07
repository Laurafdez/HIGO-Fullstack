import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { View, Text, TextInput, StyleSheet, TouchableHighlight, Image } from 'react-native';


export function Login(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function Submit (){
        
        axios.post('http://10.151.158.6:8080/api/auth/signin', {username:'p',
        password:'12345678'})
        .then(res => {   
         console.log(res);
         console.log(res.data);
          })
          .catch(error=>{
            alert("Error server "+error)
          })
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={{ width: 100, height: 100, alignItems: 'center' }} source={require('../assets/def.png')} />
                <Text
                    style={{ color: '#333333', fontWeight: 'bold', fontFamily: 'Baskerville-Bold', fontSize: 30 }}>
                    Hi-Go!
                </Text>
            </View>

            <TextInput
                style={styles.input}
                placeholder="Email..."
                value={email}
                onChangeText={(text) => setEmail(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Contraseña..."
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <TouchableHighlight style={styles.button} onPress={() => Submit()}>
                <Text style={styles.textButton}>Log in</Text>
            </TouchableHighlight>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3EA9FA',
        // alignItems: 'center',
        justifyContent: 'space-around',
        padding: 15
    },
    header: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        padding: 15,
        margin: 10,
        backgroundColor: 'white',
        color: 'black',
        borderWidth: 3,
        borderColor: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Times New Roman'
        // textAlign: 'center'
    },
    button: {
        alignSelf:'center',
        width: 242,
        height: 60,
        bottom: 15,
        borderRadius: 50,
        backgroundColor: '#333333',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        color: '#FEFAE0',
        fontWeight: 'bold',
        fontFamily: 'AmericanTypewriter-Bold',
        fontSize: 40
    }
});

export default Login;