import { ScrollView, Image, View, FlatList, Text } from "react-native";
import CategoryComponents from "../../../components/CategoryComponents";
import ProductComponents from "../../../components/ProductComponents";
import { Purplerose2 } from "../../../constants";
import data from "../../../mockData/product.json";
import { useStore } from "../../../utils/context";
import ProductList from "./ProductList";
export default function Home({ navigation }) {
  const {
    homeStore: { fetchData },
  } = useStore();
  return (
    <ScrollView
      scrollEventThrottle={16}
      onScroll={({
        nativeEvent: { contentOffset, layoutMeasurement, contentSize },
      }) => {
        if (
          contentOffset.y + layoutMeasurement.height >
          contentSize.height - 100
        )
          fetchData();
      }}
    >
      <View
        style={{
          backgroundColor: "white",
          marginBottom: 8,
          marginTop: 2,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
        }}
      >
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: "https://achaumedia.vn/wp-content/uploads/2020/07/chup-anh-thoi-trang-1.jpg",
              }}
              key={index}
              style={{
                width: 340,
                height: 190,
                resizeMode: "cover",
                margin: 8,
                borderRadius: 8,
              }}
            />
          )}
        />
      </View>
      <View
        style={{
          padding: 16,
          marginBottom: 10,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
            color: Purplerose2,
          }}
        >
          Hot deals
        </Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={data.splice(0, 10)}
          renderItem={({ item }) => (
            <View style={{ width: 120, marginRight: 16 }}>
              <ProductComponents
                padding={0}
                width={"100%"}
                height={120}
                navigation={navigation}
                name={item.name}
                price={item.price}
                key={item.id}
                id={item.id}
                image={item.image}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          padding: 16,
          marginBottom: 10,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
            color: Purplerose2,
          }}
        >
          Category
        </Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item }) => (
            <View style={{ width: 120, marginRight: 16 }}>
              <CategoryComponents
                padding={0}
                width={"100%"}
                height={120}
                marginBottom={28}
                navigation={navigation}
              />
              <CategoryComponents
                padding={0}
                width={"100%"}
                height={120}
                marginBottom={28}
                navigation={navigation}
              />
            </View>
          )}
        />
      </View>
      <View
        style={{
          padding: 16,
          backgroundColor: "white",
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
            color: Purplerose2,
          }}
        >
          Featured
        </Text>
        <ProductList />
      </View>
    </ScrollView>
  );
}
