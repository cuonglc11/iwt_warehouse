import React, { useState } from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import SelectList from 'react-native-dropdown-select-list'
import CustomTextInput from "../../../componet/CustomInput";
import { app_color } from "../../../contant/color";
const CompletedScreen = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    const datas = [
        { key: 1, value: 'manh cuong' },
        { key: 2, value: 'Hoàng' },
        { key: 3, value: 'Thắng' }


    ]
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Báo Cáo kết quả"}
             onclick={() => {
                navigation.replace('detalword')
             }}
            />
            <ScrollView>
                <Text style={{ margin: 5, fontSize: 16, color: 'black', fontWeight: 'bold' }}>Thông tin yêu cầu xử lý</Text>
                <Text style={{ color: ' #8C8D8E', margin: 5 , fontSize :  14 }}>Mã CV : 11111111111111111</Text>
                <Text style={{ color: ' #8C8D8E', margin: 5 , fontSize : 14 }}>Nhân viên kỹ thuật : KT - Lù Mạnh Cường</Text>
                <View style={{ marginStart: 5, marginTop: 5, marginEnd: 10, width: '97%', borderColor: '#D3D3D3', borderWidth: 1 }} />
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Báo cáo kết quả xử lý
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <SelectList data={datas} setSelected={setSelected}
                        boxStyles={{
                            backgroundColor: 'white',
                            width: '100%',
                            marginTop: 10,
                            borderColor: 'rgba(0, 0, 0, 0.13)',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 20,
                        }}
                        placeholder="Nhập báo cáo kết quả"
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nhập chi tiết báo cáo
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <CustomTextInput placeholder={"Nhập nôi dung(0/50)"} line={10} />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Tải ảnh chứng từ 
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
                    <Text style={{ color: app_color, fontSize: 18, fontWeight: 'bold' }}> Chọn ảnh</Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nhập thông tin 1
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <SelectList data={datas} setSelected={setSelected}
                        boxStyles={{
                            backgroundColor: 'white',
                            width: '100%',
                            marginTop: 10,
                            borderColor: 'rgba(0, 0, 0, 0.13)',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 20,
                        }}
                        placeholder="Nhập thông tin 1"
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nhập thông tin 2
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <SelectList data={datas} setSelected={setSelected}
                        boxStyles={{
                            backgroundColor: 'white',
                            width: '100%',
                            marginTop: 10,
                            borderColor: 'rgba(0, 0, 0, 0.13)',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 20,
                        }}
                        placeholder="Nhập thông tin 2"
                    />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Nhập thông tin ví trí
                </Text>
                <View style={{ marginStart: 5, marginEnd: 5 }}>
                    <CustomTextInput placeholder={"Nhập thông tin ví trí"} img={require('../../../asset/img/pin.png')}  />
                </View>
                <Text style={{ color: 'black', fontSize: 18, margin: 10, fontWeight: 'bold' }}>
                    Tải ảnh chứng từ 
                </Text>
                <TouchableOpacity style={{
                    backgroundColor: '#fff',
                    width: '98%',
                    height: 60,
                    marginTop: 10,
                    borderColor: '#fff',
                    flexDirection: 'row',
                    borderWidth: 1,
                    alignItems :'center',
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                }}
                 onPress={() =>  navigation.replace("supplies")}
                >
                    <Image source={require('../../../asset/img/baocao.png')} style={{width : 30  , height : 30}} />
                    <Text style={{ color: app_color, fontSize: 18, fontWeight: 'bold' , marginTop : 3 }}> Vật tư</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}
export default CompletedScreen