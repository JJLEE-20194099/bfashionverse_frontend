import { Dimensions, ScrollView, Text, View } from 'react-native'
import CartComponents from './CartComponents';
import CartList from './CartList';
import TotalComponents from './TotalComponents';


const Cart =({navigation})=>{
  navigation.na
   return (
     <View>
       <ScrollView style={{ height: Dimensions.get("screen").height - 180 }}>
         <CartList />
       </ScrollView>
       <TotalComponents navigation={navigation}/>
     </View>
   );
 }

export default Cart

