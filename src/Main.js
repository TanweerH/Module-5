//import liraries
import React, { Component } from 'react';
import { ScrollView, Dimensions, Image, View, Text, StyleSheet, TouchableOpacity, TextInput, FlatList } from 'react-native';
import icon2 from '../assets/icon2.png';
import phone1 from '../assets/phone1.png';
import phone2 from '../assets/phone2.png';
import phone3 from '../assets/phone3.png';
import phone4 from '../assets/phone4.png';


// create a component
const Main = ({navigation}) => {

    return (
    <ScrollView>
        <View style={styles.container}>
            <View style={styles.headerCont}><Text style={styles.header}>Our Phones</Text></View>
            <View style={styles.subHeaderCont}><Text style={styles.subHeader}>Showing 1-4 of 4 results</Text></View>
            <View style={styles.card}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={phone1}
                />
                <View style={styles.footer}>
                    <Text style={styles.nameText}>iPhone 13 Pro Max 256GB</Text>
                    <Text style={styles.followText}>
                    <Text style={styles.unfollowText}>
                    R19,999.00 
                    </Text> R16,000.00
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={phone2}
                />
                <View style={styles.footer}>
                    <Text style={styles.nameText}>iPhone 12 64GB</Text>
                    <Text style={styles.followText}>
                    <Text style={styles.unfollowText}>
                    R12,000.00 
                    </Text> R10,499.00
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={phone3}
                />
                <View style={styles.footer}>
                    <Text style={styles.nameText}>iPhone 12 Pro 128GB</Text>
                    <Text style={styles.followText}>
                    <Text style={styles.unfollowText}>
                    R15,000.00 
                    </Text> R12,000.00
                    </Text>
                </View>
            </View>

            <View style={styles.card}>
                <Image
                    style={styles.image}
                    resizeMode="cover"
                    source={phone4}
                />
                <View style={styles.footer}>
                    <Text style={styles.nameText}>iPhone 12 64GB</Text>
                    <Text style={styles.followText}>
                    <Text style={styles.unfollowText}>
                    R12,000.00 
                    </Text> R10,499.00
                    </Text>
                </View>
            </View>

        </View>
    </ScrollView>
    );
};

const screen = Dimensions.get("screen");

// define your styles
const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#F1F1F1',
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    
    },

    card: {
    backgroundColor: "#fff",
    width: screen.width * 0.8,
    borderRadius: 20,
    marginBottom: 15,
    overflow: 'hidden',
    },

    image: {
    height: screen.width * 0.8,
    width: '100%',
    resizeMode: 'contain',
    },

    footer: {
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 25,
    },

    nameText: {
    color: "#20232a",
    fontWeight: "400",
    fontSize: 16,
    },

    followText: {
    fontWeight: "bold",
    fontSize: 16,
    },

    unfollowText: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',   
    color: 'gray', 
    },

    header: {
    fontSize: 21, 
    fontWeight: "bold",
    },

    headerCont: {
    marginBottom: 5, 
    },

    subHeader: {
    fontSize: 15, 
    color: 'gray',
    },

    subHeaderCont: {
    marginBottom: 15, 
    },
});

//make this component available to the app
export default Main;
