/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import Details from './screens/Details';
import ButtonNavigate from './components/ButtonNavigate';
import MeterStatusScreen from './screens/MeterStatusForm';
import MeterStatus from './screens/MeterStatus';
import RechargeMeterForm from './screens/RechargeMeterForm';
import SuccessScreen from './screens/SuccessScreen';
import RecieptScreen from './screens/RecieptScreen';

const Stack = createNativeStackNavigator()

function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
       <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
       <Stack.Screen name='CheckMeter'component={MeterStatusScreen} options={{headerShown:false}}/>
       <Stack.Screen name='MeterStatus' component={MeterStatus} options={{headerShown:false}}/>
       <Stack.Screen name='RechargeMeter' component={RechargeMeterForm} options={{headerShown:false}}/>
       <Stack.Screen name='Receipt' component={RecieptScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Details" component={SuccessScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      {/* <ButtonNavigate/> */}
    </NavigationContainer>
  )
}

export default App;
