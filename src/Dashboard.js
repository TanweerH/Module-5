import React, { Component } from 'react';
import { Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import buy from '../assets/buy.png';
import profile from '../assets/profile.png';
import insta from '../assets/insta.png';
import support from '../assets/support.png';



// create a component
const Dashboard = ({navigation}) => {
    return (
<View>
    <View style={styles.welcome}><Text style={styles.instructions}>Welcome, back!</Text></View>
    <View style={styles.outerContainer}>
        <View style={styles.container1}>
            <View style={styles.inner1}><TouchableOpacity onPress={() => navigation.navigate('Main')}><Image source={buy} style={styles.images} /></TouchableOpacity></View>
            <View style={styles.inner2}><TouchableOpacity onPress={() => navigation.navigate('Main')}><Image source={profile} style={styles.images}/></TouchableOpacity></View>
        </View>

        <View style={styles.container2}>
            <View style={styles.inner3}><TouchableOpacity onPress={() => navigation.navigate('Main')}><Image source={insta} style={styles.images}/></TouchableOpacity></View>
            <View style={styles.inner4}><TouchableOpacity onPress={() => navigation.navigate('Main')}><Image source={support} style={styles.images}/></TouchableOpacity></View>
        </View>

        <View>
        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
            <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
        </View>
    </View>
    
</View>
    );
};


const styles = StyleSheet.create({
    outerContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    },

    container1: {
    width: '100%',
    height: '35%',
    flexDirection: 'row', 
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
    },

    container2: {
    width: '100%',
    height: '35%',
    flexDirection: 'row',
    marginTop: 4,
    alignItems: 'center',
    justifyContent: 'center',
    },

    inner1: {
    width: '46%',
    backgroundColor: '#8c98a2',
    height: '98%',
    marginRight: 5,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
    },

    inner2: {
    width: '46%',
    backgroundColor: '#6a8775',
    height: '98%' ,
    marginLeft: 5,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center' 
    },

    inner3: {
    width: '46%',
    backgroundColor: '#756a87',
    height: '98%' ,
    marginRight: 5,
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
    },

    inner4: {
    width: '46%',
    backgroundColor: '#87756a',
    height: '98%' ,
    marginLeft: 5,
    borderRadius: 10, 
    alignItems:'center',
    justifyContent:'center'
    },

    icon2: {
    width: 205,
    height: 200,
    marginBottom: 20,
    },

    welcome: {
    width: '100%',
    alignItems:'center',
    justifyContent:'center'
    },

    instructions: {
    color: '#888',
    fontSize: 25,
    marginHorizontal: 15,
    marginTop: 20,
    alignItems:'center',
    justifyContent:'center'
    },

    images: {
    width: 50,
    height: 50,
    },

    button: {
    backgroundColor: "#858585",
    padding: 15,
    width: 300,
    marginTop: 20,
    borderRadius: 15,
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
});

//make this component available to the app
export default Dashboard;