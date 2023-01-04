import { Skeleton } from "native-base";
import React from "react";
import { ScrollView, View } from "react-native";
import { Padding } from "../constants";

export default function LoadingPostComponents() {
  return (
    <ScrollView>
      <View style={{ width: "100%", padding: Padding }}>
        <View
          style={{
            marginBottom: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Skeleton h="50" w="50" rounded={"full"} marginRight={2} />
          <Skeleton.Text width={"30%"} rounded="md" lines={2} />
        </View>
        <Skeleton height={200} my="4" borderRadius={8} />
        <Skeleton.Text lines={2} my="4" />
      </View>
      <View style={{ width: "100%", padding: Padding }}>
        <View
          style={{
            marginBottom: 2,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Skeleton h="50" w="50" rounded={"full"} marginRight={2} />
          <Skeleton.Text width={"30%"} rounded="md" lines={2} />
        </View>
        <Skeleton height={200} my="4" borderRadius={8} />
        <Skeleton.Text lines={2} my="4" />
      </View>
    </ScrollView>
  );
}
