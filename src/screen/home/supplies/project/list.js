import React from "react";
import { SafeAreaView, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { app_color } from "../../../../contant/color";
const ListProjectScreen = ({ navigation }) => {
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
                    <Image source={require('../../../../asset/img/hc.png')} style={{ height: 30, width: 30, marginTop: 12, marginStart: 10 }} />
                </View>
                <Text style={{ flex: 3, color: '#fff', fontWeight: 'bold', fontSize: 30 }}>Quản lý kho dự án</Text>
            </SafeAreaView>
            <SafeAreaView style={{ flex: 4, backgroundColor: app_color }}>
                <View style={{ flex: 3, backgroundColor: '#fff', borderTopStartRadius: 40, borderTopEndRadius: 40, padding: 10 }}>
                    <ScrollView style={{ padding: 5 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity
                             onPress={()=> {
                                navigation.replace('listprojectdetal' , {
                                    id    : 1
                                })
                             }}
                            style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                                <Image source={require('../../../../asset/img/house-a.png')} style={{ height: 45, width: 45, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' , marginTop : 12 }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Kho </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>dự án  01</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                               onPress={()=> {
                                navigation.replace('listprojectdetal' , {
                                    id    : 2
                                })
                             }}
                            style={{ alignItems: 'center', justifyContent: 'center' , flex:1 }}>
                                <Image source={require('../../../../asset/img/house-a.png')} style={{ height: 45, width: 45, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop : 12  }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Kho</Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>dự án 02</Text>
                                </View>
                            </TouchableOpacity>

                            <TouchableOpacity
                               onPress={()=> {
                                navigation.replace('listprojectdetal' , {
                                    id    : 3
                                })
                             }}
                            style={{ alignItems: 'center', justifyContent: 'center' ,flex : 1 }}>
                                <Image source={require('../../../../asset/img/house-a.png')} style={{ height: 50, width: 50, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop : 12  }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>Kho </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>dự án 03</Text>
                                </View>
                            </TouchableOpacity>
                            
                            <TouchableOpacity
                               onPress={()=> {
                                navigation.replace('listprojectdetal' , {
                                    id    : 4
                                })
                             }}
                            style={{ alignItems: 'center', justifyContent: 'center' , flex : 1 }}>
                                <Image source={require('../../../../asset/img/house-a.png')} style={{ height: 45, width: 45, marginTop: 12, tintColor: app_color }} />

                                <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center', marginTop : 12  }}>
                                    <Text style={{ color: app_color, fontSize: 12 }}>kho </Text>
                                    <Text style={{ color: app_color, fontSize: 12 }}>dự án 04</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        
                    </ScrollView>


                </View>

            </SafeAreaView>
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default ListProjectScreen