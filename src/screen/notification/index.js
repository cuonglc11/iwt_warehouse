import React from "react";
import  {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeNotify from "./home";
import SettingScreen from "./setting";
const Nontification = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator
        screenOptions={{
            headerShown : false
        }}
        >
            <Stack.Screen component={HomeNotify} name="homenotify"/>
            <Stack.Screen component={SettingScreen} name="setting"/>


        </Stack.Navigator>
    )
}
export default Nontification