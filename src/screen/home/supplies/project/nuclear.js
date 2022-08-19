import React from "react";
import { View, SafeAreaView, ScrollView, Text, TouchableOpacity , Image, Alert } from "react-native";
import CustomTop from "../../../../componet/CustomTop";
import { app_color } from "../../../../contant/color";
const NuclearScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex:1}}>
            <CustomTop text={"Xác nhận duyệt phiếu"} onclick={() => {
                navigation.replace('createproject')

            }} />
            <ScrollView style={{ backgroundColor: "#F5F5F5" }}>
                <Text style={{ color: 'black', fontSize: 16, fontWeight: 'bold', margin: 10 }}>Thông tin yêu cầu xử lý</Text>
                <Text style={{ fontSize: 14, marginTop: 10, color: "#8C8D8E", margin: 10 }}>Mã CV : 12356666666666</Text>
                <Text style={{ fontSize: 14, marginTop: 10, color: "#8C8D8E", margin: 10 }}>Nhân viên kỹ thuật : KT - Nguyễn Văn A</Text>
                <View style={{ marginTop: 10, flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 14, color: "#8C8D8E" }}>Tình Trạng : </Text>
                    <Text style={{ fontSize: 14, color: app_color, fontWeight: 'bold' }}>Đang thực hiện </Text>
                </View>
                <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold', margin: 10 }}>Thông tin</Text>
                <Text style={{ fontSize: 16, color: "#8C8D8E", margin: 10 }}>Xuất kho vật tư </Text>
                <Text style={{ fontSize: 16, color: "#8C8D8E", margin: 10 }}>Thời gian yêu cầu : 10:30  - 08/08/2022 </Text>
                <Text style={{ fontSize: 16, color: "#8C8D8E", margin: 10 }}>Kho đề xuất : Kho dự án 01 </Text>
                <TouchableOpacity
                  onPress={() => {
                    navigation.replace('listsupplies')
                 }}
                    style={{ alignItems: 'center', justifyContent: 'center', margin: 5 }}>
                    <Text style={{ fontSize: 16, color: app_color, fontWeight: 'bold', margin: 10 }}>Chi tiết thông tin vật tự trong kho </Text>

                </TouchableOpacity>

                <View style={{ flexDirection: 'row', backgroundColor: "#fff", borderBottomColor: "rgba(0, 0, 0, 0.13)", borderBottomWidth: 2, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: 'black', fontSize: 12, fontWeight: 'bold' }}>File đính kèm  : </Text>
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold' }}>Sự cố Sơn Trà.pdf </Text>
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', flex: 0.2 }}></Text>


                </View>
                <View style={{ borderBottomColor: "rgba(0, 0, 0, 0.13)", margin: 10, padding: 10, flexDirection: "row", backgroundColor: "#fff" }}>
                    <View style={{ flex: 3 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>Mã CV </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>Thời gian yêu cầu </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>Thời gian tiếp nhận </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>Thời gian hoàn thành </Text>
                    </View>
                    <View style={{ flex: 2 }}>
                        <Text style={{ fontSize: 14, color: 'black', fontWeight: 'bold' }}>22032022FVB0Y5 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                        <Text style={{ fontSize: 14, color: '#8C8D8E', marginTop: 10 }}>08/08/2O22 10:30 </Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                    <TouchableOpacity
                    onPress={() => {
                        Alert.alert("Thông Báo", "Bạn Muốn huỷ phê duyệt",
                        [
                            {
                                text: "Đồng ý",
                                onPress: () => {
                                    navigation.replace('createproject')
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
                    style={{ flex: 1, backgroundColor: "#fff", padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../../asset/img/writing.png')} style={{ tintColor: "#8C8D8E", height: 20, width: 20 }} />
                        <Text style={{ color: "#8C8D8E", fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Từ chối</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 1, backgroundColor: "#fff", marginStart: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../../asset/img/Note.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                        <View style={{ flexDirection: 'column' }}>
                            <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Duyệt</Text>

                        </View>


                    </TouchableOpacity>
                
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default NuclearScreen