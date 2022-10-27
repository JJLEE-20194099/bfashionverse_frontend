import React from "react";
import { FlatList, View } from "react-native";
import { Purplerose1 } from "../../../constants";
import NewsItemComponetns from "./NewsItemComponetns";

export default function NewsComponents() {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: Purplerose1,
      }}
    >
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8]}
        contentContainerStyle={{alignContent: 'flex-end', alignItems: 'flex-end'}}
        renderItem={({ item }) => <NewsItemComponetns id={item} />}
      />
    </View>
  );
}
