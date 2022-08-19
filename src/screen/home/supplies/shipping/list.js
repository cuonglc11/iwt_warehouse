import React, { useState } from "react";
import { SafeAreaView, Text, View , FlatList , Image , TouchableOpacity } from 'react-native'
import CustomTop from "../../../../componet/CustomTop";
import SelectList from 'react-native-dropdown-select-list'
import { app_color } from "../../../../contant/color";
import CustomTextInput from "../../../../componet/CustomInput";
const ListShippingDetallScreen = ({ navigation, route }) => {
    const [selected, setSelected] = useState("")
    const datas = [
        { key: 1, value: 'manh cuong' },
        { key: 2, value: 'Hoàng' },
        { key: 3, value: 'Thắng' }


    ]
    const dataItem = [
        {
            name: "Sắt V 20", date: "Tổng số : 20000"
        },
        {
            name: "Xi Măng MACX", date: "Tổng số : 20000"
        },
        {
            name: "Thép 10 ", date: "Tổng số : 20000"
        }

    ]

    const renItem = ({ item }) => {
        return(
           <View style={{ width : '90%', backgroundColor :"#fff" , borderBottomColor :"rgba(0, 0, 0, 0.1)" , borderBottomWidth : 2 , flexDirection :"row" , margin : 20, height : 120 , borderRadius : 20}}>
                <Image
                source={require('../../../../asset/img/hoadon.png')} style={{height : 75 , alignSelf:'center'  , width : 75 , margin : 20}}
                />
                <View style={{ flex :1 , flexDirection :"column"  , padding : 20}}>
                    <Text style={{fontSize : 16 , color :'black' , fontWeight :'bold'}}>{item.name}</Text>
                    <Text style={{fontSize : 16 , color :'black' , marginTop : 20 }}>{item.date}</Text>


                </View>
           </View>
        )
    }
    const fooderView = () => {
        return (
            <View style={{flexDirection :'row' , padding : 10}}>
                <Text style={{fontSize : 16 , color:"black" , fontWeight :'bold'}}>Tổng  : 1000000000000</Text>
                <TouchableOpacity
                 onPress={()=> {
                    navigation.replace("routelist")
                 }}
                style={{ flex: 1, marginStart: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Kết xuất báo cáo</Text>

                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Danh sách nhập/xuất"}
                onclick={() => {
                    navigation.replace('shipping')
                }}
            />
            <View style={{ padding: 10 }}>
                <CustomTextInput placeholder={"Tìm kiếm tuyến cáp"} img={require('../../../../asset/img/seach.png')} />
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', margin: 10, marginTop: 10 }}>Lọc</Text>
                <View style={{ flex: 3 }}>
                    <SelectList data={datas} setSelected={setSelected}
                        boxStyles={{
                            backgroundColor: 'white',
                            width: '100%',
                            borderColor: 'rgba(0, 0, 0, 0.13)',
                            flexDirection: 'row',
                            borderWidth: 1,
                            borderRadius: 20,
                        }}
                        placeholder="Tìn  kiếm lịch sử"

                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
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
    )
}
export default ListShippingDetallScreen