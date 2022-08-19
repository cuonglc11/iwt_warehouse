import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import CustomTextInput from "../../componet/CustomInput";
import CustomTop from "../../componet/CustomTop";
import { app_color } from "../../contant/color";
const ForgotPassScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text="Quên mật khẩu" />
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Email</Text>
                <CustomTextInput placeholder="Nhập Email" img={require('../../asset/img/ic_email.png')} />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Số Diện Thoại</Text>

                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 4 }}>
                        <CustomTextInput placeholder="Nhập số điện thoại" img={require('../../asset/img/telephone.png')} />

                    </View >
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={{ width: 60, marginStart: 10, height: 40, alignItems: 'center', justifyContent: 'center', backgroundColor: "#8C8D8E", marginTop: 6, borderRadius: 10 }}>
                            <Text style={{ color: '#fff', fontSize: 21, fontWeight: 'bold' }}>Gửi</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CustomTextInput placeholder="Nhập OTP" img={require('../../asset/img/check.png')} />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', marginTop: 10 }}>Mật Khẩu Mới</Text>
                <CustomTextInput placeholder="Nhập mật khẩu mới" img={require('../../asset/img/key.png')} />
                <CustomTextInput placeholder="Xác nhận mật khẩu" img={require('../../asset/img/key.png')} />
                <View style={{ flex: 1, flexDirection: 'row' , marginTop : 40  }}>
                    <TouchableOpacity
                     onPress={() => {
                        
                     }}
                    style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, flex: 1 , height : 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Huỷ bỏ </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                     onPress={() => {
                        navigation.replace('forgotsuccer')
                     }}
                    
                    style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, flex: 1, justifyContent: 'center', alignItems: 'center', borderRadius: 20  , height : 50}}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Tiếp Tục </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 1 }} />
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default ForgotPassScreen