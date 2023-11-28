import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';


const SignUp = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [cnfrmpassword, setCNFRMPassword] = useState('');

    return (

        <KeyboardAwareScrollView contentContainerStyle={{flex: 1}} style={{ backgroundColor: '#EDEDED', }} >
            <View style={{ justifyContent: 'space-between' }}>
                <View style={styles.circleOne}>
                </View>
                <View style={styles.circleTwo}>
                </View>
                <View style={{ flex: 0.8, }}>
                    <View style={{ padding: 10 }}>
                        <Feather name='arrow-left-circle' size={30} style={{ top: 47 }} onPress={()=>navigation.replace('Home')} />
                    </View>
                    <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', top: 40 }}>
                        <Text style={{ fontWeight: 500, fontSize: 20, color: 'black' }}>
                            Welcome Onboard!
                        </Text>
                        <Text style={{ color: 'black', color: 'rgba(85, 132, 122, 0.97)', margin: 10 }}>
                            Let’s help you meet up your task
                        </Text>
                    </View>
                </View>
                <View style={{ margin: 10, padding: 10, top: 50 }}>
                    <CustomInput placeholder={'Enter your Full Name'} />
                    <CustomInput placeholder={'Enter your Email address '} maxlength={11} keyboardType='email-address' />
                    <CustomInput placeholder={'Enter Password'} color={'white'} onChangeText={setPassword} maxlength={10} secureTextEntry />
                    <CustomInput placeholder={'Confirm Password'} color={'white'} onChangeText={setCNFRMPassword} maxlength={10} secureTextEntry />
                    <CustomButton title={'Sign Up'} color={'#55847A'} onPress={()=>navigation.navigate('Dasboard')} />
                </View>
                <Text style={{ textAlign: 'center',margin:50 }}>Already have an account ? <Text style={{ color: 'rgba(85, 132, 122, 0.97)' }} onPress={()=>navigation.replace('Sign In')}>Sign In</Text></Text>
            </View>
        </KeyboardAwareScrollView>

    )
}

export default SignUp

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