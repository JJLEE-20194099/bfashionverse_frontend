import { observer } from "mobx-react";
import React, { useState } from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Padding } from "../../../constants";
import { Radio } from "native-base";
import OrderTotalComponents from "../OrderConfirmation.jsx/OrderTotalComponents";

const delivery = [
  {
    id: 0,
    name: "Giao hang nhanh",
    price: 10233,
  },
  {
    id: 1,
    name: "Giao trong ngay",
    price: 442244,
  },
  {
    id: 2,
    name: "Giao tiet kiem",
    price: 42433,
  },
  {
    id: 3,
    name: "Giao hang nhanh",
    price: 10233,
  },
  {
    id: 4,
    name: "Giao trong ngay",
    price: 442244,
  },
  {
    id: 5,
    name: "Giao tiet kiem",
    price: 42433,
  },
];
const PaymentMethods = () => {
  const [value, setValue] = useState(0);
  return (
    <View>
      <ScrollView
        style={{
          height: Dimensions.get("screen").height - 180,
        }}
      >
        <View style={{ backgroundColor: "white", padding: Padding }}>
          <Text>Chon phuong thuc thanh toan</Text>
          <Radio.Group
            value={value}
            onChange={(nextValue) => {
              setValue(nextValue);
            }}
          >
            {delivery.map((d) => (
              <View
                style={{
                  borderBottomWidth: 1,
                  width: "100%",
                  borderColor: "lightgray",
                }}
              >
                <Radio key={d.id} value={d.id} my={2}>
                  <Text
                    style={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}
                  >
                    {d.name}
                  </Text>
                </Radio>
              </View>
            ))}
          </Radio.Group>
        </View>
        <View style={{backgroundColor: 'white', marginTop: 10, padding: Padding}}>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tam tinh</Text>
            <Text>2393293 d</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tam tinh</Text>
            <Text>2393293 d</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tam tinh</Text>
            <Text>2393293 d</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text>Tam tinh</Text>
            <Text>2393293 d</Text>
          </View>
        </View>
      </ScrollView>
      <OrderTotalComponents />
    </View>
  );
};

export default observer(PaymentMethods);
