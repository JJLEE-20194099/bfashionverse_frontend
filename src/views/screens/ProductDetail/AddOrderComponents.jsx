import { useState } from "react";
import { View, Text } from "react-native";
import { Button, AlertDialog } from "native-base";
import { useStore } from "../../../utils/context";
import { Purplerose1, Purplerose2 } from "../../../constants";
export default function AddOrderComponents({ id, name, price, navigation }) {
  const {
    cartStore: { addItem },
  } = useStore();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => setIsOpen(false);
  return (
    <View style={{ padding: 10, backgroundColor: "white" }}>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                color: Purplerose2,
                fontSize: 18,
              }}
            >
              Hiiiiii
            </Text>
          </AlertDialog.Header>
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
              San pham da duoc them vao gio hang
            </Text>
            <Button
              backgroundColor={Purplerose1}
              onPress={() => {
                onClose();
                navigation.navigate("Cart");
              }}
              _text={{
                fontSize: 14,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              Xem gio hang
            </Button>
          </AlertDialog.Body>
        </AlertDialog.Content>
      </AlertDialog>
      <Button
        height={50}
        backgroundColor={"#B09FCA"}
        _text={{ fontFamily: "Quicksand_700Bold" }}
        onPress={() => {
          addItem(id, name, price);
          setIsOpen(true);
        }}
      >
        Thêm vào giỏ hàng
      </Button>
    </View>
  );
}
