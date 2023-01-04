import React from "react";
import { Skeleton } from "native-base";
import { ScrollView, View } from "react-native";
import { Padding } from "../constants";

export default function LoadingCommentComponents({num}) {
  return (
    <ScrollView>
      {Array.from(Array(num), (x, index) => index + 1).map((a) => (
        <View key={a} style={{ width: "100%", padding: Padding }}>
          <View
            style={{
              marginBottom: 2,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Skeleton h="44" w="44" rounded={"full"} marginRight={2} />
            <Skeleton.Text width={"30%"} rounded="md" lines={2} />
          </View>
          <Skeleton.Text lines={3} my="4" />
        </View>
      ))}
    </ScrollView>
  );
}
