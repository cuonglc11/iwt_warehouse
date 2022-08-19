import React, { useState } from "react";
import { SafeAreaView, Text, View, Switch } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
const SettingScreen = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);



    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);




    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Cài Đặt thông tin "} onclick={() => {
                navigation.replace('homenotify')
            }} />
            <SafeAreaView style={{ padding: 10 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ fontSize: 18 , flex : 1, color: "black", fontWeight: 'bold' }}>Thông báo</Text>
                    <Switch
                        trackColor={{ false: "#8C8D8E", true: app_color }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}

                        value={isEnabled}
                    />
                </View>
                <View style={{width :"100%" , borderColor :'#D3D3D3' , borderWidth : 1 , marginTop : 10}}/>
                <View style={{ flexDirection: "row"  , marginTop : 15}}>
                    <Text style={{ fontSize: 18 , flex : 1, color: "black", fontWeight: 'bold' }}>Thông báo hệ thống</Text>
                    <Switch
                        trackColor={{ false: "#8C8D8E", true: app_color }}
                        thumbColor={"#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch1}
                        
                        value={isEnabled1}
                    />
                </View>
                <View style={{ flexDirection: "row"  , marginTop : 15}}>
                    <Text style={{ fontSize: 18 , flex : 1, color: "black", fontWeight: 'bold' }}>Thông báo sự cố</Text>
                    <Switch
                        trackColor={{ false: "#8C8D8E", true: app_color }}
                        thumbColor={"#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch2}

                        value={isEnabled2}
                    />
                </View>
                <View style={{ flexDirection: "row"  , marginTop : 15}}>
                    <Text style={{ fontSize: 18 , flex : 1, color: "black", fontWeight: 'bold' }}>Thông báo bảo trì</Text>
                    <Switch
                        trackColor={{ false: "#8C8D8E", true: app_color }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch3}

                        value={isEnabled3}
                    />
                </View>
                <View style={{ flexDirection: "row"  , marginTop : 15}}>
                    <Text style={{ fontSize: 18 , flex : 1, color: "black", fontWeight: 'bold' }}>Thông báo trò chuyện </Text>
                    <Switch
                        trackColor={{ false: "#8C8D8E", true: app_color }}
                        thumbColor={isEnabled ? "#fff" : "#fff"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch4}

                        value={isEnabled4}
                    />
                </View>
            </SafeAreaView>
        </SafeAreaView>
    )
}
export default SettingScreen