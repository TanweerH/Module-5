//import liraries
import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import icon2 from '../assets/icon2.png';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


// create a component
const Pre = ({navigation}) => {
    return (
    <View style={styles.container}>
    <View style={styles.top}><Image source={icon2} style={styles.icon2} /> 

    <Text style={styles.instructions}>
        Your first choice for mobile phones!
    </Text>
    </View>
    <TouchableOpacity onPress={() => navigation.navigate('Register')} style={styles.button}>
    <Text style={styles.buttonText}>Register</Text>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
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
    marginTop: 30,
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

    top: {
    marginTop: 90,
    marginBottom: 100,
    alignItems: 'center',
    justifyContent: 'center',
    }
});

//make this component available to the app
export default Pre;