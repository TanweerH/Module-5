import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/Login';
import Dashboard from './src/Dashboard';
import Main from './src/Main';
import Find from './src/Find';
import Register from './src/Register';
import Pre from './src/Pre';
import Read from './src/Read';
import Profile from './src/Profile';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pre" component={Pre} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Find" component={Find} />
        <Stack.Screen name="Read" component={Read} />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

