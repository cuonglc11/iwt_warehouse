import React from "react";
import { SafeAreaView, Text, Image, TouchableOpacity, View } from 'react-native'
import { app_color } from "../contant/color";
const CustomTop = ({ text, onclick , setting }) => {
    return (
        <SafeAreaView style={{ width: '100%', height: 80, backgroundColor: app_color, flexDirection: 'row' }}>
            {
                onclick ? (
                    <TouchableOpacity
                        onPress={onclick}

                        style={{ flex: 1 , justifyContent: 'center' }}>
                        <Image source={require('../asset/img/back.png')} style={{ width: 25, height: 25, tintColor: '#fff', alignSelf: 'flex-start', marginStart: 15 }} resizeMode="contain" />

                    </TouchableOpacity>

                ) : null
            }
             <View style={{ flex: 6 , justifyContent :'center' , alignItems :'center'}}>
             <Text style={{ color: '#fff', fontSize: 20, alignSelf: 'center', fontWeight: 'bold' }}>{text}</Text>

             </View>
            {
                setting ? (
                    <TouchableOpacity
                    onPress={setting}

                    style={{ flex: 1, alignItems: 'center', justifyContent: 'center'  }}>
                    <Image source={require('../asset/img/settings.png')} style={{ width: 20, height: 20, tintColor: '#fff', alignSelf: 'flex-start', marginStart: 15 }} />

                </TouchableOpacity>

                ) : null
            }
        </SafeAreaView>
    )
}
export default CustomTop