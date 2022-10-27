import React from "react";
import { useStore } from "../../../utils/context";
import { observer } from "mobx-react";
import { View, Text } from "react-native";
import { Button, AlertDialog } from "native-base";
import { Purplerose2, Purplerose3 } from "../../../constants";
const TotalComponents = observer(({ navigation }) => {
  const {
    cartStore: { total },
  } = useStore();
  const [isOpen, setIsOpen] = React.useState(false);
  const onClose = () => setIsOpen(false);
  // const cancelRef = React.useRef(null);
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
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          {/* <AlertDialog.Header>Delete Customer</AlertDialog.Header> */}
          <AlertDialog.Body>
            <Text
              style={{
                fontSize: 18,
                fontFamily: "Quicksand_500Medium",
                textAlign: "center",
                paddingBottom: 10,
                color: Purplerose2,
              }}
            >
              Ban chua chon san pham nao de mua
            </Text>
            <Button
              variant={"ghost"}
              borderTopWidth="1"
              borderColor={"lightgray"}
              onPress={onClose}
              _text={{
                fontSize: 14,
                fontFamily: "Quicksand_700Bold",
                color: 'black'
              }}
            >
              Ok, Da hieu
            </Button>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
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
        >{`${total} đ`}</Text>
      </View>
      <Button
        height={50}
        width={200}
        backgroundColor={Purplerose3}
        _text={{ fontFamily: "Quicksand_700Bold" }}
        onPress={() => {
          if (total == 0) {
            setIsOpen(true);
          } else navigation.navigate("OrderConfirmation");
        }}
      >
        Đặt hàng
      </Button>
    </View>
  );
});

export default TotalComponents;
