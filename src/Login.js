//import liraries
import React, { useEffect,useState } from 'react';
import { KeyboardAvoidingView, Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import icon2 from '../assets/icon2.png';
import { auth } from '../firebase.js';
import {signInWithEmailAndPassword} from "firebase/auth";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const Login = ({navigation}) => {
    const [email, setEmail] = React.useState(null);
    const [password, setPassword] = React.useState(null);
    
    const handleLogin = () => 
    {signInWithEmailAndPassword(auth, email, password)
        .then(userCredentials => {
            const user = userCredentials.user;
            console.log('Logged in with:', user.email);
            navigation.navigate('Dashboard');
        })
        .catch(error => alert(error.message))
    }
    

    return (
    <View style={styles.container}>
    <Image source={icon2} style={styles.icon2} /> 

    <Text style={styles.instructions}>
        Your first choice for mobile phones!
    </Text>

    <KeyboardAvoidingView>
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
    </KeyboardAvoidingView>

    <TouchableOpacity onPress={handleLogin} style={styles.button}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.click}><Text style = {styles.clickText}>Not a member? Register</Text></TouchableOpacity>
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
    fontWeight: "bold",
    color: 'blue',
    },
});

//make this component available to the app
export default Login;