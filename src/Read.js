//import liraries
import React, { useEffect, useState } from 'react';
import { Button, button, StyleSheet, Text,TextInput, View, Image, ScrollView } from 'react-native';
import { db } from '../firebase.js';
import {collection, onSnapshot} from "firebase/firestore";
import profpic from '../assets/profpic.png';



const Read = ({navigation}) => {
    const [reviews, setReviews] = useState([]);
    useEffect(() =>
    onSnapshot(collection(db, "reviews") , (snapshot)=>
        setReviews(snapshot.docs.map((doc)=>({ ...doc.data(), id: doc.id})))
        ),
        []
);

    return (
        <View style={styles.container}>
            <ScrollView>
            {/* <View>{reviews.map((reviews) => (<Text key={reviews.id}>Name: {reviews.name}, Description{reviews.description}</Text>))}
            </View> */}
            <View style={styles.header}><Text style={styles.headertext}>Our Reviews</Text></View>
            {reviews.map((reviews) => (<View key={reviews.id} style={styles.reviewcard}>
                                            <View style={styles.toppart}>
                                                <Image source={profpic} style={styles.profpic}/><Text style={styles.reviewname}>{reviews.name}</Text>
                                            </View>
                                            <View style={styles.botpart}>
                                                <Text>{"\n"} {reviews.description}</Text>
                                            </View>
                                        </View>))}
            </ScrollView>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header:{
    alignItems:'center',
    marginTop:15,
    },
    headertext:{
    fontWeight: 'bold',
    fontSize: 20,
    },
    toppart: {
    flexDirection: 'row',
    },
    profpic: {
    width: 30,
    height:30,
    marginRight:10,
    },
    reviewname: {
        marginTop: 5,
        color: 'black',
        fontWeight: 'bold',
    },
    reviewcard: {
        backgroundColor: 'white',
        width: '90%',
        borderRadius: 15,
        padding: 20,
        margin: 15,
    },
});

//make this component available to the app
export default Read;
