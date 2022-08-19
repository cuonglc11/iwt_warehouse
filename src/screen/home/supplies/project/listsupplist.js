import React from "react";
import { SafeAreaView, Text, View , FlatList , Image , TouchableOpacity , ScrollView } from 'react-native'
import CustomTop from "../../../../componet/CustomTop";
import { app_color } from "../../../../contant/color";
const ListSuppList = ({navigation , route}) => {
    // console.log(route);
    const {goBack} = navigation
    console.log(goBack);
    return (
        <SafeAreaView style={{flex : 1}}>
            <CustomTop text={"Thông tin vật tư"}
               onclick={()=> {
                  navigation.replace('project')
               // goBack()
             }}
            />
            <ScrollView>
                <Text style={{color :'black'  , fontWeight :"bold" , fontSize : 16 , margin : 10}}>Vật tư 1  </Text>
                <View style={{padding : 5 , margin : 10}}>
                    <Image source={require('../../../../asset/img/thu.png')} style={{width :'100%' , height : 150}} />
                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Số lượng </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>10 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>Cây </Text>

                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Phân Loại </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>

                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Chứng từ </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>

                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Mã vật tư </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>
                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Đặc tính </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>
                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Mô tả </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>
                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Thông tin kho </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>
                </View>
                <View style={{margin : 5  , padding : 5  , flexDirection :'row'}}>
                   <Text style={{flex : 4 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold'}}>Hạn mức tổn kho</Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}>100 </Text>
                   <Text style={{flex : 2 , color :"#2D2F34" , fontSize : 15 , fontWeight :'bold' , alignContent :"center"}}> </Text>
                </View>
                 
                <Text style={{color :'black'  , fontWeight :"bold" , fontSize : 20 , margin : 10 , marginTop : 60}}>Kho dự án 1  </Text>
                <View style={{width :'100%',borderBottomColor :"rgba(0, 0, 0, 0.13)" , borderBottomWidth :2 }}/>
                <View style={{flexDirection :'row' , alignItems :"center" , justifyContent :"center" , padding : 10}}>
                <TouchableOpacity
                        onPress={() => navigation.replace('request')}
                        style={{ margin : 5, backgroundColor: app_color, width: 150, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} >Chỉnh sửa</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.replace('request')}
                        style={{ margin : 5, backgroundColor: app_color, width: 150, height: 60, justifyContent: 'center', alignItems: 'center', borderRadius: 20 }}>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} >Chi tiểt</Text>
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold' }} >nhập xuất</Text>

                    </TouchableOpacity>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}
export default ListSuppList