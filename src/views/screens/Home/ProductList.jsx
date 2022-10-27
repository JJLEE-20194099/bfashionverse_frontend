import React, { useEffect } from "react";
import { View } from "react-native";
import { Skeleton } from "native-base";
import { Purplerose1 } from "../../../constants";
import { useNavigation } from "@react-navigation/native";
import ProductComponents from "../../../components/ProductComponents";
import { observer } from "mobx-react";
import { useStore } from "../../../utils/context";

const ListFooterComponent = () => (
  <View
    style={{
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      backgroundColor: "white",
    }}
  >
    <View style={{ width: "50%", padding: 5 }}>
      <Skeleton height={156} marginBottom={4} borderRadius={8} />
      <Skeleton.Text lines={2} />
      <Skeleton.Text
        width={"30%"}
        my="4"
        rounded="md"
        startColor={Purplerose1}
        lines={1}
      />
    </View>
    <View style={{ width: "50%", padding: 5 }}>
      <Skeleton height={156} marginBottom={4} borderRadius={8} />
      <Skeleton.Text lines={2} />
      <Skeleton.Text
        width={"30%"}
        my="4"
        rounded="md"
        startColor={Purplerose1}
        lines={1}
      />
    </View>
  </View>
);

const ProductList = observer(() => {
  const {
    homeStore: { data, fetchData },
  } = useStore();
  const navigation = useNavigation();
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "white",
      }}
    >
      {data.map((item) => (
        <ProductComponents
          key={item.id}
          padding={5}
          width={"50%"}
          height={156}
          navigation={navigation}
          name={item.name}
          price={item.price}
          id={item.id}
          image={item.image}
        />
      ))}
      <ListFooterComponent />
    </View>
  );
});
export default ProductList;
