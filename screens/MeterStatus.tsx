import React, { Component } from 'react'
import { Text, View,Pressable,StyleSheet,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function MeterStatus({navigation}) {
    const onPressBack = () =>{
        navigation.goBack()
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
         <Text style={styles.HeaderText}>Check Meter Status</Text>
        </View>
        <View style={styles.HomeCard}>
        <Text style={styles.ContentText}>Meter Status</Text>
          <View style={{width:'90%',rowGap:30}}>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Meter ID</Text>
              <Text>1234X28</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Customer ID</Text>
              <Text>1234X28</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Purchased Units</Text>
              <Text>120units</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Remaining Units</Text>
              <Text>30 units</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Battery Status</Text>
              <Text>50%</Text>
            </View>
          </View>
        </View>
        <View>
        </View>
        </ScrollView> 
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
export default MeterStatus
