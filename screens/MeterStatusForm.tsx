import React, { Component } from 'react'
import { Text, View,StyleSheet,Pressable,TextInput} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FormButton from '../components/FormButton'

function MeterStatusScreen({navigation}) {
    const onPressBack = () =>{
      navigation.goBack()
    }
    const onPressHandlerSatus = () =>{
      navigation.navigate('MeterStatus')
    }
    return (
      <SafeAreaView style={styles.Homebackground}>
      <View style={styles.TextContainer}>
        <Pressable onPress={onPressBack} style={{position:'absolute',left:15}}>
          <View style={styles.Iconellipse}>
           <MaterialCommunityIcons name='arrow-left-thin' size={20} color='#636363' />
          </View>
        </Pressable>
       <Text style={styles.HeaderText}>Check Meter Status</Text>
      </View>
      <View style={styles.HomeCard}>
      <Text style={styles.ContentText}>Check Meter Status</Text>
        <View style={{width:'90%',rowGap:30}}>
          <View style={{rowGap:20}}>
            <Text>Enter Meter ID</Text>
            <TextInput style={styles.Input} placeholder='e.g 12X45B'/>
          </View>
          <FormButton title='Send' onPressHandler={onPressHandlerSatus}/>
        </View>
      </View>
      <View>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  Homebackground:{
    flex:1,    
    backgroundColor:'linear-gradient(183.04deg, rgba(233, 79, 27, 0.09) 2.32%, rgba(255, 255, 255, 0.3) 82.81%)',
  },
  TextContainer:{
    flexDirection:'row',
     alignItems:'center',
     marginTop:40,
     justifyContent:'center',
     position:'relative',
  },

  HeaderText:{
    fontSize:16,
    fontWeight:'bold',
    textAlign:'center',
  },
  HomeCard:{
    alignItems:'center',
    backgroundColor:'#F7F7F7',
    width:'90%',
    alignSelf:'center',
    borderRadius:10,
    height:500,
    marginTop:50,
    rowGap:30
  },
  ContentText:{
    fontSize:25,
    fontWeight:'700',
    textAlign:'center',
    marginTop:40,
    width:'60%'
  },
  Iconellipse:{
    justifyContent:'center',
    alignItems:'center',
    width:32,
    height:32,
    backgroundColor:'#F5F5F5',
    borderRadius:50,  
},
Input:{
  backgroundColor:'#fff',
  width:'100%',
  paddingHorizontal:8,
  paddingVertical:15,
  borderRadius:8
}
})
export default MeterStatusScreen
