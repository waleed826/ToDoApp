import { Alert, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Feather from 'react-native-vector-icons/Feather'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';


const AddTodo = ({ navigation }) => {
    return (
        <View style={{ backgroundColor: '#EDEDED', }}>
            <View style={styles.circleOne}>
            </View>
            <View style={styles.circleTwo}>
            </View>
            <View style={{}}>
                <View style={{ padding: 10 }}>
                    <Feather name='arrow-left-circle' size={30} style={{}} onPress={() => Alert.alert(pressed)} />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Text style={{ fontWeight: 500, fontSize: 20, color: 'black',padding:10 }}>
                        Welcome Onboard!
                    </Text>
                    <Image source={require('../images/Girlboylaptop.png')} style={{ margin:10 }}/>
                    <Text style={{ color: 'rgba(85, 132, 122, 0.97)', margin:10  }}>Add What your want to do later on..</Text>
                </View>
            </View>
            <View>
                <CustomInput color={'white'} />
                <CustomInput color={'white'} />

                <CustomInput color={'white'} />
                <CustomButton title={'Add to list'} color={'#55847A'} onPress={() => Alert.alert('pressed')} />
            </View>
        </View>
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