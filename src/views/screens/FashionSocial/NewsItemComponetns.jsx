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
        paddingBottom: 5,
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
      <View
        style={{
          backgroundColor: "#22D3EE",
          width: 20,
          height: 20,
          color: "white",
          borderRadius: 50,
          borderTopLeftRadius: 50,
          position: "absolute",
          right: 10,
          bottom: 25,
        }}
      >
        <Text style={{textAlign: "center"}}>+</Text>
      </View>

      <Text style={{ fontFamily: "Quicksand_500Medium" }}>quancj</Text>
    </View>
  );
}
