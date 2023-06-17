
import { Text, View,StyleSheet, TouchableOpacity, TouchableWithoutFeedbackBase } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { alignItems } from 'react-native-wind/dist/styles/flex/align-items'


function ActionButton({iconName,actionText,onPressHandler}){
    return (
        <TouchableOpacity style={styles.ActionContainer} onPress={onPressHandler}>
         <View style={styles.Iconellipse}>
          <MaterialCommunityIcons name={iconName} size={20}/>
         </View>
         <Text style={styles.ActionText}>{actionText}</Text>
          <MaterialCommunityIcons name='arrow-right-thin' size={20}/>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    ActionContainer:{
        flexDirection:'row',
        width:'100%',
        backgroundColor:'#F7F7F7',
        paddingVertical:15,
        paddingHorizontal:12,
        justifyContent:'space-between',
        alignItems:'center',
        borderRadius:8
    },
    ActionText:{
        fontSize:18,
        fontWeight:700,
    },
    Iconellipse:{
        justifyContent:'center',
        alignItems:'center',
        width:42,
        height:42,
        backgroundColor:'#D5D6D9',
        borderRadius:50
    }
})
export default ActionButton
