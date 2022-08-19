import React, { useState } from "react";
import { SafeAreaView, Text, View, TouchableOpacity, FlatList , Image } from 'react-native'
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
import SelectList from 'react-native-dropdown-select-list'
import { app_color } from "../../../contant/color";

const RouteListScreen = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    const datas = [
        { key: 1, value: 'manh cuong' },
        { key: 2, value: 'Hoàng' },
        { key: 3, value: 'Thắng' }


    ]
    const data1 = [
        { name: "Sơn Trà 1", title: true },
        { name: "Sơn Trà 1", title: false },
        { name: "Sơn Trà 1", title: true },
        { name: "Sơn Trà 1", title: false },
        { name: "Sơn Trà 1", title: false },
        { name: "Sơn Trà 1", title: true },
        { name: "Sơn Trà 1", title: false },



    ]
    const renItem = ({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.replace('editroute')}
            style={{ flexDirection: 'row', marginTop: 20, height: 50, backgroundColor: '#fff', borderBottomColor: "rgba(0, 0, 0, 0.13)", borderBottomWidth: 3 }}>
            <Text style={{ flex: 3, fontSize: 15 , marginTop : 10, marginStart: 10, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ flex: 3, fontSize: 18 ,marginTop : 10, color: item.title ? app_color : "#D3D3D3"  }}>{item.title ? "Đã kích hoạt" :"Chưa kích hoạt"}</Text>
            <Text style={{ flex: 1 }}></Text>
        </TouchableOpacity>
    )
    const fooderView = () => {
        return (
            <View style={{flexDirection :'row' , padding : 10}}>
                <Text style={{fontSize : 16 , color:"black" , fontWeight :'bold'}}>Tổng  : 1000000000000</Text>
                <TouchableOpacity
                 onPress={()=> {
                    navigation.replace("routelist")
                 }}
                style={{ flex: 1, marginStart: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Kết xuất báo cáo</Text>

                </TouchableOpacity>
            </View>
        )
    }
    // writing.png

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Danh sách tuyến cáp"} onclick={() => {
                navigation.replace('trouble')
            }} />
                <CustomTextInput placeholder={"Tìm kiếm tuyến cáp"} img={require('../../../asset/img/seach.png')} />
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Lọc</Text>
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <View style={{ flex: 3 }}>
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
                            placeholder="Chọn đối tượng"

                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ height: 40, width: 40, borderColor: app_color, borderWidth: 2, justifyContent: "center", alignItems: 'center', borderStyle: 'dashed', borderRadius: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
                        </View>
                    </View>

                </View>
                <View style={{ alignSelf: 'center', margin: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '100%', marginTop: 10, backgroundColor: '#fff', borderRadius: 30 }}>
                    <Text style={{ color: 'black', fontSize: 14, marginBottom: 5, marginStart: 10, fontWeight: 'bold' }}>Theo trạng thái  </Text>
                    <View style={{ flex: 1 }}>
                        <SelectList data={datas} setSelected={setSelected}
                            boxStyles={{
                                backgroundColor: 'white',
                                width: '100%',
                                flexDirection: 'row',
                                borderColor: "#fff"
                            }}
                            placeholder="Chọn đối tượng"

                        />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ flex: 2, fontSize: 18 }}>Tên tuyến</Text>
                    <Text style={{ flex: 2, fontSize: 18, marginStart: 12 }}>Trạng thái</Text>
                    <Text style={{ flex: 1 }}></Text>
                </View>
                <FlatList
                    data={data1}
                    renderItem={renItem}
                    ListFooterComponent ={fooderView}
                />
        </SafeAreaView>
    )
}
export default RouteListScreen