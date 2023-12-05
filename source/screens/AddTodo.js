import { Alert, StyleSheet, Text, View, Image, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';


const AddTodo = ({ navigation }) => {
    const [loading, setLoading] = useState(true)
    const [first, setFirst] = useState('')
    const [second, setSecond] = useState('')
    const [third, setThird] = useState('')
    const [event, setEvent] = useState([])
    const getData = async () => {
        const data = await AsyncStorage.getItem('my-key')
        const contacts = JSON.parse(data)
        setEvent(contacts)
    }
    useEffect(() => {
        getData()
    }, [])

    const saveButton = async () => {
        const savedContact = [...event, { first, second, third }]
        console.log("🚀 ~ file: Add.js:27 ~ saveButton ~ savedContact:", savedContact)

        // console.log(contact)
        const jsonValue = JSON.stringify(savedContact);
        await AsyncStorage.setItem('my-key', jsonValue);
        console.log("🚀 ~ file: Add.js:38 ~ storeData ~ my:", jsonValue)
        setEvent(savedContact)
        navigation.navigate('Dasboard')
    }

    return (
        <KeyboardAwareScrollView refreshControl={<RefreshControl onRefresh={saveButton} refreshing={loading} colors={["black"]} />}>
            <View style={{ backgroundColor: '#EDEDED', }}>
                <View style={styles.circleOne}>
                </View>
                <View style={styles.circleTwo}>
                </View>
                <View style={{}}>
                    <View style={{ padding: 10 }}>
                        <Feather name='arrow-left-circle' size={30} style={{}} onPress={() => navigation.replace('Dasboard')} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                        <Text style={{ fontWeight: 500, fontSize: 20, color: 'black', padding: 10 }}>
                            Welcome Onboard!
                        </Text>
                        <Image source={require('../images/Girlboylaptop.png')} style={{ margin: 10 }} />
                        <Text style={{ color: 'rgba(85, 132, 122, 0.97)', margin: 10 }}>Add What your want to do later on..</Text>
                    </View>
                </View>
                <View>
                    <CustomInput color={'white'} onChangeText={setFirst} />
                    <CustomInput color={'white'} onChangeText={setSecond} />

                    <CustomInput color={'white'} onChangeText={setThird} />
                    <CustomButton title={'Add to list'} color={'#55847A'}
                        onPress={saveButton}
                    />
                </View>
            </View>
        </KeyboardAwareScrollView>
    )
}

export default AddTodo

const styles = StyleSheet.create({
    circleOne: {
        height: 200,
        backgroundColor: 'rgba(85, 132, 122, 0.44)',
        height: 200,
        width: 200,
        borderRadius: 100,
        position: 'absolute',
        top: -130,
        left: -20
    },
    circleTwo: {
        backgroundColor: 'rgba(85, 132, 122, 0.44)',
        height: 200,
        width: 200,
        borderRadius: 100,
        position: 'absolute',
        top: -70,
        left: -120
    },
})