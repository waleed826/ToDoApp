import { StyleSheet, Text, View, Image } from 'react-native'
import React, {useState} from 'react'
import CustomInput from '../Components/CustomInput';
import CustomButton from '../Components/CustomButton';
import Feather from 'react-native-vector-icons/Feather';

const SignInScreen = ({navigation}) => {

    const [password, setPassword] = useState('');
    const [cnfrmpassword, setCNFRMPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const shoPassword = () => { 
    	setShowPassword(!showPassword)
    };
  return (
    <View style={{ backgroundColor: '#EDEDED', }}>
      <View style={styles.circleOne}>
            </View>
            <View style={styles.circleTwo}>
            </View> 
            <View style={{  }}>
                    <View style={{ padding: 10 }}>
                        <Feather name='arrow-left-circle' size={30} style={{ }} onPress={()=>navigation.replace('Home')} />
                    </View>
                    <View style={{ alignItems: 'center', justifyContent: 'center',}}>
                        <Text style={{ fontWeight: 500, fontSize: 20, color: 'black' }}>
                            Welcome Back!
                        </Text>
                        <Image source={require('../images/youngwhiteboard.png')} />
                    </View>
                </View>
                <View>
    <CustomInput placeholder={'Enter your Email address '} maxlength={11} keyboardType='email-address'  />
    
    <CustomInput placeholder={'Confirm Password'} color={'white'} onChangeText={setCNFRMPassword} maxlength={10} secureTextEntry/>
    <CustomButton title={'Sign In'} color={'#55847A'} onPress={()=>navigation.replace('Dasboard')} />
  </View>
  <Text style={{ textAlign: 'center',margin:50 }}>Dont have an account ? <Text style={{ color: 'rgba(85, 132, 122, 0.97)' }} onPress={()=>navigation.replace('SignUp')}>Sign Up</Text></Text>
    </View>
  )
}

export default SignInScreen

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