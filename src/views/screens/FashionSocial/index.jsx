import { observer } from "mobx-react";
import React, { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";
import { useStore } from "../../../utils/context";
import Demo from "./Demo";
import FashioneSocialHeader from "./FashioneSocialHeader";
import FashionSocialBody from "./FashionSocialBody";
const FashionSocial = observer(({ navigation }) => {
  const {
    fashionSocialStore: { fetchData, isLoading, data, clearData },
  } = useStore();
  const [loading, setLoading] = useState(false);
  const onRefresh = async() => {
    setLoading(true);
    clearData()
    await fetchData()
    setLoading(false)
  };
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={({
        nativeEvent: { contentOffset, layoutMeasurement, contentSize },
      }) => {
        if (
          contentOffset.y + layoutMeasurement.height >
          contentSize.height - (contentSize.height * 2) / data.length
        )
          if (!isLoading) {
            fetchData();
          }
      }}
      refreshControl={
        <RefreshControl
          refreshing={loading}
          onRefresh={onRefresh}
        ></RefreshControl>
      }
    >
      <FashioneSocialHeader />
      <Demo />
      <FashionSocialBody navigation={navigation} />
    </ScrollView>
  );
});

export default FashionSocial;
