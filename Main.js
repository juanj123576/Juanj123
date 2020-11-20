import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  FlatList,Button
} from 'react-native';

import Header from'./Header';
import Listitem from './listitem';
import Additem from './Additem';


const HelloWorldApp = ({navigation}) => {
  const[items,setItems]= useState([{id:1,text:'Leche'},
{id:2,text:'huevo'},{id:3,text:'Pan'},{id:4,text:'jugo'}
])
const deleteItem=(id)=>{
  setItems(prevItems =>{
    return prevItems.filter(item => item.id !=id);
  });
}
const addItem=(text)=>{
  setItems(prevItems =>{
    return[{id:5,text},...prevItems];
  });
}
  return (
    <View
      style={styles.container }>
      <Header/>
      <Additem addItem={addItem}/>
      <FlatList 
      data={items} 
      renderItem={({item})  => (
      <Listitem item={item} deleteItem={deleteItem}/>)}
      
      />
        <Button
          color="#3740FE"
          title="Signup"
          onPress={() =>  navigation.navigate('Notifications')}
        />

    </View>
  );
}
const styles = StyleSheet.create({
container:{
  flex: 1,
  paddingTop:10,
  position: "relative",
  top:-10,
}

});
export default HelloWorldApp;
