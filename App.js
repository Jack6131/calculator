import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import infixToPostfix from './postFixMath';
import React, { Component,useState } from 'react';
export default function App() {
  const [numbers,setNum]=useState([
    {name:'1', id:'1'},
    {name:'2', id:'2'},
    {name:'3',id:'3'},
    {name:'4', id:'4'},
    {name:'5', id:'5'},
    {name:'6', id:'6'},
    {name:'7', id:'7'},
    {name:'8', id:'8'},
    {name:'9', id:'9'},
    {name:'0', id:'0'},
    {name:'+', id:'+'},
    {name:'-', id:'-'},
    {name:'/', id:'/'},
    {name:'x',id:'x'},
    {name:'(', id:'('},
    {name:')', id:')'},
    {name:'=', id:'='},
    {name:'c',id:'c'}
])
let [string,useString]=useState('')

const pressHandler =(id)=>{
  if(id=='c'){
    useString("")
  }
  else if(id =='='){
    useString(infixToPostfix(string))
    
  }
  else{
  useString(string+=id)
}
}


  return (
    <View style={styles.container}>
      <View style={styles.equationspace}>
        <Text style={styles.text}>{string}</Text>

      </View>
      <View style={styles.buttonArea}>
      <FlatList
      numColumns={3}
      data={numbers}
      keyExtractor={(item)=>item.id}
      renderItem={({item})=>(
        <TouchableOpacity onPress={()=>pressHandler(item.id)}>
          <View style={styles.circle}>
            <Text style={styles.text}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      )
    }
    />
    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonArea:{
    marginTop:100,
  },
  equationspace:{
    marginTop:300,
  },
  rowCol:{
    flexDirection:"row",
    marginTop:20,
    alignItems:'center',
    justifyContent:'center'
  },
  circle:{
    marginTop:30,
    marginHorizontal:30,
    height:60,
    width:60,
    borderRadius:60/2,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor:"red",
  },
  text:{
    fontSize:20,
    fontWeight:'bold'
  },
  
});
