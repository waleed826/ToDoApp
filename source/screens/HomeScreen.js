import { StyleSheet, Text, View, Image, Button, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'


const HomeScreen = ({navigation}) => {
    const { height, width } = Dimensions.get('screen');
    return (
        <View style={{ flex: 1, backgroundColor: '#EDEDED' }}>

            <View style={styles.circleOne}>
            </View>
            <View style={styles.circleTwo}>

            </View>
            <View style={styles.viewOne}>

                <Image source={require('../images/manandcat.png')} />
                {/* <Button title='Get Started' color={'#55847A'}/> */}
                <View>

                    <Text style={styles.headTag}>Get things done with TODo

                    </Text>
                    <Text style={styles.textLines}>
                        Lorem ipsum dolor sit amet,{'\n'}
                        consectetur adipisicing. Maxime,{'\n'}
                        tempore! Animi nemo aut atque,{'\n'}
                        deleniti nihil dolorem repellendus.
                    </Text>
                </View>
                <TouchableOpacity style={styles.touch} onPress={()=>navigation.navigate('SignUp')}>
                    <Text style={styles.touchtText} >Get Started</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    viewOne:{ 
        alignItems: 'center', 
        flex: 1, 
        justifyContent: 'space-evenly' },
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
    headTag: {
        color: '#000',
        textAlign: 'center',
        // font-family: 'Poppins';
        fontSize: 20,
        fontWeight: '500',
        padding: 10,
    },
    textLines:{ 
        textAlign: 'center', 
        padding: 10, 
        color: 'rgba(0, 0, 0, 0.74)' 
    },
    touch:{ 
        backgroundColor: '#55847A', 
        padding: 10, 
        width: '65%', 
        opacity: 9 
    },
    touchtText:{
        textAlign:'center',
        color:'white'
    }

})