import { useNavigation } from "@react-navigation/native";
import { Image } from "native-base";
import React from "react";
import { Text, View } from "react-native";
import { Padding } from "../../../constants";

export default function NewsItemComponetns({ id }) {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: "center",
        padding: Padding,
        position: "relative",
      }}
      onTouchEnd={() => {
        navigation.navigate("EditImage");
      }}
    >
      <Image
        size={62}
        alt="fallback text"
        borderRadius={100}
        source={{
          uri: "https://file.tinnhac.com/resize/600x-/2022/07/22/20220722105253-c4be.jpg",
        }}
      />

      <Text
        style={{
          backgroundColor: "#22D3EE",
          width: 20,
          height: 20,
          color: "white",
          textAlign: "center",
          borderRadius: 50,
          position: "absolute",
          right: 10,
          bottom: 30,
        }}
      >
        +
      </Text>

      <Text style={{ fontFamily: "Quicksand_500Medium" }}>quancj</Text>
    </View>
  );
}
