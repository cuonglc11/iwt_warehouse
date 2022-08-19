import React from "react";
import { Image, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import MapView, { PROVIDER_GOOGLE, MapMarker, Polygon, Geojson , } from "react-native-maps";
import CustomTop from "../../../componet/CustomTop";
import { app_color } from "../../../contant/color";
import MapViewDirections from 'react-native-maps-directions'
const DetalInfoHome = ({ navigation }) => {

    // const origin  =  {lat: , log: }
    // const dis =  { lat:, log:  }
    // const API_KEY  =  "AIzaSyDvIPsSC7bRKMFlLbQSvwlZE3j4tkVtOyY"

    const myPlace = {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "properties": {},
                "geometry": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            21.01768811729898, 105.81572132719285
                        ],
                        // [
                        //     21.02080731858411, 105.81812306477924
                        // ],
                      
                        

                    ]
                }
            }
        ]
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <CustomTop text={"Chi tiết thông tin"}
                onclick={() => {
                    navigation.replace("detalword")
                }}

            />
            <ScrollView>
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
                    <Geojson
                            geojson={myPlace}
                            strokeColor="red"
                            fillColor="red"
                            strokeWidth={8}
                        />
                </MapView>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, margin: 10 }}>Thông tin</Text>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Tuyến cáp : Sơn Trà 01
                    </Text>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.replace("routelist")
                        }}

                        style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Danh sách tuyến
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Điểm Đầu : xxxxxx
                    </Text>
                    <TouchableOpacity style={{ flex: 1 }}>
                        <Text style={{ fontSize: 18 }}>
                            Điểm Cuối : xxxxxx
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Loại cáp: 96 F0
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Kiểu Cáp: Cáp ngầm
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Loại kết nối: AGG
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Chiều dài tuyến: 450 m
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Ngày Cấp Nhật: 14:30 - 29/12/2021
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}>
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Lịch sử xử lý sự cố
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace("troublehistory")}
                        style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Lịch sử xử lý sự cố

                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', margin: 10 }}

                >
                    <Text style={{ fontSize: 18, flex: 1 }}>
                        Lịch sử bảo trì
                    </Text>
                    <TouchableOpacity
                        onPress={() => navigation.replace('maintenancehistory')}


                        style={{ flex: 1 }}>
                        <Text style={{ color: app_color, fontWeight: 'bold', fontSize: 18 }}>
                            Lịch sử bảo trì
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => navigation.replace('suceesshome')}
                        style={{ flex: 1, backgroundColor: "#fff", padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                        <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Tiếp nhận</Text>
                    </TouchableOpacity>
                    <TouchableOpacity

                        onPress={() => {
                            navigation.replace("routelist")
                        }}
                        style={{ flex: 1, backgroundColor: "#fff", marginStart: 10, padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../../asset/img/writing.png')} style={{ tintColor: app_color, height: 20, width: 20 }} />
                        <Text style={{ color: app_color, fontSize: 12, fontWeight: 'bold', marginStart: 10 }}>Danh sách tuyến</Text>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default DetalInfoHome