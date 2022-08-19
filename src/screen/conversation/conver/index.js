import React, { useState } from "react";
import {SafeAreaView , Text, View , FlatList, Image} from 'react-native'
import CustomTop from "../../../componet/CustomTop";
const ConverAccout  =  ({navigation , route}) => {
    const {goBack} = navigation;
    console.log(goBack  , 'goBack' );
    const [chatHistory ,  setChatHistory] = useState([
        {
            url  : require('../../../asset/img/user_cn.png'),
            isSender  : true,
            timestamp  :1641654238000 ,
            messenger  : "Xin Chào"


        },
        {
            url  : require('../../../asset/img/user_cn.png'),
            isSender  : false,
            messenger  : "How are you",
            timestamp  :1641654238000,


        }
    ])
    const rendenItem = ({item}) => {
        return (
            <View style={{padding : 15}}>
              {
                item.isSender ? (
                        <View style={{flexDirection :'row'}}>
                            <Image source={require('../../../asset/img/user_cn.png')} style={{
                                   height : 80  , width : 80 

                            }}/>
                            <View style={{flexDirection :'column' , flex : 0.5}}>
                                <View
                                style={{backgroundColor : "#FFF" , marginTop : 10, marginStart : 13  , borderRadius : 20 }}
                                >
                                    <Text>
                                        Xin chào
                                    </Text>
                                </View>
                                <View
                                style={{backgroundColor : "#FFF" , height : 60 , marginTop : 10, marginStart : 13 , width : 200 , justifyContent :"center", borderRadius : 20 }}
                                >
                                    <Text style={{marginStart : 12}}>
                                        Xin chào , xin chào 
                                    </Text>
                                </View>
                            </View>
                        </View>
                ) :  (
                    <View></View>
                )
              }
            </View>
        )
    }
    // console.log();
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomTop text={route.params.id} onclick={() => {
                navigation.replace('Home')
                // goBack()
            }}/>
            <FlatList
            data={chatHistory}
            renderItem={rendenItem}
/>

        </SafeAreaView>
    )
}
export default ConverAccout