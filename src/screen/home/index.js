import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import HomeTab1 from "./home_tab_1";
import TroubleScreen from "./trouble";
import ListWordScreen from "./listword";
import CreateWordScreen from "./createword";
import RequestScreen from "./request";
import DetalInfoHome from "./detal";
import DetalInfoHomeSuccess from "./detal/success";
import DetalWordScreen from "./listword/detalword";
import CompletedScreen from "./listword/completed";
import SuppliesScreen from "./listword/supplies";
import LocationScreen from "./listword/location";
import AcceptanceScreen from "./acceptance";
import RouteListScreen from "./route";
import MaintenanceScreen from "./maintenance";
import EditRouteScreen from "./route/editRoute";
import MaintenanceHistoryScreen from "../history/maintenance";
import TroubleHostoryScreen from "../history/troule";
import ListMaintenanceScreen from "./maintenance/list";
import CreateMaintenance from "./maintenance/create";
import ReceptionMaintenance from "./maintenance/reception";
import SuppliesScreenIndex from "./supplies";
import LIstSuppliesScreen from "./supplies/list";
import ProjectScreen from "./supplies/project";
import ListProjectScreen from "./supplies/project/list";
import ListProjectDetallScreen from "./supplies/project/listprojectdetail";
import ListSuppList from "./supplies/project/listsupplist";
import ShippingScreen from "./supplies/shipping";
import ListShippingDetallScreen from "./supplies/shipping/list";
import DetalInfoMain from "./maintenance/detal";
import CreateProject from "./supplies/project/create";
import NuclearScreen from "./supplies/project/nuclear";
import ListProjectScreensupplies from "./supplies/project/listproject";
import DocumentScreen from "./document";
import CreateShipping from "./supplies/shipping/create";
import EditRouteMainScreen from "./maintenance/local/editRoute";
import RouteListMainScreen from "./maintenance/route";
import MainSucce from "./maintenance/success";
import RequestSucce from "./request/success";
import NewScreen from "./home_tab_1/new";
import NewDetalScreen from "./home_tab_1/new/detal";
import AdminSettingceScreen from "./setting";
import NewSettingScreen from "./setting/newsetting";
const HomeScreen  = () => {
    const Stack  = createNativeStackNavigator()
    return (
      <Stack.Navigator screenOptions={{

        headerShown : false
        
      }}
       initialRouteName="HomeTab2"
      >

        <Stack.Screen name="HomeTab2" component={HomeTab1}/>
        <Stack.Screen name="trouble" component={TroubleScreen}/>
        <Stack.Screen name="listword" component={ListWordScreen}/>
        <Stack.Screen name="createword" component={CreateWordScreen}/>
        <Stack.Screen name="request" component={RequestScreen}/>
        <Stack.Screen name="detalInfohome" component={DetalInfoHome}/>
        <Stack.Screen name="suceesshome" component={DetalInfoHomeSuccess}/>
        <Stack.Screen name="detalword" component={DetalWordScreen}/>
        <Stack.Screen name="completed" component={CompletedScreen}/>
        <Stack.Screen name="supplies" component={SuppliesScreen}/>
        <Stack.Screen name="location" component={LocationScreen}/>
        <Stack.Screen name="acceptace" component={AcceptanceScreen}/>
        <Stack.Screen name="routelist" component={RouteListScreen}/>
        <Stack.Screen name="editroute" component={EditRouteScreen}/>
        <Stack.Screen name="maintenance" component={MaintenanceScreen}/>
        <Stack.Screen name="maintenancehistory" component={MaintenanceHistoryScreen}/>
        <Stack.Screen name="troublehistory" component={TroubleHostoryScreen}/>
        <Stack.Screen name="listmaintenance" component={ListMaintenanceScreen}/>
        <Stack.Screen name="createmaintenance" component={CreateMaintenance}/>
        <Stack.Screen name="receptionmaintenance" component={ReceptionMaintenance}/>
        <Stack.Screen name="suppliesindex" component={SuppliesScreenIndex}/>
        <Stack.Screen name="supplieslist" component={LIstSuppliesScreen}/>
        <Stack.Screen name="project" component={ProjectScreen}/>
        <Stack.Screen name="listproject" component={ListProjectScreen}/>
        <Stack.Screen name="listprojectdetal" component={ListProjectDetallScreen}/>
        <Stack.Screen name="listsupplies" component={ListSuppList}/>
        <Stack.Screen name="shipping" component={ShippingScreen}/>
        <Stack.Screen name="listshipping" component={ListShippingDetallScreen}/>
        <Stack.Screen name="detalmain" component={DetalInfoMain}/>
        <Stack.Screen name="createproject" component={CreateProject}/>
        <Stack.Screen name="nuclearproject" component={NuclearScreen}/>
        <Stack.Screen name="listprojectsupplies" component={ListProjectScreensupplies}/>
        <Stack.Screen name="document" component={DocumentScreen}/>
        <Stack.Screen name="createshipping" component={CreateShipping}/>
        <Stack.Screen name="nuclearashipping" component={CreateShipping}/>
        <Stack.Screen name="localMain" component={EditRouteMainScreen}/>
        <Stack.Screen name="routeMain" component={RouteListMainScreen}/>
        <Stack.Screen name="mainsucccess" component={MainSucce}/>
        <Stack.Screen name="requestsuccess" component={RequestSucce}/>
        <Stack.Screen name="newdetal" component={NewDetalScreen}/>
        <Stack.Screen name="newscreen" component={NewScreen}/>
        <Stack.Screen name="adminsetting" component={AdminSettingceScreen}/>
        <Stack.Screen name="newsetting" component={NewSettingScreen}/>
































 

      </Stack.Navigator>
    )
}
export default HomeScreen