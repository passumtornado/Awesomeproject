import React, { Component } from 'react'
import { Text, View,Pressable,StyleSheet,ScrollView,SafeAreaView, TextInput} from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FormButton from '../components/FormButton'

function RechargeMeterForm({navigation}) {
    const onPressBack = () =>{
        navigation.goBack()
      }
      const onPressHandlerSatus = () =>{
        navigation.navigate('Details')
      }
      return (
        <SafeAreaView style={styles.Homebackground}>
        <ScrollView> 
        <View style={styles.TextContainer}>
          <Pressable onPress={onPressBack} style={{position:'absolute',left:15}}>
            <View style={styles.Iconellipse}>
             <MaterialCommunityIcons name='arrow-left-thin' size={20} color='#636363' />
            </View>
          </Pressable>
         <Text style={styles.HeaderText}>Recharge Meter </Text>
        </View>
        <View style={styles.HomeCard}>
        <Text style={styles.ContentText}>Please Enter Details</Text>
          <View style={{width:'90%',rowGap:30}}>
          <View style={{rowGap:20}}>
            <Text>Meter ID</Text>
            <TextInput style={styles.Input} placeholder='e.g 12X45B'/>
          </View>
          <View style={{rowGap:20}}>
            <Text>Customer ID</Text>
            <TextInput style={styles.Inputdisabled} placeholder='CA12X45B' readOnly={true}/>
          </View>
          <View style={{rowGap:20}}>
            <Text>Amount</Text>
            <TextInput style={styles.Input} placeholder='e.g 150'/>
          </View>
          <FormButton title='Send Details' onPressHandler={onPressHandlerSatus}/>
          </View>
        </View>
        <View>
        </View>
        </ScrollView> 
      </SafeAreaView>
      )
}const styles = StyleSheet.create({
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
      height:600,
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
  },
  Inputdisabled:{
    backgroundColor:'#D5D6D9',
    width:'100%',
    paddingHorizontal:8,
    paddingVertical:15,
    borderRadius:8
  },
  TextView:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row'
  },
  Title:{
   fontSize:14,
   fontWeight:200,
   color:'#ccc',
  }
  })

export default RechargeMeterForm
