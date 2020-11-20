import React, { useEffect, useState } from 'react';
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

  const LoginScreen = () => {
   
  const  [ name ,  setName ]  =  useState ( '' ) ;
   
  
render(){
    return (
        <view 
        style={styles.container}>
        <view style={styles.circle}/>
        <view style ={{marginTop:64}}>
        <image
        source={require('https://s3-eu-west-1.amazonaws.com/userlike-cdn-blog/beneficios-del-live-chat/chat-benefits.png')}/>
        </view>
     <view style={{marginHorizontal:32}}>
     <Text style={styles.header}>Username</Text>
     </view>  
   
     </view>
        
    )
    };
    }

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor :'#4f4f5f7',
    },
    circle:{
        width:500,
        height:500,
        borderRadius:'#FFF',
        position:'absolute',
        left:-120,
        top:-18,
 },
 header:{
     fontWeight:'800',
     fontSize:30,
     color:'#514ESA',
     marginTop:32,
 }
});
export default LoginScreen;