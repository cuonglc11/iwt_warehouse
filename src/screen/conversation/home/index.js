import React, { useState } from "react";
import { Text, SafeAreaView, View, TouchableOpacity, FlatList, Image } from "react-native";
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const HomeScreen1 = ({ navigation }) => {
    const [showScreen, setShowScreen] = useState(1)
    const DATA = [
        {
            name: "Nguyễn Văn A",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn B",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn C",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn D",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn E",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn H",
            onclick: () => {

            }
        }
    ]
    const DATA_1 = [
        {
            name: "Nguyễn Văn  A",
            title: "xin chào",
            onclick: () => {

            }
        },
        {
            name: "Nguyễn Văn  B",
            title: "xin chào ! Xin Chao",
            onclick: () => {

            }
        }
    ]
    const rendenItem = ({ item }) => (
        <TouchableOpacity
    
        style={{ marginStart: 10, alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../asset/img/user_cn.png')}
                style={{ width: 80, height: 80 }}
            />
            <Text style={{ color: app_color, fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{ color: 'black', fontSize: 10  , marginBottom : 10}}>0123456677</Text>
        </TouchableOpacity>
    )
    const rendenItem_1 = ({ item }) => {
        return (
            <TouchableOpacity
            onPress={() => {
                navigation.replace('conver' , {
                    id :  item.name
                })
            }}
            
            
            style={{ flexDirection: 'row' }}>
                <Image source={require('../../../asset/img/user_cn.png')}
                    style={{ width: 70, height: 70, alignSelf: 'center' }}
                />
                <View style={{ marginStart: 10, marginVertical: 10, flex: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18, flex: 2 }}>{item.name}</Text>
                        <View style={{ backgroundColor: 'red', height: 20, width: 20, justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>4</Text>
                        </View>


                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, flex: 1 }}>{item.title}</Text>
                        <View style={{ justifyContent: 'center', alignItems: 'center', borderRadius: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold' }}>14:00</Text>
                        </View>


                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    const Covers = () => {
        return (
            <View style={{ flex: 1, padding: 3 }}>
                <CustomTextInput placeholder="Tìm Kiếm(Tên,SĐT...)" img={require('../../../asset/img/seach.png')} />
                <Text style={{ marginTop: 5, fontWeight: 'bold', color: 'black', fontSize: 18 }} >
                    Danh sách nhân viên Khu vực
                </Text>
                <View>
                    <FlatList data={DATA}
                        horizontal
                        renderItem={rendenItem}
                    />
                </View>
                <Text style={{ marginTop: 5, fontWeight: 'bold', color: 'black', fontSize: 18 }} >
                    Trò chuyện gần nhất
                </Text>
                <View style={{ marginTop: 10 }}>
                    <FlatList data={DATA_1} renderItem={rendenItem_1} />
                </View>
            </View>
        )
    }
    const DATA_3 = [
        {

            title: "Xử lý sự cố",
            date: "24/03/2022",
            post_1: "Xử lý sự cố số  01 xxxxxxxxxxxxxx",
            post_2: "Xử lý sự cố xxx",
            post_3: "Thời gian quá tải",
            post_4: "xxxxx"
        }
    ]
    const [datashow, setDataShow] = useState(false)

    const rendenItem_2 = ({ item }) => {
        return (
            <View>
                {
                    datashow ? (
                        <View style={{ flexDirection: "row", backgroundColor: '#FFFFFF', flex: 1, borderRadius: 20, marginTop: 10, padding: 10 }}>
                            <Image
                                source={require('../../../asset/img/user_cn.png')} style={{ width: 50, height: 50 }}
                            />
                            <View style={{ marginStart: 10, flex: 1 }}>
                                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', }}>{item.title}</Text>
                                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>{item.post_2}</Text>
                                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>{item.post_3}</Text>
                                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>{item.post_4}</Text>


                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: 'black', fontSize: 12, flex: 2 }}>{item.date}</Text>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    onPress={() => setDataShow(false)}

                                >
                                    <Text style={{ color: app_color, fontSize: 12 }}>Thu gọn </Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                    ) : (
                        <View style={{ flexDirection: "row", backgroundColor: '#FFFFFF', flex: 1, borderRadius: 20, marginTop: 10, padding: 10 }}>
                            <Image
                                source={require('../../../asset/img/user_cn.png')} style={{ width: 50, height: 50 }}
                            />
                            <View style={{ marginStart: 10, flex: 1 }}>
                                <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', }}>{item.title}</Text>
                                <Text style={{ color: 'black', fontSize: 10, fontWeight: 'bold', }}>{item.post_1}</Text>
                            </View>
                            <View style={{ marginTop: 5 }}>
                                <Text style={{ color: 'black', fontSize: 12, flex: 2 }}>{item.date}</Text>
                                <View style={{ flex: 1 }} />
                                <TouchableOpacity
                                    onPress={() => setDataShow(true)}
                                >
                                    <Text style={{ color: app_color, fontSize: 12 }}>Xem Thêm </Text>
                                </TouchableOpacity>
                            </View>

                        </View>

                    )
                }
            </View>
        )
    }
    const Request = () => {
        return (
            <View style={{ flex: 1, padding: 5 }}>
                <View>
                    <FlatList data={DATA_3}
                        renderItem={rendenItem_2}
                    />

                </View>
            </View>
        )
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text="Trò Chuyện" />
            <SafeAreaView style={{ flex: 1, padding: 5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        activeOpacity={10}
                        onPress={() => setShowScreen(1)}

                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: app_color, borderBottomWidth: showScreen == 1 ? 3 : 0 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
                            Trò Chuyện
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        activeOpacity={10}

                        onPress={() => setShowScreen(2)}

                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center', borderBottomColor: app_color, borderBottomWidth: showScreen == 2 ? 3 : 0 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, marginBottom: 10 }}>
                            Yêu Cầu
                        </Text>
                    </TouchableOpacity>
                </View>
                {
                    showScreen == 1 ? (
                        <Covers />
                    ) : (
                        <Request />
                    )
                }
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default HomeScreen1