
import { Text, View,StyleSheet, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import CardContent from '../components/CardContent'
import { textAlign } from 'react-native-wind/dist/styles/typography/text-align'
import ActionButton from '../components/ActionButton'
function HomeScreen({navigation}) {

     const onPressHandlerMeter = () =>{
       navigation.navigate('RechargeMeter')
     }
     const onPressHandlerSatus = () =>{
      navigation.navigate('CheckMeter')
     }
    return (
     <SafeAreaView style={styles.Homebackground}>
       <View style={styles.TextContainer}>
        <Text style={styles.HeaderText}>Home</Text>
       </View>
       <View style={styles.HomeCard}>
          <Text style={styles.ContentText}>Select an Option to Get Started</Text>
          <View style={{width:'90%',rowGap:30}}>
          <ActionButton iconName='cards-variant' actionText='Recharge Meter'onPressHandler={onPressHandlerMeter}/>
          <ActionButton iconName='info' actionText='Check Meter Status'onPressHandler={onPressHandlerSatus}/>
          </View>
       </View>
       <View>
       </View>
       {/* <View className='bg-yellow-500 w-full py-4 flex-row justify-between items-center px-4'>
        <View className='border-2 p-1 rounded-lg '>
        <Text className='text-lg text-bold'>MTN</Text>
        </View>
        <View className='items-center'>
            <Text className='text-lg text-black font-extrabold'>Y'ello!</Text>
            <Text className='uppercase font-semibold text-black'>Abdul Gaffar</Text>
        </View>
        <FontAwesome5 name='rocketchat' size={30}/>
       </View>
       <View className='mt-4 px-3'>
        <Text className='text-lg ml-2'>Your balances</Text>
        <View className='flex flex-row justify-center items-center mt-5'>
         <CardContent iconName='phone-in-talk' amount='GHC 2.07' title='airtime' bonus='2.07'/>
         <CardContent iconName='swap-vertical' amount='8.45 GB' title='data'/>
        </View>
        <View className='flex-row justify-center items-center'>
         <CardContent iconName='message' amount='3,168 SMS' title='sms'/>
         <TouchableOpacity className='flex-1 bg-yellow-500 px-1 py-1 space-y-1 rounded-md m-2'>
        <View className='flex flex-row items-center space-x-2 px-4 py-1'>
        < MaterialCommunityIcons name='broadcast' size={15} color='black'/>
        <Text className='uppercase text-xs text-black'>broadband</Text>
        </View>
        <View className='bg-white px-3 py-1 w-full '>
            <Text className='text-black text-[12px] uppercase font-bold'>Get broadband here</Text>
            <View className='w-full h-[0.5px] bg-gray-200'></View>
            <Text className='font-semibold text-black uppercase text-[10px]'>0 Account linked</Text>
        </View>
      </TouchableOpacity>
        </View>
       </View>
       <View className='mt-4 px-3'>
       <Text className='text-lg ml-2'>Buy again</Text>
      
       </View> */}
     </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  Homebackground:{
    flex:1,    
    backgroundColor:'linear-gradient(183.04deg, rgba(233, 79, 27, 0.09) 2.32%, rgba(255, 255, 255, 0.3) 82.81%)',
  },
  TextContainer:{
     alignItems:'center',
     marginTop:40,
  },
  HeaderText:{
    fontSize:16,
    fontWeight:'bold',
  },
  HomeCard:{
    alignItems:'center',
    backgroundColor:'#fff',
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
  }
})

export default HomeScreen

