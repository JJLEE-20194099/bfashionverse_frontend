import { Dimensions, ScrollView, Text, View } from "react-native";
import CartComponents from "./CartComponents";
import CartList from "./CartList";
import TotalComponents from "./TotalComponents";

const Cart = ({ navigation }) => {
  navigation.na;
  return (
    <View style={{height: '100%',flex: "auto 1"}}>
      <ScrollView
        // style={{ flex:  }}
      >
        <CartList />
      </ScrollView>
   
        <TotalComponents navigation={navigation} />
    </View>
  );
};

export default Cart;
