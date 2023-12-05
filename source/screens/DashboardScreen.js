import { Image, StyleSheet, Text, View, Dimensions, ScrollView, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useEffect, useCallback } from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import CheckBox from 'react-native-check-box'

const DashboardScreen = ({ navigation }) => {
  useEffect(() => {
    getContacts()
  }, [])
  useFocusEffect(
    useCallback(
      () => {
        getContacts()
      },
      [],
    )
  )
  const [show, setShow] = useState(null)
  const Pressed = (index) => {
    setShow(index)
  }
  const [eventData, setEvents] = useState([])
  const getContacts = async () => {
    const data = await AsyncStorage.getItem('my-key')
    const contacts = JSON.parse(data)
    setEvents(contacts)
    console.log("🚀 ~ file: Contacts.js:20 ~ getContacts ~ contacts:", contacts)
  }
  const [toggleCheckBox, setToggleCheckBox] = useState(false)

  const { height, width } = Dimensions.get('screen')
  return (
    <ScrollView style={{ backgroundColor: '#EDEDED', zIndex: 1, flex: 1 }}>

      <View style={styles.circleOne}>
      </View>
      <View style={styles.circleTwo}>
      </View>

      <ImageBackground source={require('../images/Rectangle.png')}
        style={{
          //  backgroundColor: 'rgba(85, 132, 122, 0.82)', 
          height: 250, zindex: 9, borderCurve: 'continuous', alignItems: 'center', justifyContent: 'center'
        }}>
        <Image source={require('../images/handsome.png')} />
        <Text style={{ fontWeight: '500', fontSize: 20, color: 'black' }}>Welcome Fisayomi</Text>
      </ImageBackground>
      <View style={{}}>
        <Image style={{ alignSelf: 'center',bottom:20,zIndex:8 }} source={require('../images/bicycle.png')} />
      </View>
      <View>
        <Text>TODO APP</Text>
      </View>
      <View style={{ backgroundColor: 'white', width: width * 0.9, padding: 10, borderRadius: 30,margin:15 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 10 }}>
          <Text>Daily Tasks.</Text>
          <AntDesign name='pluscircle' color='black' size={20} onPress={() => navigation.navigate('add todo')} />
        </View>
        <ScrollView style={{ margin: 10 }}>
          {
            eventData?.map((item, index) => {
              return (
                // <TouchableOpacity onPress={()=>Pressed(index)} key={item.index}>
                <View key={item.index}>
                  <View style={styles.boxView}>
                    <CheckBox
                      style={styles.boxStyle}
                      onClick={() => setToggleCheckBox(!toggleCheckBox)}
                      isChecked={toggleCheckBox}
                      checkedCheckBoxColor={'green'}
                      checkBoxColor={'gray'}
                    />
                    <Text style={{ color: 'black' }}>{item.first}</Text>
                  </View>
                  <View style={styles.boxView}>
                    <CheckBox
                      style={styles.boxStyle}
                      onClick={() => setToggleCheckBox(!toggleCheckBox)}
                      isChecked={toggleCheckBox}
                      checkedCheckBoxColor={'green'}
                      checkBoxColor={'gray'}
                    />
                    <Text style={{ color: 'black' }}>{item.second}</Text>
                  </View>
                  <View style={styles.boxView}>
                    <CheckBox
                      style={styles.boxStyle}
                      onClick={() => setToggleCheckBox(!toggleCheckBox)}
                      isChecked={toggleCheckBox}
                      checkedCheckBoxColor={'green'}
                      checkBoxColor={'gray'}
                    />
                    <Text style={{ color: 'black' }}>{item.third}</Text>
                  </View>
                </View>
                // {show === index ? <Text style={{ color: 'yellow' }}>SHown</Text> : null}
                // </TouchableOpacity>
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
  boxStyle: {
    padding: 10,
  },
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
  }
})