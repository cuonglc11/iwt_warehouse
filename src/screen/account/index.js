import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import HomeAccount from "./home";
import EditAccout from "./edit";
import ApplicationScreen from "./application";
import PhoneEditScreen from "./edit/phoneedit";
import ChangeSucce from "./edit/succsess";
import EmailEditScreen from "./edit/emailedit";
import AddEditScreen from "./edit/addeditt";
import ChangePassWordScreen from "./application/changepassword";
import ChangePasssSucce from "./application/changepassword/succsess";
const Accout = () => {
    const Stack = createNativeStackNavigator()
    return (
        <Stack.Navigator screenOptions={{

            headerShown: false
        }}>
            <Stack.Screen name="acount_home" component={HomeAccount} />
            <Stack.Screen name="editaccout" component={EditAccout} />
            <Stack.Screen name="phoneedit" component={PhoneEditScreen} />
            <Stack.Screen name="emailedit" component={EmailEditScreen} />
            <Stack.Screen name="addedit" component={AddEditScreen} />
            <Stack.Screen name="changepass"
              screenOptions={{
                tabBarVisible : false
              }}
            component={ChangePassWordScreen} />
            <Stack.Screen name="changesuccess" component={ChangeSucce} />
            <Stack.Screen name="application" component={ApplicationScreen} />
            <Stack.Screen name="changepasssucce" component={ChangePasssSucce} />

        </Stack.Navigator>
    )
}
export default Accout