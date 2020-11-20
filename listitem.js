import React, { useState } from 'react';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';







const listitem= ({item,deleteItem,navigation}) => {
    
  return (
    
      <TouchableOpacity style={styles.listitem} onPress={()=>navigation.navigate('Home')}>
  <View
      style={styles.listitemview }>
      <Text style={styles.listitemtext}
   
>{item.text}</Text>
      
       <Icon name="remove" size={30} color="firebrick"
       onPress={()=> deleteItem(item.id)}
       />
    </View>
      </TouchableOpacity>
  
  )
}
const styles = StyleSheet.create({
listitem:{
    padding:15,
    backgroundColor:"#f8f8f8",
    borderColor:"#eee",
},
listitemview:{
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomWidth:1,
    alignItems:'center',

},
listitemtext:{
fontSize:18,

}
});
export default listitem;