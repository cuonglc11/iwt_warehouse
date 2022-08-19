import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { app_color } from "../../../../contant/color";
const ShippingScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, backgroundColor: app_color }}>
            <SafeAreaView style={{ flex: 2, paddingStart: 20 }}>
                <View style={{ flexDirection: 'row', flex: 2, marginTop: 20 }}>
                    <Image source={require('../../../../asset/img/user_cn.png')} style={{ height: 70, width: 70 }} />
                    <View style={{ flexDirection: 'column', marginTop: 10, marginStart: 10 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }}>Lù Mạnh Cường</Text>
                        <Text style={{ color: '#fff', fontSize: 12, marginTop: 6 }}>MSNV: 123321</Text>
                    </View>
                    <Image source={require('../../../../asset/img/medal.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 10 }} />
                </View>
                <Text style={{ flex: 3, color: '#fff', fontWeight: 'bold', fontSize: 30 }}>Quản lý kho vận hành</Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 4, backgroundColor: app_color }}>
                <View style={{ flex: 3, backgroundColor: '#fff', borderTopStartRadius: 40, borderTopEndRadius: 40, padding: 10 }}>
                    <ScrollView style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                            onPress={() => {
                                
                                navigation.replace("supplieslist")
                                }}
                            style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                                <Image source={require('../../../../asset/img/group.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop : 12 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Quản lý </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>nhập / xuất kho</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' , flex:1 }}>
                                <Image source={require('../../../../asset/img/list.png')} resizeMode="contain" style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop : 12  }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Danh sách</Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>yêu cầu</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                             onPress={() => {
                                navigation.replace('listsupplies')
                             }}
                            style={{ alignItems: 'center', justifyContent: 'center' ,flex : 1 }}>
                                <Image source={require('../../../../asset/img/ic_vt.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop : 12  }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Danh sách </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>vật tư</Text>
                                </View>
                            </TouchableOpacity>
                            
                       <View style={{flex :1}}/>
                        </View>
                        <View style={{ flex: 1, marginTop: 10, backgroundColor: "#D3D3D3", height: 1 }} />
                        <View style={{ flexDirection: 'row' , marginStart : 20 }}>
                            <TouchableOpacity
                             onPress={() =>{
                                navigation.replace('createshipping')
                              }}
                            
                            style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../../../asset/img/penput.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop : 12 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Tạo phiếu </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>nhập/xuất</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                              onPress={() =>{
                                navigation.replace('listmaintenance')
                              }}
                            style={{ alignItems: 'center', justifyContent: 'center' , marginStart : 30 }}>
                                <Image source={require('../../../../asset/img/baocao.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop :12 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Danh sách </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>yêu cầu</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity
                              onPress={() =>{
                                navigation.replace('listmaintenance')
                              }}
                            style={{ alignItems: 'center', justifyContent: 'center' , marginStart : 30 }}>
                                <Image source={require('../../../../asset/img/ic_bd.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop :12 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Biểu đồ</Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}></Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, marginTop: 10, backgroundColor: "#D3D3D3", height: 1 }} />
                        <View style={{ flexDirection: 'row' , marginStart : 20 }}>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image source={require('../../../../asset/img/settings.png')} style={{ height: 30, width: 30, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop : 10 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Quản trị</Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}></Text>
                                </View>
                            </TouchableOpacity>

                         

                        </View>
                        <View style={{ flex: 1, marginTop: 10, backgroundColor: "#D3D3D3", height: 1 }} />

                    </ScrollView>


                </View>

            </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default ShippingScreen