import React from "react";
import { SafeAreaView, Text, View, TouchableOpacity, Image } from 'react-native'
import CustomTop from "../../../componet/CustomTop";
import MapView, { PROVIDER_GOOGLE, MapMarker, Polygon , Geojson } from "react-native-maps";
import { app_color } from "../../../contant/color";

const LocationScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Báo cáo thông tin ví trí"} onclick={() => {
                navigation.replace('supplies')
            }} />
            <MapView
                provider={PROVIDER_GOOGLE}
                style={{ height: 350, width: 400, alignSelf: 'center' }}
                region={{
                    latitude: 21.022368959601263,
                    longitude: 105.81604557560343,
                    latitudeDelta: 0.015,
                    longitudeDelta: 0.0121,
                }}
            >
                <MapMarker
                    coordinate={{
                        latitude: 21.018175055284136,
                        longitude: 105.81664787116411
                    }}

                >

                </MapMarker>

            </MapView>
            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, margin: 10 }}>Thông tin</Text>
            <Text style={{ fontSize: 18, margin: 10 }}>
                Tuyến cáp : Sơn Trà 01
            </Text>
            <View style={{ margin: 10, flexDirection: 'row' }}>
                <Text style={{ fontSize: 18, flex: 1 }}>
                    Long  : xxxxxx
                </Text>
                <Text style={{ fontSize: 18, flex: 1 }}>
                    Lat : xxxxxx
                </Text>

            </View>
            <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                <TouchableOpacity
                    onPress={() => navigation.replace('acceptace')}
                    style={{ flex: 1, backgroundColor: "#fff", padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Tiếp nhận</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=> {
                    navigation.replace("routelist")
                 }}
                style={{ flex: 1, backgroundColor: "#fff", marginStart: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                    <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Danh sách tuyến</Text>

                </TouchableOpacity>
            </View>


        </SafeAreaView>
    )
}
export default LocationScreen