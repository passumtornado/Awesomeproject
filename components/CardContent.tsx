
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


 type Props = {
    iconName?:any,
    title:String,
    amount:String,
    bonus?:any
 }
function CardContent({iconName,title,amount,bonus}:Props){
    return (
      <TouchableOpacity className='flex flex-1 bg-yellow-500 px-1 py-1 space-y-1 rounded-md m-2'>
        <View className='flex flex-row items-center space-x-2 px-4 py-1'>
        < MaterialCommunityIcons name={iconName} size={15} color='black'/>
        <Text className='uppercase text-xs text-black'> {title} </Text>
        </View>
        <View className='bg-white px-3 py-1 w-full '>
            <Text className='text-black text-lg font-bold'>{amount}</Text>
            <View className='w-full h-[0.5px] bg-gray-200'></View>
            <Text className='font-semibold text-black fo'>Bonus: {bonus}</Text>
        </View>
      </TouchableOpacity>
    )
}

export default CardContent
