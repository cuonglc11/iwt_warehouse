import React, { useState } from "react";
import { SafeAreaView, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import CustomTop from "../../componet/CustomTop";
import CustomTextInput from "../../componet/CustomInput";
import SelectList from 'react-native-dropdown-select-list'
import { app_color } from "../../contant/color";

const TroubleHostoryScreen = ({ navigation }) => {
    const [selected, setSelected] = useState("")
    const datas = [
        { key: 1, value: 'manh cuong' },
        { key: 2, value: 'Hoàng' },
        { key: 3, value: 'Thắng' }


    ]
    const dataItem = [
        {
            name: "Bảo dưỡng tháng 5", date: "30/04/2021"
        },
        {
            name: "Bảo dưỡng tháng 6", date: "30/06/2021"
        }

    ]
    const renItem = ({ item }) => {
        return (
            <View style={{ width: '95%', backgroundColor: "#fff", borderBottomColor: "rgba(0, 0, 0, 0.1)", borderBottomWidth: 2, flexDirection: "row", margin: 10, height: 120, borderRadius: 20 }}>
                <Image
                    source={require('../../asset/img/hoadon.png')} style={{ height: 75, alignSelf: 'center', width: 75, margin: 20 }}
                />
                <View style={{ flex: 1, flexDirection: "column", padding: 20 }}>
                    <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>{item.name}</Text>
                    <Text style={{ fontSize: 16, color: 'black', marginTop: 20 }}>{item.date}</Text>


                </View>
            </View>
        )
    }
    const fooderView = () => {
        return (
            <View style={{ flexDirection: 'row', padding: 10 }}>
                <Text style={{ fontSize: 16, color: "black", fontWeight: 'bold' }}>Tổng  : 1000000000000</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.replace("routelist")
                    }}
                    style={{ flex: 1, marginStart: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Kết xuất báo cáo</Text>

                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Lịch sử xử lý sự cố"} onclick={() => {
                navigation.replace('detalInfohome')
            }} />
            <SafeAreaView style={{}}>
                <CustomTextInput placeholder={"Tìm kiếm "} img={require('../../asset/img/seach.png')} />
                <View style={{ flexDirection: "row", margin: 10 }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', margin: 10, marginTop: 16 }}>Lọc</Text>
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
                            placeholder="Tìm kiếm lịch sử"

                        />
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <View style={{ height: 40, width: 40, borderColor: app_color, borderWidth: 2, justifyContent: "center", alignItems: 'center', borderStyle: 'dashed', borderRadius: 10 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>+</Text>
                        </View>
                    </View>

                </View>

                <FlatList
                    data={dataItem}
                    renderItem={renItem}
                    ListFooterComponent={fooderView}
                />
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default TroubleHostoryScreen