import React , {useEffect , useRef} from "react";
import { SafeAreaView, ImageBackground , Image , Animated} from 'react-native'
import { img_bk } from '../../contant/img'
const SplashScreen = ({ navigation }) => {
    const faceIn =  useRef(new Animated.Value(0)).current

    useEffect(() => {
        Animated.timing(
            faceIn,
            {
                toValue : 1,
                duration : 1000 ,
                useNativeDriver:  false
            }
        ).start()
        setTimeout(() => {
            navigation.replace('login')
        }, 2000);
    },[faceIn])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ImageBackground source={require('../../asset/img/ic_bk1.png')} style={{ flex: 1 , justifyContent :'center' , alignItems :'center' }}>
            <Animated.View style={{ opacity:faceIn }}>
           <Image source={require('../../asset/img/logo.png')} style={{height : 300, width:300}} resizeMode='contain'/>
        </Animated.View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default SplashScreen