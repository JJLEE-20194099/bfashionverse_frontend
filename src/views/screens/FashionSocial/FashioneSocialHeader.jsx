import { useNavigation } from "@react-navigation/native";
import { Avatar } from "native-base";
import React from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Padding } from "../../../constants";

const FashioneSocialHeader = () => {
    const navigation = useNavigation()
  return (
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('MyPostCreate')}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "white",
          alignItems: "center",
          padding: Padding,
          marginBottom: 4,
        }}
      >
        <Avatar
          style={{ marginRight: 10 }}
          bg="indigo.500"
          source={{
            uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
          }}
        >
          JB
        </Avatar>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Quicksand_500Medium",
            color: "#687684",
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          Bạn có muốn giới thiệu thời trang của mình tới tất cả mọi người?
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FashioneSocialHeader;
