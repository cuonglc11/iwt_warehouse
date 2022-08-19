import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeScreen1 from "./home";
import ConverAccout from "./conver";
const ConversationScreen = () => {
    const Stack  = createNativeStackNavigator()
    return (
         <Stack.Navigator screenOptions={{
            headerShown : false 
         }}>
            <Stack.Screen name="Home" component={HomeScreen1}/>
            <Stack.Screen name="conver" component={ConverAccout}/>


         </Stack.Navigator>
    )
}
export default ConversationScreen