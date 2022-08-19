import React from "react";
import { View, SafeAreaView, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const AcceptanceScreen  =  ({navigation}) => {
    return (
        <SafeAreaView style={{flex : 1}}>
             <CustomTop text={"Nghiệm thu"} onclick={ () =>{
                navigation.replace('location')
             }}/>
             <ScrollView style={{ backgroundColor: "#F5F5F5"  }}>
                <Text style={{ color: 'black', fontSize: 14, fontWeight: 'bold' , margin: 10 }}>Thông tin yêu cầu xử lý</Text>
                <Text style={{ fontSize: 16, marginTop: 10, color: "#8C8D8E" , margin:10 }}>Mã CV : 12356666666666</Text>
                <Text style={{ fontSize: 16, marginTop: 10, color: "#8C8D8E" , margin:10 }}>Nhân viên kỹ thuật : KT - Nguyễn Văn A</Text>
                <View style={{ marginTop: 10, flexDirection: 'row' , margin:10 }}>
                    <Text style={{ fontSize: 18, color: "#8C8D8E" }}>Tình Trạng : </Text>
                    <Text style={{ fontSize: 18, color: app_color, fontWeight: 'bold' }}>Đã xử lý - chưa nghiệm thu </Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Thông tin</Text>
                <View style={{ margin: 10, flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, color: "#8C8D8E" }}>Tuyến cáp : Sơn Trà 01 </Text>
                    <TouchableOpacity
                     onPress={() => navigation.replace('detalInfohome') }
                     
                     >
                        <Text style={{ fontSize: 16, color: app_color, fontWeight: 'bold' }}>Chi tiết thông tin </Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 16, margin: 10, color: "#8C8D8E", fontWeight: 'bold' }}>Thời gian yêu cầu: 10:30 - 08/08/2022</Text>
                <Text style={{ fontSize: 16, margin: 10, color: "#8C8D8E" }}>Yêu cầu xử lý : 120 phút</Text>
                <View style={{ borderBottomColor: "rgba(0, 0, 0, 0.13)", margin: 10, padding: 10, borderBottomWidth: 4, backgroundColor: "#fff" }}>
                    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>Thông tin sự cố </Text>
                    <View style={{ marginTop: 10, flexDirection: 'row' }}>

                        <Image source={require('../../../asset/img/cap.png')} style={{ height: 100, width: 150 }} />
                        <TouchableOpacity>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginStart: 20 }}>Mô tả sự cố : Phát sinh sự cố </Text>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginStart: 20 }}>Theo mô tả ,lỗi phát sinh tại </Text>
                            <Text style={{ fontSize: 12, color: 'black', fontWeight: 'bold', marginStart: 20 }}>xxxxxxxxxxxxxxxxx </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ margin: 10, borderColor: 'rgba(0,0,0,0.13)', borderWidth: 2 }} />
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ color: 'black', marginStart: 10, fontSize: 12, fontWeight: 'bold' }}>File đính kèm  : </Text>
                        <Text style={{ color: app_color, marginStart: 10, fontSize: 12, fontWeight: 'bold' }}>Sự cố Sơn Trà.pdf </Text>

                    </View>

                </View>
                <View style={{ borderBottomColor: "rgba(0, 0, 0, 0.13)", margin: 10, padding: 10, flexDirection: "row", backgroundColor: "#fff" }}>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Mã CV </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop : 10}}>Thời gian yêu cầu </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E' , marginTop :10 }}>Thời gian tiếp nhận </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E' , marginTop : 10}}>Thời gian hoàn thành </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>22032022FVB0Y5 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                    </View>
                </View>
                <View style={{flexDirection :'row' , marginTop : 10 , marginBottom : 20}}>
                    <TouchableOpacity style={{flex : 1 , backgroundColor:"#fff" , padding : 10 , flexDirection :'row' , alignItems :'center' , justifyContent :'center'}}>
                            <Image source={require('../../../asset/img/writing.png')} style={{tintColor : app_color , height : 20  , width : 20}}/>
                            <Text style={{color : app_color , fontSize : 12 , fontWeight : 'bold' , marginStart : 10}}>Từ chối</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex : 1 , backgroundColor:"#fff" , marginStart : 10 , padding : 10 , flexDirection :'row' , alignItems :'center' , justifyContent :'center'}}>
                            <Image source={require('../../../asset/img/writing.png')} style={{tintColor : app_color , height : 20  , width : 20}}/>
                            <Text style={{color : app_color , fontSize : 12 , fontWeight : 'bold' , marginStart : 10}}>Tiếp nhận</Text>
                   
                    </TouchableOpacity>
               </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default AcceptanceScreen