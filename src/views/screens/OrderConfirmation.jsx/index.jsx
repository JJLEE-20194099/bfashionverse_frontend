import {
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import SvgUri from "react-native-svg-uri";
import vectorImage from "../../../image/Vector.svg";
import { Padding, Purplerose2 } from "../../../constants";
import OrderCartComponents from "./OrderCartComponents";
import { useStore } from "../../../utils/context";
import OrderTotalComponents from "./OrderTotalComponents";
import DeliveryComponents from "./DeliveryComponents";

export default function OrderConfirmation({ navigation }) {
  const {
    cartStore: { order, total },
  } = useStore();
  const orderConfirm = order.filter((o) => o.isSelect == true);
  return (
    <View style={{ height: "100%", flex: "auto 1" }}>
      <ScrollView>
        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("DeliveryAddress")}
        >
          <View
            style={{
              padding: Padding,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  paddingBottom: 10,
                }}
              >
                <Entypo name="location" size={24} color={Purplerose2} />
                <Text
                  style={{
                    fontFamily: "Quicksand_700Bold",
                    fontSize: 16,
                    paddingLeft: 10,
                    color: Purplerose2,
                  }}
                >
                  Do Manh Quan
                </Text>
                <Text
                  style={{
                    fontFamily: "Quicksand_700Bold",
                    fontSize: 16,
                    paddingLeft: 10,
                    color: Purplerose2,
                  }}
                >
                  0374542455
                </Text>
              </View>
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 14 }}>
                204 Le thanh nghi, Phuong Dong tam, Quan Hai Ba ad, Ha noi
              </Text>
            </View>
            <SvgUri source={vectorImage} fill={Purplerose2} />
          </View>
        </TouchableWithoutFeedback>
        <DeliveryComponents />
        {orderConfirm.map((oc) => (
          <OrderCartComponents
            key={oc.id}
            name={oc.name}
            price={oc.price}
            quantity={oc.quantity}
          />
        ))}

        <TouchableWithoutFeedback
          onPress={() => navigation.navigate("PaymentMethods")}
        >
          <View
            style={{
              padding: Padding,
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <View>
              <View>
                <Text
                  style={{
                    fontFamily: "Quicksand_700Bold",
                    fontSize: 16,
                    color: Purplerose2,
                  }}
                >
                  Phuong thuc thanh toan
                </Text>
                <Text
                  style={{
                    fontFamily: "Quicksand_500Medium",
                    fontSize: 16,
                  }}
                >
                  Thanh toan tien mat
                </Text>
              </View>
            </View>
            <SvgUri source={vectorImage} fill={Purplerose2} />
          </View>
        </TouchableWithoutFeedback>
        <View
          style={{
            padding: Padding,
            backgroundColor: "white",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Quicksand_500Medium",
                fontSize: 16,
                color: Purplerose2,
              }}
            >
              Tam tinh
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 16,
              }}
            >
              {total}đ
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingBottom: 15,
            }}
          >
            <Text
              style={{
                fontFamily: "Quicksand_500Medium",
                fontSize: 16,
                color: Purplerose2,
              }}
            >
              Chi phi van chuyen
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 16,
              }}
            >
              20000đ
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              borderTopWidth: 1,
              paddingTop: 5,
              borderColor: "lightgray",
            }}
          >
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 16,
                color: Purplerose2,
              }}
            >
              Tong tien
            </Text>
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 16,
              }}
            >
              {total + 20000}đ
            </Text>
          </View>
        </View>
      </ScrollView>
      <OrderTotalComponents navigation={navigation} />
    </View>
  );
}
