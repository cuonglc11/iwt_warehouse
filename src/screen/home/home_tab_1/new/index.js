import React from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import CustomTop from "../../../../componet/CustomTop";
import CustomTextInput from "../../../../componet/CustomInput";
import { app_color } from "../../../../contant/color";
const NewScreen = ({ navigation }) => {
    const data =  [
        {
            name :  "tin tức 1"
        },
        {
            name :  "tin tức 2"
        },
        {
            name :  "tin tức 4"
        }
    ]
    const renItem = ({item}) => (
        <TouchableOpacity
        onPress={() => {
            navigation.replace('newdetal')
         }}
        
        style={{ height: 200,borderRadius : 15, width : '95%' , margin : 10 ,alignItems :'center' , justifyContent :'center'  , marginBottom : 10, backgroundColor: "#E2E2E2" }}>
                 <Text>{item.name}</Text>
        </TouchableOpacity>
    )
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Tin tức - thông báo"} onclick={() => {
                navigation.replace('HomeTab2')
            }} />
              <View style={{padding : 10}}>
              <CustomTextInput placeholder={"Tìm kiếm"} img={require('../../../../asset/img/seach.png')} />
              </View>
              <View style={{padding : 10  ,  flexDirection :'row'}}>
                   <Text style={{flex : 2  , fontWeight :'bold' , color :'black' , fontSize : 15}}>Mục tin tức</Text>
                   <Text style={{flex : 1   , fontWeight :app_color , color :'black' , fontSize : 12}}>Xem thêm</Text>

              </View>
              <FlatList data={data}
                renderItem={renItem}
              />
        </SafeAreaView>
    )
}
export default NewScreen