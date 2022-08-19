import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const PhoneEditScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Số điện thoại"}
                onclick={() => {
                    navigation.replace('editaccout')
                }}
            />
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Text style={{ color: "black", fontWeight: 'bold', fontSize: 16, marginStart: 10 }}>Số điện thoại</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{flex : 1}}>
                        <CustomTextInput placeholder={"Nhập số điện thoại"} img={require('../../../asset/img/call.png')} />
                    </View>
                    <TouchableOpacity style={{ width: 70, marginStart: 10, height: 50, alignItems: 'center', justifyContent: 'center', backgroundColor: "#8C8D8E", marginTop: 10, borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 21, fontWeight: 'bold' }}>Gửi</Text>
                    </TouchableOpacity>
                </View>
                <CustomTextInput placeholder={"Nhập mã  OTP"} img={require('../../../asset/img/otp.png')} />
                <View style={{ flex: 1, flexDirection: 'row' , marginTop : 40  }}>
                   <View style={{flex : 1}}/>
                    <TouchableOpacity
                     onPress={() => {
                        navigation.replace('changesuccess')
                     }}
                    
                    style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, flex: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 20  , height : 50}}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Thay đổi </Text>
                    </TouchableOpacity>
                   <View style={{flex : 1}}/>

                </View>
            </SafeAreaView>

        </SafeAreaView>
    )
}
export default PhoneEditScreen