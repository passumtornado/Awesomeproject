import React, { Component } from 'react'
import { Text, View,StyleSheet, SafeAreaView, Pressable } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FormButton from '../components/FormButton'
function SuccessScreen({navigation}) {
    const onPressHandler = () =>{
        navigation.navigate('Home')
    }
    return (
        <SafeAreaView style={styles.Homebackground}>
        <View style={styles.SuccessCard}>
          <View style={styles.Iconellipse}>
          <MaterialCommunityIcons name='check' size={50} color='#03721B'/>
          </View>
        </View>
        <View style={styles.TextContainer}>
            <Text style={styles.HeaderText}>Payment Successfully</Text>
            <View style={{width:'60%'}}>
            <Text style={styles.ContentText}>
              Hooray!! your payment process has 
              been completed successfully
            </Text> 
            </View>  
        </View>
       <View style={{width:'80%'}}>
        <FormButton title='Back to home' onPressHandler={onPressHandler}/>
       </View>
       <Pressable style={styles.ViewPress} onPress={()=>navigation.navigate('Receipt')}>
        <Text style={styles.ViewText}>View Reciept</Text>
       </Pressable>
      </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    Homebackground:{
        flex:1,    
        backgroundColor:'linear-gradient(183.04deg, rgba(233, 79, 27, 0.09) 2.32%, rgba(255, 255, 255, 0.3) 82.81%)',
        justifyContent:'center',
        alignItems:'center',
        rowGap:20,
      },
      SuccessCard:{
        width:'60%',
        height:140,
        backgroundColor:'#fff',
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
      },
      TextContainer:{
         alignItems:'center',
         justifyContent:'center',
         rowGap:10
      },
    
      HeaderText:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center',
      },
      ContentText:{
        fontSize:16,
        fontWeight:'400',
        textAlign:'center',
        lineHeight:20,
      },
      Iconellipse:{
        justifyContent:'center',
        alignItems:'center',
        width:60,
        height:60,
        backgroundColor:'#F5F5F5',
        borderRadius:50,  
    },
    ViewPress:{
        justifyContent:'center',
        alignItems:'center'
    },
    ViewText:{
        textDecorationLine:'underline',
        textDecorationColor:'#1963AF',
        color:'#1963AF'
    }
    
})

export default SuccessScreen
