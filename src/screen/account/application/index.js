import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View, Image } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const ApplicationScreen = ({ navigation }) => {
    const [showSreen, setShowSreen] = useState(1)
    const Covers = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: 'row', borderBottomColor: "#D3D3D3", borderBottomWidth: 1, paddingBottom: 15 }}>
                    <Text style={{ fontSize: 16, flex: 1, color: 'black', fontWeight: 'bold' }}>Tên Tài khoản</Text>
                    <Text style={{ fontSize: 16, color: app_color, fontWeight: 'bold' }}>Lù Mạnh Cường</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, borderBottomColor: "#D3D3D3", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, flex: 1, color: 'black', fontWeight: 'bold' }}>Mật Khẩu</Text>
                    <Text style={{ fontSize: 16, color: app_color, fontWeight: 'bold' }}>*********</Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace('changepass')
                        }}
                        style={{ alignItems: 'center', marginStart: 10, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{
    
                            height: 20,
                            width: 20,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, borderBottomColor: "#D3D3D3", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, flex: 1, color: 'black', fontWeight: 'bold' }}>Ngôn ngữ</Text>
                    <Text style={{ fontSize: 16, color: app_color, fontWeight: 'bold' }}>Tiếng việt</Text>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={{ alignItems: 'center', marginStart: 10, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{
    
                            height: 20,
                            width: 20,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 15, borderBottomColor: "#D3D3D3", borderBottomWidth: 1, paddingBottom: 10 }}>
                    <Text style={{ fontSize: 16, flex: 1, color: 'black', fontWeight: 'bold' }}>Thông tin ứng dụng</Text>
                    <TouchableOpacity
                        onPress={() => {
                        }}
                        style={{ alignItems: 'center', marginStart: 10, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/ud.png')} style={{
    
                            height: 20,
                            width: 20,
                            tintColor: app_color,
                        }}
    
                            resizeMode="contain" />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    const Request = () => {
        return (
            <View style={{ marginTop: 20 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 15, flex: 0.9, fontWeight: 'bold' }}>
                        Ảnh Đại diện
                    </Text>
                    <View style={{ flex: 1, alignItems: 'flex-end' }}>
                        <Image source={require('../../../asset/img/user_cn.png')} style={{
    
                            height: 50,
                            width: 50,
                            marginBottom: 10,
                            marginEnd: 10,
                        }} />
                    </View>
                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 5 }} />
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 10, flex: 2, fontWeight: 'bold' }}>
                            Tên
                        </Text>
                        <Text style={{ color: app_color, fontSize: 16, marginTop: 10, flex: 1, fontWeight: 'bold' }}>
                            Lù Mạnh Cường
                        </Text>
    
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 20, flex: 1, fontWeight: 'bold' }}>
                            Email
                        </Text>
                        <Text style={{ color: app_color, fontSize: 16, marginTop: 20, flex: 1, fontWeight: 'bold' }}>
                            lucuong837@gmail.com
                        </Text>
    
                    </View>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 20, flex: 1, fontWeight: 'bold' }}>
                            Số điện thoại
                        </Text>
                        <Text style={{ color: app_color, fontSize: 16, marginTop: 20, marginStart: 10, flex: 1, fontWeight: 'bold' }}>
                            0363487035
                        </Text>
                        </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Cài đặt ứng dụng"}
                onclick={() => {
                    navigation.replace('acount_home')
                }}
            />
            <SafeAreaView style={{ flex: 1, padding: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        activeOpacity={10}
                        onPress={() => setShowSreen(1)}

                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: app_color, borderBottomWidth: showSreen == 1 ? 3 : 0 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
                            Bảo mật thông tin
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={10}

                        onPress={() => setShowSreen(2)}

                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: app_color, borderBottomWidth: showSreen == 2 ? 3 : 0 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16, marginBottom: 10 }}>
                            Thông tin cá nhân
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    showSreen == 1 ? (
                        <Covers />
                    ) : (
                        <Request />
                    )
                }
            </SafeAreaView>
        </SafeAreaView>
    )
}

export default ApplicationScreen