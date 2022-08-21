import { ScrollView, Image, View, FlatList, Text } from "react-native";
import CategoryComponents from "../../../components/CategoryComponents";
import ProductComponents from "../../../components/ProductComponents"

export default function Home() {
  const arr = [1,2,3,4,5,6,7,8,9]
  return (
    <ScrollView>
      <View style={{ backgroundColor: "white",marginBottom: 8,marginTop: 2}}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              }}
              key={index}
              style={{
                width: 328,
                height: 190,
                resizeMode: "cover",
                margin: 8,
                borderRadius: 8,
              }}
            />
          )}
        />
      </View>
      <View style={{ padding: 16, marginBottom: 10, backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
          }}
        >
          Hot deals
        </Text>

        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item }) => (
            <View style={{ width: 120, marginRight: 16 }}>
              <ProductComponents padding={0} width={"100%"} height={120} />
            </View>
          )}
        />
      </View>

      <View style={{ padding: 16, marginBottom: 10, backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
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
              <CategoryComponents padding={0} width={"100%"} height={120} />
              <CategoryComponents padding={0} width={"100%"} height={120} />
            </View>
          )}
        />
      </View>
      <View style={{ padding: 16, marginBottom: 10, backgroundColor: "white" }}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_700Bold",
            marginBottom: 16,
          }}
        >
          Featured
        </Text>
        <View
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {arr.map((a) => (
            <ProductComponents
              key={a}
              padding={16}
              width={"50%"}
              height={156}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}
