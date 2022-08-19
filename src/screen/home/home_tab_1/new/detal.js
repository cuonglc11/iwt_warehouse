import React from "react";
import { SafeAreaView, View, Text } from 'react-native'
import CustomTop from "../../../../componet/CustomTop";
const NewDetalScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Tin tức - thông báo"} onclick={() => {
                navigation.replace('HomeTab2')
            }} />
            <View style={{ padding: 10, flexDirection: 'row' }}>
                <Text style={{ flex: 2, fontWeight: 'bold', color: 'black', fontSize: 15 }}>Mục tin tức</Text>

            </View>
            <View

                style={{ flex: 1, borderRadius: 15, width: '95%', margin: 10, alignItems: 'center', justifyContent: 'center', marginBottom: 10, backgroundColor: "#E2E2E2" }}>
                <Text>Tin túc</Text>
            </View>
        </SafeAreaView>
    )
}
export default NewDetalScreen