import { MaterialIcons } from "@expo/vector-icons";
import { Button, Icon, Input, Pressable } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Padding, Purplerose1 } from "../../../constants";

export default function AuthPassword() {
  const [show, setShow] = useState(false);
  return (
    <View
      style={{ padding: Padding, backgroundColor: "white", height: "100%" }}
    >
      <Text
        style={{
          fontFamily: "Quicksand_700Bold",
          fontSize: 20,
          marginBottom: 20,
        }}
      >
        Nhap mat khau
      </Text>
      <Text style={{ fontFamily: "Quicksand_500Medium" }}>
        Vui long nhap mat khau BfashionVert cua email
      </Text>
      <Text style={{ fontFamily: "Quicksand_700Bold" }}>
        quanchopper1234@gmail.com
      </Text>
      <Input
        variant="underlined"
        marginBottom={5}
        placeholder="Nhap mat khau"
        marginTop={5}
        size="lg"
        type={show ? "text" : "password"}
        InputRightElement={
          <Pressable onPress={() => setShow(!show)}>
            <Icon
              as={
                <MaterialIcons name={show ? "visibility" : "visibility-off"} />
              }
              size={5}
              mr="2"
              color="muted.400"
            />
          </Pressable>
        }
      />
      <Button backgroundColor={Purplerose1}>Dang nhap</Button>
      <View style={{ alignItems: "center" }}>
        <Button variant="link">Quen mat khau</Button>
      </View>
    </View>
  );
}
