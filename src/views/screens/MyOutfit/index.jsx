import React from "react";
import { ScrollView } from "react-native";
import OutfitHeader from "./OutfitHeader";
import OutfitBody from "./OutfitBody";
const MyOutfit = ({ navigation, route }) => {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <OutfitHeader />
      <OutfitBody navigation={navigation} route={route}/>
    </ScrollView>
  );
};
export default MyOutfit;
