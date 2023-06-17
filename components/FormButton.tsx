import React, { Component } from 'react'
import { Text, View,Pressable,StyleSheet} from 'react-native'

function FormButton({title,onPressHandler}) {
    return (
      <View style={styles.ButtonBtn}>
        <Pressable onPress={onPressHandler}>
         <Text style={styles.ButtonText}>{title}</Text>
        </Pressable>
      </View>
    )
}

const styles = StyleSheet.create({
  ButtonBtn:{
    backgroundColor:'#E94F1B',
    paddingHorizontal:8,
    paddingVertical:15,
    borderRadius:8,
  },
  ButtonText:{
    fontSize:18,
    fontWeight:500,
    color:'#fff',
    textAlign:'center',
  }
})
export default FormButton
