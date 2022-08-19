import React from "react";
import { Image, SafeAreaView, Text, View , FlatList, TouchableOpacity , Alert } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const HomeAccount = ({ navigation }) => {
    const DATA = [
        {
            name :"Thông tin cá nhân" ,
            icon  : require('../../../asset/img/user_ic.png') ,
            navigator :"editaccout"
        },
        {
            name :"Cài đặt ứng dụng" ,
            icon  : require('../../../asset/img/settings.png') ,
            navigator :"application"
        },
        {
            name :"Việc đã lưu" ,
            icon  : require('../../../asset/img/star.png') ,
            navigator :"editaccout"
        },
        {
            name :"Hướng dẫn" ,
            icon  : require('../../../asset/img/chat_1.png') ,
            navigator :"editaccout"
        }
    ]
    const renItem = ({item}) => {
        return(
            <TouchableOpacity
            onPress={() => {
                navigation.replace(item.navigator)  
            }}
            style={{backgroundColor:'#fff' , width : '100%' , height : 50 , paddingBottom :20 ,alignItems :'center' , marginTop : 15 ,flexDirection :"row" , padding : 10}}>
              <Image source={item.icon} style={{height : 20  , width :20 , tintColor:app_color}}/>
              <Text style={{color :"black" , flex : 1 , marginStart : 10  ,  fontSize : 16}}>{item.name}</Text>
              <Image source={require('../../../asset/img/right.png')} style={{height : 20  , width :20 , tintColor :app_color}}/>
            </TouchableOpacity>
        )
    }
    const foodderView = () => (
          <TouchableOpacity
           onPress={() => {
                Alert.alert("Thông Báo", "Bạn Muốn Đăng Xuất",
                    [
                        {
                            text: "Đồng ý",
                            onPress: () => {
                                navigation.replace('login')
                            }
                        },
                        {
                            text: "Huỷ",
                            onPress: () => {
                            }

                        }
                    ]
                )
           }}
          style={{justifyContent : 'center' , alignItems :'center' , marginTop : 20 , borderBottomWidth : 2 , borderBottomColor :"#D3D3D3"}}>
              <Text style={{fontWeight :'bold' , color :" #8C8D8E" ,  fontSize : 20}}>Đăng xuất</Text>
          </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Tài khoản"} />
            <SafeAreaView style={{ padding: 10 }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={require('../../../asset/img/user_cn.png')} style={{

                        height: 80,
                        width: 80
                    }} />
                    <View style={{ margin: 20 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: "#8C8D8E", fontWeight: 'bold', fontSize: 16 }}>Lù Mạnh Cường</Text>
                            <Image source={require('../../../asset/img/medal.png')} style={{
                                marginStart: 10,
                                height: 30,
                                width: 30
                            }} />

                        </View>
                        <Text style={{ color: "#8C8D8E", fontSize: 13 }}>0123456789</Text>
                    </View>
                    <Image source={require('../../../asset/img/qr.png')} style={{

                        height: 30,
                        width: 30 , margin : 30 ,
                        tintColor :app_color
                    }} />
                </View>
                <View style={{marginTop : 40}}>
                    <FlatList
                    data={DATA}
                    renderItem={renItem}
                    ListFooterComponent={foodderView}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default HomeAccount