import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'

function ButtonNavigate() {
    return (
      <View className='bg-white w-full py-3 flex flex-row justify-between items-center absolute bottom-0'>
       <TouchableOpacity className='space-x-1 items-center mx-3'>
         <Entypo name='home' size={15} color='black' />
         <Text>Home</Text>
       </TouchableOpacity>
       <TouchableOpacity className='space-x-1 items-center mx-3'>
         <Entypo name='shopping-cart' size={15} color='black' />
         <Text>Shop</Text>
       </TouchableOpacity>
       <TouchableOpacity className='space-x-1 items-center mx-3'>
         <Entypo name='home' size={15} color='black' />
         <Text>Momo</Text>
       </TouchableOpacity>
       <TouchableOpacity className='space-x-1 items-center mx-3'>
         <Ionicons name='ellipsis-vertical' size={15} color='black' />
         <Text>More</Text>
       </TouchableOpacity>
      </View>
    )
}

export default ButtonNavigate
