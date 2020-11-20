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
  TouchableOpacity,
  TextInput
} from 'react-native';







const Additem= ({title,addItem}) => {
    const [text,setText]= useState('');
const onChange=textValue => setText(textValue);
    
  return (
      
  <View>
      <TextInput placeholder="Añadir item..." 
      style={styles.input}
      onChangeText={onChange}
   />
          <TouchableOpacity style={styles.btn} onPress={()=>
        addItem(text)}>
      <Text style={styles.btntext}><Icon name="plus"size={20}/>Additem</Text>
      
       
       
           </TouchableOpacity>
    </View>
  
  
  )
}
const styles = StyleSheet.create({
input:{
   height:60,
   padding:8,
   fontSize: 16,
},
btn:{
    backgroundColor:'#c2bad8',
    padding:9,
    margin:5,
},
btntext:{
color:'darkslateblue',
fontSize:20,
textAlign:'center',

},
});
export default Additem;
