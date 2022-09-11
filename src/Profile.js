//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { auth } from '../firebase.js';
import profpic from '../assets/profpic.png';
// create a component
const Profile = () => {
    const email1 = auth.currentUser.email;
    console.log(email1);
    return (
    //     <View style={styles.container}>
    //         <Text><Text>Your email is: </Text>{email1}</Text>
    //     </View>
    // );
    <View style={styles.container}>
    <View style={styles.topcard}>
    <Image source={profpic} style={styles.profpic} /> 
    
    <Text style={styles.instructions}>
    {email1}
    </Text>
    </View>

    <View  style={styles.bottomcard} >
    <Text style={styles.details}>
    <Text style={styles.detailshead}>Email: </Text>{email1}
    </Text>

    <Text style={styles.details}>
    <Text style={styles.detailshead}>Location: </Text>Uknown
    </Text>

    <Text style={styles.details}>
    <Text style={styles.detailshead}>Phone: </Text>Uknown
    </Text>

    <Text style={styles.details}>
    <Text style={styles.detailshead}>Age: </Text>Uknown
    </Text>
    <Text style={styles.details}>
    <Text style={styles.detailshead}>Gender: </Text>Uknown
    </Text>
    </View>


    </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },

    topcard:{
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 15,
        paddingBottom: 20,
        margin: 15,
        alignItems: 'center',
    },

    profpic: {
        marginTop: 20,
        width: 150,
        height: 150,
    },
    instructions: {
        marginTop:10,
        fontSize: 15,
        fontWeight: "bold",
    },
    bottomcard: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 15,
        padding: 20,
        margin: 15,
    }, 
    detailshead: {
        fontWeight: "bold",
    },
    details: {
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
    }
});

//make this component available to the app
export default Profile;
