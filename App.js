import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StartScreen from './components/StartScreen';
import LoginScreen from './components/LoginScreen';
import HomeScreen from './components/HomeScreen';

import WalletScreen from './components/WalletScreen';
import OtherScreen from './components/OtherScreen';
import ReferAndEarnScreen from './components/ReferAndEarnScreen';
import ProfileScreen from './components/ProfileScreen'
import NewProfileSection from './components/NewProfileSection';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={StartScreen}
          options={{ headerShown: false }} // Remove the header for HomeScreen
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false ,
          presentation: 'modal',
            gestureDirection: 'horizontal',}}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false,}}
        />
        <Stack.Screen
          name="WalletScreen"
          component={WalletScreen}
          options={{headerShown: false ,
            
          }} 
        />
         <Stack.Screen
          name="OtherScreen"
          component={OtherScreen}
          options={{headerShown: false ,
            // presentation: 'modal',
            // gestureDirection: 'horizontal',
          }}
          
        />
        <Stack.Screen
          name="ReferAndEarnScreen"
          component={ReferAndEarnScreen}
          options={{
            // presentation: 'modal',
            // gestureDirection: 'horizontal',
          }}
          
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
          options={{
            // presentation: 'modal',
            // gestureDirection: 'horizontal',
          }}
          
        />
        <Stack.Screen
          name="NewProfileSection"
          component={NewProfileSection}
          // options={{
          //   // presentation: 'modal',
          //   // gestureDirection: 'horizontal',
          // }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}