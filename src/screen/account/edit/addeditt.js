import React from "react";
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import CustomTextInput from "../../../componet/CustomInput";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const AddEditScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Địa chỉ"}
                onclick={() => {
                    navigation.replace('editaccout')
                }}
            />
            <SafeAreaView style={{ flex: 1, padding: 10 }}>
                <Text style={{ color: "black", fontWeight: 'bold', fontSize: 16, marginStart: 10 }}>Địa chỉ</Text>
                    <View>
                        <CustomTextInput placeholder={"Địa chỉ"} img={require('../../../asset/img/map_1.png')} />
                    </View>
               
                <View style={{ flex: 1, flexDirection: 'row'   }}>
                   <View style={{flex : 1}}/>
                    <TouchableOpacity
                     onPress={() => {
                        navigation.replace('changesuccess')
                     }}
                    
                    style={{ marginStart: 5, marginVertical: 10, backgroundColor: app_color, flex: 2, justifyContent: 'center', alignItems: 'center', borderRadius: 20  , height : 50}}>
                        <Text style={{ color: '#fff', fontSize: 25, fontWeight: 'bold' }} > Thay đổi </Text>
                    </TouchableOpacity>
                   <View style={{flex : 1}}/>

                </View>
            </SafeAreaView>

        </SafeAreaView>
    )
}
export default AddEditScreen