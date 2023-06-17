import { Text, View,Pressable,StyleSheet,ScrollView} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FormButton from '../components/FormButton'

function RecieptScreen({navigation}){
    const onPressBack = () =>{
        navigation.goBack()
      }
      const onPressHandler = () =>{
        navigation.navigate('Home')
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
         <Text style={styles.HeaderText}>Transaction Details</Text>
        </View>
        <View style={styles.HomeCard}>
        <Text style={styles.ContentText}>Transaction Details</Text>
          <View style={{width:'90%',rowGap:5}}>
            <View style={styles.TextViewDate}>
              <Text style={styles.Title}>Date</Text>
              <Text style={styles.Title}>03/06/23</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Meter ID</Text>
              <Text>1234X28</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Transaction ID</Text>
              <Text>1234Y2B</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Amount</Text>
              <Text>GHS 150.00</Text>
            </View>
            <View style={styles.TextView}>
              <Text style={styles.Title}>Mode</Text>
              <Text>Mtn MoMo</Text>
            </View>
          </View>
          <View style={{width:'90%'}}>
        <FormButton title='Back to home' onPressHandler={onPressHandler}/>
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
      backgroundColor:'#F5F5F5',
      width:'90%',
      alignSelf:'center',
      borderRadius:10,
      height:600,
      marginTop:50,
      rowGap:30,
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
  TextViewDate:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#333333',
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:8
  },
  TextView:{
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',
    backgroundColor:'#fff',
    paddingHorizontal:10,
    paddingVertical:20,
    borderRadius:8
  },
  Title:{
   fontSize:16,
   fontWeight:200,
   color:'#ccc',
  }
  })
export default RecieptScreen
