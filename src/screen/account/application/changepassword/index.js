import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "../../../../componet/CustomInput";
import CustomTop from "../../../../componet/CustomTop";
import { app_color } from "../../../../contant/color";
const ChangePassWordScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Đổi Mật khẩu"}
                onclick={() => {
                    navigation.replace('application')
                }}
            />
            <SafeAreaView style={{flex : 1 , padding : 15}}>
                    <Text style={{color :'black' , fontSize : 15 , fontWeight :'bold'}}>Mật khẩu cũ</Text>    
                    <CustomTextInput placeholder={"Nhập mật khẩu cũ"} img={require('../../../../asset/img/key_1.png')} />
                    <Text style={{color :'black' , fontSize : 15 , fontWeight :'bold' , marginTop : 10}}>Mật khẩu mới</Text>    
                    <CustomTextInput placeholder={"Nhập mật khẩu mới"} img={require('../../../../asset/img/key_1.png')} />
                    <CustomTextInput placeholder={"Xác nhận mật khẩu"} img={require('../../../../asset/img/key_1.png')} />

     
                    <View style={{ flex: 1, flexDirection: 'row'   }}>
                   <View style={{flex : 1}}/>
                    <TouchableOpacity
                     onPress={() => {
                        navigation.replace('changepasssucce')
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
export default ChangePassWordScreen