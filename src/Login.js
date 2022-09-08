//import liraries
import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import icon2 from '../assets/icon2.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const Login = ({navigation}) => {
    const [text, onChangeText] = React.useState(null);
    const [text2, onChangeText2] = React.useState(null);
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
        onChangeText={onChangeText}
        value={text}
        >
        </TextInput>

        <TextInput
        placeholder='Password'
        style={styles.input}
        onChangeText2={onChangeText2}
        value={text2}
        ></TextInput>
    </View>

    <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} style={styles.button}>
    <Text style={styles.buttonText}>Login</Text>
    </TouchableOpacity>
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
});

//make this component available to the app
export default Login;