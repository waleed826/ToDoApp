import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './source/screens/HomeScreen'
import SignUp from './source/screens/SignUp'
import SignInScreen from './source/screens/SignInScreen'
import DashboardScreen from './source/screens/DashboardScreen'
import AddTodo from './source/screens/AddTodo'

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
   <NavigationContainer>
    <Stack.Navigator
     screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='SignUp' component={SignUp} />
      <Stack.Screen name='Sign In' component={SignInScreen} />
      <Stack.Screen name='Dasboard' component={DashboardScreen} />
      <Stack.Screen name='add todo' component={AddTodo} />
      
    </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})