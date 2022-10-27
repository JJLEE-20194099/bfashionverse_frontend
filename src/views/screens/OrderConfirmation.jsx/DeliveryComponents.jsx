import React, { useState } from "react";
import { Radio } from "native-base";
import { View, Text } from "react-native";
import { Padding, Purplerose2 } from "../../../constants";

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
];

export default function DeliveryComponents() {
  const [value, setValue] = useState(0);
  return (
    <View
      style={{
        backgroundColor: "#D8BFD8",
        margin: 5,
        padding: Padding,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: Purplerose2,
      }}
    >
      <Text style={{fontFamily: 'Quicksand_500Medium', fontSize: 16, marginBottom: 4}}>Phuong thuc giao hang</Text>
      <Radio.Group
        value={value}
        onChange={(nextValue) => {
          setValue(nextValue);
        }}
      >
        {delivery.map((d) => (
          <Radio key={d.id} value={d.id} my={2}>
            <Text style={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}>
              {d.name}
            </Text>
          </Radio>
        ))}
      </Radio.Group>
    </View>
  );
}
