import React from "react";
import { useStore } from "../../../utils/context";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Button } from "native-base";
import { Purplerose3 } from "../../../constants";
const OrderTotalComponents = observer(({ navigation }) => {
  const {
    cartStore: { total },
  } = useStore();
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontFamily: "Quicksand_700Bold" }}>
          Tổng tiền
        </Text>
        <Text
          style={{
            fontSize: 18,
            fontFamily: "Quicksand_700Bold",
            color: "red",
          }}
        >{`${total+20000} đ`}</Text>
      </View>
      <Button
        height={50}
        width={200}
        backgroundColor={Purplerose3}
        _text={{ fontFamily: "Quicksand_700Bold" }}
        onPress={() => {
          if (total == 0) {
            setIsOpen(true);
          } else navigation.navigate("MyOrder");
        }}
      >
        Mua hàng
      </Button>
    </View>
  );
});

export default OrderTotalComponents;
