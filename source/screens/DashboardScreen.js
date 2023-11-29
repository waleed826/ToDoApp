import { Image, StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

const DashboardScreen = ({ navigation }) => {
    useEffect(()=>{
      getContacts()
  },[eventData])
  // useFocusEffect(
  //   useCallback(
  //     () => {
  //       getEvents()
  //     },
  //     [],
  //   )

  // ) 
  const [eventData, setEvents] = useState([])
  const getContacts = async()=>{
    const data = await AsyncStorage.getItem('my-key')
    const contacts = JSON.parse(data)
    setEvents(contacts)
    console.log("🚀 ~ file: Contacts.js:20 ~ getContacts ~ contacts:", contacts)
 }
  const { height, width } = Dimensions.get('screen')
  return (
    <ScrollView style={{ backgroundColor: '#EDEDED', zIndex: 1, flex: 1 }}>

      <View style={styles.circleOne}>
      </View>
      <View style={styles.circleTwo}>
      </View>
      <View style={{ backgroundColor: 'rgba(85, 132, 122, 0.82)', height: 250, zindex: 9, borderWidth: 1, borderColor: 'black', borderCurve: 'continuous', alignItems: 'center', justifyContent: 'center' }}>
        <Image source={require('../images/handsome.png')} />
        <Text style={{ fontWeight: '500', fontSize: 20, color: 'black' }}>Welcome Fisayomi</Text>
      </View>
      <View>
        <Image style={{ alignSelf: 'center', }} source={require('../images/bicycle.png')} />
      </View>
      <View>
        <Text>TODO APP</Text>
      </View>
      <View style={{ backgroundColor: 'white', width: width * 0.6, padding: 10, borderRadius: 30 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <Text>Daily Tasks.</Text>
          <AntDesign name='pluscircle' color='black' size={20} onPress={() => navigation.navigate('add todo')} />
        </View>
        <ScrollView style={{ margin: 10 }}>
          <Text style={{ fontSize: 15, color: 'black' }}>Follow Oluwafisayomi.dev on Twitter.</Text>
          <Text style={{ fontSize: 15, color: 'black' }}>Learn Figma by 4pm.</Text>
          <Text style={{ fontSize: 15, color: 'black' }}>Coding at 9am.</Text>
          <Text style={{ fontSize: 15, color: 'black' }}>Watch Mr Beasts Videos.</Text>
          {
            eventData?.map((item, index) => {
              return (
                <View key={item.index}>
                  <Text style={{color:'black'}}>{item.first}</Text>
                  <Text  style={{color:'black'}}>{item.second}</Text>
                  <Text  style={{color:'black'}}>{item.third}</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({
  circleOne: {
    height: 200,
    backgroundColor: 'rgba(85, 132, 122, 0.44)',
    height: 200,
    width: 200,
    borderRadius: 100,
    position: 'absolute',
    top: -130,
    left: -20,
    zindex: 7,
  },
  circleTwo: {
    backgroundColor: 'rgba(85, 132, 122, 0.44)',
    height: 200,
    width: 200,
    borderRadius: 100,
    position: 'absolute',
    top: -70,
    left: -120,
    zindex: 5
  },
})