import React from "react";
import { SafeAreaView, Text, FlatList, TouchableOpacity, View, Image } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const HomeNotify = ({ navigation }) => {
    const DATA = [
        {
            name: "Tất cả" ,
            
        },
        {
            name: "Thông báo"
        },
        {
            name: "Chưa đọc"
        },
        {
            name: "Hệ thống"
        },
        {
            name: "bảo trì"
        }
    ]
    const Note = [
        {
            name: "Hệ thống",
            icon: require('../../../asset/img/notify_st.png'),
            date: "Thứ sáu, 24/03/2022",
            titile: "Yêu cầu xử lý thành công",
            color: app_color,
            post: 'Yêu cầu số xxxxxx do bạn tiếp nhận và thực hiện đã hoàn thành vào lúc xx/xx/xxxx đã được xác nhận hoàn thành'
        },
        {
            name: "Hệ thống",
            icon: require('../../../asset/img/notify_st.png'),
            date: "Thứ năm, 24/03/2022",
            titile: "Yêu cầu xử lý thành công",
            color: app_color,

            post: 'Yêu cầu số xxxxxx do bạn tiếp nhận và thực hiện đã hoàn thành vào lúc xx/xx/xxxx đã được xác nhận hoàn thành'
        },
        {
            name: "sự cố",
            icon: require('../../../asset/img/line.png'),
            date: "Thứ năm, 24/03/2022",
            color: "#4B5DFF",

            titile: "Yêu cầu xử lý thành công",
            post: 'Yêu cầu số xxxxxx do bạn tiếp nhận và thực hiện đã hoàn thành vào lúc xx/xx/xxxx đã được xác nhận hoàn thành'
        },
        {
            name: "bảo trì",
            icon: require('../../../asset/img/baocao.png'),
            date: "Thứ năm, 24/03/2022",
            color: "#EFA329",

            titile: "Bạn có một công việc cử lý bảo trì cần tiếp nhận",
            post: 'Bạn có một yêu cầu công việc xử lý bảo trì số xxxxxx Vui lòng kiểm tra và tiếp nhận'
        }
    ]
    const notificationItem = ({ item }) => {
        return (
            <View
                style={{
                    margin: 10,
                    backgroundColor: '#fff',
                    height: 170,
                    width: '95%',
                    padding: 10,
                    borderRadius: 20
                }}
            >
                <TouchableOpacity style={{ flexDirection: 'row' }}>
                    <Image source={item.icon} style={{ height: 30, width: 40 , tintColor : item.color }} resizeMode="contain" />
                    <Text style={{ marginTop: 3, flex: 1, marginStart: 10, color: item.color, fontWeight: 'bold', fontSize: 20 }}>{item.name}</Text>
                    <Text style={{ marginTop: 5, marginStart: 10, color: "#8C8D8E", fontWeight: 'bold', fontSize: 12 }}>{item.date}</Text>
                </TouchableOpacity>
                <View style={{ width: '100%', borderColor: "#D3D3D3", marginTop: 10, borderWidth: 1 }} />
                <Text style={{ color: item.color, marginTop: 10, fontWeight: 'bold'  }}>{item.titile}</Text>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13, }}>
                    {item.post}
                </Text>


            </View>
        )
    }
    const rentenItem = ({ item, focused }) => (
        <TouchableOpacity style={{ margin: 10, height: 50, width: 100, backgroundColor: "#D3D3D3", justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#8C8D8E' }}>{item.name}</Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Thông báo"} setting={() => {
                navigation.replace('setting')
            }} />
            <View style={{flex : 1}}>
            <FlatList
                data={DATA}
                horizontal
                renderItem={rentenItem}
            />
            <FlatList
                data={Note}
                renderItem={notificationItem}
            />
            </View>
        </SafeAreaView>
    )
}
export default HomeNotify