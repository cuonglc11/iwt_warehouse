import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const EditAccout = ({ navigation }) => {
    return (
        <SafeAreaView
            style={{ flex: 1 }}
        >
            <CustomTop text={"Thông tin cá nhân"} onclick={() => {
                navigation.replace('acount_home')
            }} />
            <View style={{ padding: 5 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 20, marginTop: 30, flex: 0.9, fontWeight: 'bold' }}>
                        Ảnh Đại diện
                    </Text>
                    <View style={{ flex: 1 , alignItems :'flex-end' }}>
                        <Image source={require('../../../asset/img/user_cn.png')} style={{

                            height: 80,
                            width: 80,
                            marginBottom: 10,
                            marginEnd : 10,
                        }} />
                    </View>

                    <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{

                            height: 25,
                            width: 25,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 5 }} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 16, marginTop: 30, flex: 2, fontWeight: 'bold' }}>
                        Tên
                    </Text>
                    <Text style={{ color: app_color, fontSize: 16, marginTop: 30, flex: 1, fontWeight: 'bold' }}>
                        Lù Mạnh Cường
                    </Text>

                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 10 }} />

                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 16, marginTop: 30, flex: 2, fontWeight: 'bold' }}>
                        Số điện thoại
                    </Text>
                    <Text style={{ color: "#8C8D8E", fontSize: 16, marginTop: 30, marginStart: 10, flex: 1, fontWeight: 'bold' }}>
                        0363487035
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.replace('phoneedit')}
                    style={{ alignItems: 'center', marginStart: 10, marginTop: 30, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{

                            height: 25,
                            width: 25,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 10 }} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 16, marginTop: 30, flex: 2, fontWeight: 'bold' }}>
                        Email
                    </Text>
                    <Text style={{ color: "#8C8D8E", fontSize: 16, marginTop: 30, marginStart: 10, flex: 3, fontWeight: 'bold' }}>
                        lucuong837@gmail.com
                    </Text>
                    <TouchableOpacity 
                      onPress={() => {
                        navigation.replace('emailedit')
                      }}
                    style={{ alignItems: 'center', marginStart: 10, marginTop: 30, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{

                            height: 25,
                            width: 25,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 10 }} />
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ color: 'black', fontSize: 16, marginTop: 30, flex: 2, fontWeight: 'bold' }}>
                        Địa chỉ
                    </Text>
                    <Text style={{ color: "#8C8D8E", fontSize: 16, marginTop: 30, marginStart: 10, flex: 3, fontWeight: 'bold' }}>
                        Số  7 Ngõ  81 Dường Láng Hạ  , Thành công , Hà Nội
                    </Text>
                    <TouchableOpacity
                    onPress={() => {
                        navigation.replace("addedit")
                    }}
                    style={{ alignItems: 'center', marginStart: 10, marginTop: 30, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{
                            height: 25,
                            width: 25,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
                <View style={{ width: '100%', borderColor: "#D3D3D3", borderWidth: 1, marginTop: 10 }} />
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flexDirection: "column", flex: 2 }}>
                        <Text style={{ color: 'black', fontSize: 16, marginTop: 30, fontWeight: 'bold' }}>
                            KPI
                        </Text>
                        <Text style={{ color: '#8C8D8E', fontSize: 10, marginTop: 2, fontWeight: 'bold' }}>
                            (Đánh giá tháng 8)
                        </Text>
                    </View>
                    <View>
                        <Text style={{ color: "#8C8D8E", fontSize: 15, marginTop: 30, marginStart: 10, flex: 3, fontWeight: 'bold' }}>
                            10%
                        </Text>
                    </View>
                    <TouchableOpacity style={{ alignItems: 'center', marginStart: 10, marginTop: 30, justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/pen1.png')} style={{
                            height: 25,
                            width: 25,
                            tintColor: app_color,
                        }} />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}
export default EditAccout