import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPassScreen, ForgotSucce, LoginScreen, SplashScreen } from "../screen";
import TabNavigation from "./TabNavigation";
const HomeNavigation = props => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                   headerShown : false
            }}>
           <Stack.Screen name="splash" component={SplashScreen}/>
           <Stack.Screen name="login" component={LoginScreen}/>
           <Stack.Screen name="forgotpassword" component={ForgotPassScreen}/>
           <Stack.Screen name="forgotsuccer" component={ForgotSucce}/>
           <Stack.Screen name="Home" component={TabNavigation}/>


            </Stack.Navigator>
        </NavigationContainer>
    )

}
export default HomeNavigation