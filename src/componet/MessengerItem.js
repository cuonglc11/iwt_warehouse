import React from "react";
import {SafeAreaView , Text , TouchableOpacity} from 'react-native'
const MessengerItem  =  ({name ,  url , onPress  ,  message  ,  numberOfUnreadMessages}) => {
    return (
      <TouchableOpacity
         onPress={onPress}
         style={{
            height : 80 ,
            flexDirection :'row'
         }}
      >

      </TouchableOpacity>
    )
}
export default MessengerItem