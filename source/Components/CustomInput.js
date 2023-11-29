import { StyleSheet, Text, View, TextInput } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign'
const CustomInput = (props) => {
    
  return (
    <View style={{backgroundColor:'white',flexDirection:'row',padding:5,margin:10,borderRadius:10}}>
    <TextInput 
    placeholder={props.placeholder}
    maxLength={props?.length}
    keyboardType={props?.keyboardType}
    placeholderTextColor={'black'}
    style={{width:'70%',padding:10}}
    secureTextEntry={props.secureTextEntry}
    onChangeText={props.onChangeText}
    />
    <AntDesign name={props.name} size={40} onPress={props.onPress}/>
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})