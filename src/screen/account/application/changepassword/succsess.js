import React from "react";
import {  SafeAreaView , ImageBackground , Image , Text , TouchableOpacity} from 'react-native'
import { app_color } from "../../../../contant/color";
const ChangePasssSucce = ({ navigation }) => {
    return (
        <SafeAreaView style={{flex : 1}}>
            <ImageBackground style={{flex : 1 , alignItems :'center' , justifyContent :'center'}} source={require('../../../../asset/img/succerr.png')}>
                <ImageBackground source={require('../../../../asset/img/logo_suc.png')} style={{width : 150 , height : 150 , justifyContent :'center' , alignItems :'center'}}>
                    <Image source={require('../../../../asset/img/check_s.png')} style={{width : 100  , height :100  , tintColor :'#fff'}}/>
                </ImageBackground>
                <Text style={{marginTop : 20  , fontSize : 16  , color :'#fff' , fontWeight :"bold"}}>Chúc mừng , bạn đã đổi mật khẩu</Text>
                <Text style={{marginTop : 20  , fontSize : 16  , color :'#fff' , fontWeight :"bold"}}>thành công</Text>

                <TouchableOpacity
                     onPress={() => {
                        navigation.replace('application')
                      
                     }}
                    style={{ marginTop : 20, backgroundColor: '#fff',height: 40, width: 200, justifyContent: 'center', alignItems: 'center', borderRadius: 10 }}>
                        <Text style={{ color: app_color, fontSize: 25, fontWeight: 'bold' }} > Trở Lại </Text>
                    </TouchableOpacity>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default ChangePasssSucce