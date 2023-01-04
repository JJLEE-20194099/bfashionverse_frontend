import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Input, Pressable } from "native-base";
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Padding, Purplerose1 } from "../../../constants";
import { getRequest, GetStorage, postRequestJson, SetStorage } from "../../../hooks/api";
import { useStore } from "../../../utils/context";
export default function AuthPassword({ route }) {
  const {
    authStore: { setUser },
  } = useStore();
  const navigation = useNavigation()
  const { accout } = route.params;
  const [password, setPassword] = useState();
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false)
  const handleLogin = async (accout, password) => {
    // 0969973012
    try {
      setIsLoading(true)
      let data = await postRequestJson("auth/", {
        loginFieldName: accout,
        type: "User",
        password: password,
        loginType: "Phone",
      });
      await SetStorage(data["accessToken"]);
      await GetStorage()
      let user = await getRequest("user/");
      if (user) {
        setIsLoading(false)
        setUser(user);
        navigation.navigate('Account')
      }
    } catch (error) {
      console.log(error);
    }
  };
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
        value={password}
        onChangeText={(value) => setPassword(value)}
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
      <Button
        backgroundColor={Purplerose1}
        onPress={() => handleLogin(accout, password)}
        isLoading={isLoading}
      >
        Dang nhap
      </Button>
      <View style={{ alignItems: "center" }}>
        <Button variant="link">Quen mat khau</Button>
      </View>
    </View>
  );
}
