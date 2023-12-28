import { StyleSheet, Text, View, Button } from 'react-native'
import React,{useState} from 'react'
import Modal from "react-native-modal"
import AntDesign from 'react-native-vector-icons/AntDesign'

const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
const CustomModal = () => {
  return (
    <View style={{ flex: 1 }}>
        <AntDesign name='pluscircle' color='black' size={20} onPress={() => navigation.navigate('add todo')} />
      <Button title="Show modal" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>

          <Button title="Hide modal" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  )
}

export default CustomModal

const styles = StyleSheet.create({})