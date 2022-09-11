//import liraries
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';
import Products from './Products';
import Loader from './Loader';



// create a component
const Find = ({navigation}) => {
    const companies = Products
    const [currentLocation, setCurrentLocation] = useState(null);
    


    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation(location);
        })();
    }, []);

    const RenderMarker = () => {
        return (
            <View>
                {
                    companies.map((maker, index) => {
                        return (
                            <Marker
                                key={index}
                                coordinate={{ latitude: maker.coord['latitude'], longitude: maker.coord['longitude'] }}
                                title={maker.name}
                                image={maker.icon}
                            />
                        )

                    })
                }
            </View>

        )
    }

    return (
        <View style={styles.container}>
            {companies != null

                ? <View>
                    <MapView style={styles.map}
                        initialRegion={{
                            latitude: -34.029091,
                            longitude: 18.390721,
                            latitudeDelta: 0.0922,
                            longitudeDelta: 0.0421,
                        }}
                        showsUserLocation={true}
                    >
                        <RenderMarker />
                    </MapView>
                </View>


                : <Loader />

            }

        </View>
    );
};


// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',

    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },

});

//make this component available to the app
export default Find;