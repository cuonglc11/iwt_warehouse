import React, { useState } from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import CustomTextInput from "../../../../componet/CustomInput";
import CustomTop from "../../../../componet/CustomTop";
import { app_color } from "../../../../contant/color";
const CreateProject = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Tạo phiếu nhập / xuất"}
                onclick={() => {
                    navigation.replace('project')
                }}
            />
            <ScrollView>
            <View style={{
                    margin: 10,
                    alignSelf: 'center',
                    backgroundColor: '#D3D3D3',
                    width: '94%',
                    height: 50,
                    borderColor: 'rgba(0, 0, 0, 0.13)',
                    flexDirection: 'row',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 20,
                }}>
                    <Text style={{ color: 'black', fontSize: 18, marginStart: 18, fontWeight: 'bold' }}> Mã NVK :  01345673255</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 5, fontWeight: 'bold' }}>
                    Lý do
                </Text>
                <View style={{ margin: 5 }}>
                    <CustomTextInput placeholder={"Lý do"} />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 5, fontWeight: 'bold' }}>
                    Số Lượng
                </Text>
                <View style={{ margin: 5 }}>
                    <CustomTextInput placeholder={"Số lượng"} img={require('../../../../asset/img/Arhive.png')} />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 5, fontWeight: 'bold' }}>
                    Thời gian yêu cầu
                </Text>
                <View style={{ margin: 5 }}>
                    <CustomTextInput placeholder={"Chọn thời gian"}  />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 5, fontWeight: 'bold' }}>
                   Nôi dung
                </Text>
                <View style={{ margin: 5 }}>
                    <CustomTextInput placeholder={"Nhập nội dung (0/50)"} line={5}  />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 5, fontWeight: 'bold' }}>
                    File đính kèm
                </Text>
                <View style={{
                    backgroundColor: '#fff',
                    width: '98%',
                    height: 50,
                    marginTop: 10,
                    borderColor: '#fff',
                    flexDirection: 'row',
                    borderWidth: 1,
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Image source={require('../../../../asset/img/upim.png')} style={{height : 30  , width : 30}}/>
                    <Text style={{ color: app_color, fontSize: 18, fontWeight: 'bold' }}> Chọn ảnh</Text>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', margin : 5 , marginBottom : 10}}>
                    <TouchableOpacity
                        onPress={() => navigation.replace('nuclearproject')}
                        style={{ margin : 5, backgroundColor: app_color, width: 200, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Xác nhận </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CreateProject