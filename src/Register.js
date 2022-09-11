//import liraries
import React, { useEffect,useState } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import icon2 from '../assets/icon2.png';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth} from "../firebase.js";
// import { auth } from '../firebase.js';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const Register = ({navigation}) => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);


// const RegisterUser = () => {createUserWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//         // Signed in 
//         const user = userCredential.user;
//         navigation.navigate('Dashboard');
//         // ...
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         // ..
//     });}
const handleRegister = () =>
{createUserWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
        navigation.navigate('Dashboard');
    })
    .catch(error => alert(error.message))}

    return (
    <View style={styles.container}>
    <Image source={icon2} style={styles.icon2} /> 

    <Text style={styles.instructions}>
        Your first choice for mobile phones!
    </Text>

    <View>
        <TextInput
        placeholder='Email'
        style={styles.input}
        onChangeText={(email)=> {setEmail(email)}}
        value={email}
        >
        </TextInput>

        <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText={(password)=> {setPassword(password)}}
        value={password}
        secureTextEntry
        ></TextInput>
    </View>

    <TouchableOpacity onPress={handleRegister} style={styles.button}>
    <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.click}><Text style = {styles.clickText}>Have an account? Login</Text></TouchableOpacity>
    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },

    icon2: {
    width: 205,
    height: 200,
    marginBottom: 20,
    },

    instructions: {
    color: '#888',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 30,
    },

    button: {
    backgroundColor: "#858585",
    padding: 15,
    width: 300,
    borderRadius: 15,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
    },

    buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
    alignItems: 'center',
    justifyContent: 'center',
    }, 

    input: {
    height: 40,
    width: 300,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    },
    click: {
    marginTop: 20,
    },

    clickText: {
    textDecorationLine: 'underline',
    color: 'blue',
    fontWeight: "bold",
    },
});

//make this component available to the app
export default Register;