import { Text, View, ScrollView, Dimensions } from "react-native";
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
    <View>
      <ScrollView style={{ height: Dimensions.get("screen").height - 180 }}>
        <View
          style={{
            padding: Padding,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
          onTouchEnd={()=>navigation.navigate('DeliveryAddress')}
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
        <DeliveryComponents />
        {orderConfirm.map((oc) => (
          <OrderCartComponents
            key={oc.id}
            name={oc.name}
            price={oc.price}
            quantity={oc.quantity}
          />
        ))}
        {/* <View
          style={{
            marginTop: 10,
            backgroundColor: "white",
            padding: Padding,
            marginBottom: 10,
          }}
        >
          <Text
            style={{
              fontFamily: "Quicksand_700Bold",
              fontSize: 16,
              paddingBottom: 10,
              color: Purplerose2,
            }}
          >
            Phuong thuc giao hang
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "Quicksand_700Bold",
                  fontSize: 16,
                  color: Purplerose2,
                }}
              >
                Giao hang nhanh
              </Text>
              <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 14 }}>
                Nhan hang vao thu 5 tuan nay
              </Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  paddingRight: 8,
                  fontFamily: "Quicksand_700Bold",
                  fontSize: 16,
                }}
              >
                20000đ
              </Text>
              <SvgUri source={vectorImage} fill={Purplerose2} />
            </View>
          </View>
        </View> */}
        <View
          style={{
            padding: Padding,
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 5
          }}
          onTouchEnd={()=>navigation.navigate('PaymentMethods')}
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
