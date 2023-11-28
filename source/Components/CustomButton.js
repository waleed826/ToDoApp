import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomButton = (props) => {
  return (
    <View style={styles.main}>
        <TouchableOpacity onPress={props.onPress} style={{ backgroundColor: props.color,width:'65%', justifyContent: 'center',padding:10 }}>
          <Text style={styles.txt}>{props.title}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    main:{ 
        margin: 10,
        alignItems:'center',
        justifyContent:'center',
        
    },
    txt:{
        color: 'white', 
        textAlign: 'center', 
     }
})