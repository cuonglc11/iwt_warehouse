import React from "react";
import { TextInput, Text, View, StyleSheet , Image , SafeAreaView } from 'react-native'
import { app_color } from "../contant/color";
const CustomTextInput = ({ value, setValue, placeholder, secureTextEntry, img, keyType = "default" , line = 1 }) => {
    return (
        <SafeAreaView style={styles.container}>
       
       <TextInput

        value={value}
        onChangeText={setValue}
        placeholder={placeholder}
        
        style={styles.input}
        secureTextEntry={secureTextEntry}
        keyboardType={keyType}
        numberOfLines={line}
        multiline ={true}
        />
         {
            img ? (
                <Image source={img} style={{height : 25 , width : 25 , alignSelf :'center' ,margin : 10 ,tintColor : app_color }}  />

            ) : null
        }
    </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container :  {
        backgroundColor : 'white',
        width : '100%' ,
        marginTop : 10,
        borderColor : 'rgba(0, 0, 0, 0.13)',
        flexDirection :'row',
        borderWidth : 1  ,
        borderRadius : 20,
    },
    input  : {
        marginStart : 10 ,
        flex:1,
        // backgroundColor :'red',
        alignSelf :'flex-start'
    }
})
export default CustomTextInput