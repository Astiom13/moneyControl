import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import HomeScreen from "./screens/HomeScreen.1";

import firebase from 'firebase' 


var firebaseConfig2 = {
  apiKey: "AIzaSyByfYO_CuSbmFPlgpQoz-2qW-1bI3wFxmc",
  authDomain: "cashContro;.firebaseapp.com",
  projectId: "cashControl",
  storageBucket: "cashControl.appspot.com",
  messagingSenderId: "717247221739",
  appId: "1:717247221739:web:82d2bbf6b069e5bea753ae"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig2);
}



