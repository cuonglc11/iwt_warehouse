import React from "react";
import { Text, SafeAreaView, ImageBackground, View, TouchableOpacity , Image } from 'react-native'
import CustomTextInput from "../../componet/CustomInput";
import { app_color } from "../../contant/color";
const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../../asset/img/ic_bk1.png')} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10 }}>
                <View style={{ flex: 1 , justifyContent :'center' , alignItems :'center' }} >
                <Image source={require('../../asset/img/logo.png')} style={{height : 300, width:300}} resizeMode='contain'/>

                </View>

                <CustomTextInput placeholder="Tên đăng nhập" setValue={(value) => console.log(111)} />
                <CustomTextInput placeholder="Mật Khẩu" setValue={(value) => console.log(111)} />
                <TouchableOpacity
                  onPress={() => {
                    navigation.replace('forgotpassword')
                  }}
                
                style={{ alignItems: "flex-start", alignSelf: "flex-start", marginStart: 5, marginTop: 10 }}>
                    <Text style={{ color: app_color, fontSize: 14 }} >Quên mật khẩu</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={() => {
                    navigation.replace('Home')

                 } }
                
                style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, height: 50, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                    <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Đăng Nhập </Text>
                </TouchableOpacity>
            
                <View style={{ flex: 1 }} />
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 14 }}>Hotline hỗ trợ</Text>
                    <TouchableOpacity>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 14 }}> 1900 6888</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default LoginScreen