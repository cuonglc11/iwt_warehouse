import React from "react";
import { SafeAreaView, Text, FlatList, View, Image, TouchableOpacity } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const SuppliesScreen = ({ navigation }) => {
    const DATA = [
        {
            name: "vật tư 1",
            sl: 10,
            chungloai: 1000000
        },
        {
            name: "vật tư 2",
            sl: 10,
            chungloai: 1000000
        },
        {
            name: "vật tư 2",
            sl: 10,
            chungloai: 1000000
        }
    ]
    const renderItem = ({ item }) => (
        <View style={{ flexDirection: 'row', marginTop: 10, padding: 20, borderBottomColor: ' rgba(0, 0, 0, 0.13)', borderBottomWidth: 2 }}>
            <View>
                <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 18 }}>{item.name}</Text>
                <Image style={{ marginTop: 20 }} source={require('../../../asset/img/vattu.png')} />
            </View>
            <View style={{ flexDirection: 'column' }}>
                <Text style={{ marginTop: 50, color: 'black', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>Số  lương :             {item.sl}</Text>
                <Text style={{ marginTop: 20, color: 'black', fontSize: 16, fontWeight: 'bold', marginStart: 20 }}>chủng loại:             {item.chungloai}</Text>
                <TouchableOpacity
                    onPress={() => navigation.replace('request')}
                    style={{ marginStart: 5, marginTop: 20, marginVertical: 10, alignSelf: 'flex-end', backgroundColor: app_color, width: 150, height: 50, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} > Chi tiết </Text>
                </TouchableOpacity>

            </View>
        </View>
    )
    const fooderView = () => (
        <View>
            <TouchableOpacity
                onPress={() => navigation.replace('location')}
                style={{ marginStart: 5, alignSelf: 'center', marginVertical: 10, backgroundColor: app_color, width: 200, height: 40, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }} > Thêm vật tư </Text>

            </TouchableOpacity>
         <Text style={{marginStart : 20  , color :'black' , fontSize : 16 , fontWeight :'bold'}}>Tổng  : 10000000000</Text>

        </View>

    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Sử dụng vật tư"} />
            {/* <SafeAreaView> */}
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    ListFooterComponent={fooderView}
                />
        
            {/* </SafeAreaView> */}
        </SafeAreaView>
    )
}
export default SuppliesScreen