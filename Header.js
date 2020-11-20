import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';




const Header = () => {
    
  return (
    <View
      style={styles.header }>
      <Text style={styles.Text}>Store</Text>
      
    </View>
  )
}
const styles = StyleSheet.create({
header:{
  height:60,
  padding:15,
  backgroundColor:'darkslateblue',
},
Text:{
  color:'#fff',
  fontSize:23,
  textAlign:'center',
  
}
});
export default Header;
