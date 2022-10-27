
import { View,Text ,FlatList, ScrollView} from "react-native";
import CategoryComponents from "../../../components/CategoryComponents";
import { useState } from "react";
import CategorySideBarComponents from "../../../components/CategorySideBarComponents";


export default function Categories({navigation}) {
  const [index, setIndex] = useState(0)
  const data = [
    {
      key: 0,
      title: "asdf",
      url: "https://kenh14cdn.com/2020/10/3/rose-bi-quyet-so-huu-vong-eo-con-kien-16016906513292077166174.jpg",
    },
    {
      key: 1,
      title: "asdf",
      url: "https://kenh14cdn.com/2020/10/3/rose-bi-quyet-so-huu-vong-eo-con-kien-16016906513292077166174.jpg",
    },
    {
      key: 2,
      title: "asdf",
      url: "https://kenh14cdn.com/2020/10/3/rose-bi-quyet-so-huu-vong-eo-con-kien-16016906513292077166174.jpg",
    },
    {
      key: 3,
      title: "asdf",
      url: "https://kenh14cdn.com/2020/10/3/rose-bi-quyet-so-huu-vong-eo-con-kien-16016906513292077166174.jpg",
    },
    {
      key: 4,
      title: "asdf",
      url: "https://kenh14cdn.com/2020/10/3/rose-bi-quyet-so-huu-vong-eo-con-kien-16016906513292077166174.jpg",
    },
  ];
  const datachild = [1,2,3,4,5,6,7,8,9,11,12,13,14,15]
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 2,
      }}
    >
      <View
        style={{
          // backgroundColor: "white",
          width: "24%",
          borderRightWidth: 1,
          borderColor: "lightgray",
        }}
      >
        {/* {data.map((dt) => (
          <View key={dt.key}>
            <CategoryComponents padding={0} width={"100%"} height={20} />
          </View>
        ))} */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View
              style={{
                backgroundColor: index == item.key ? "white" : "#C1C1C1",
                padding: 2,
                paddingTop: 5,
                paddingBottom: 5,
                borderLeftWidth: index == item.key ? 3 : 0,
                borderLeftColor: "#1A94FF",
                marginBottom: 1,
              }}
              onTouchEnd={() => setIndex(item.key)}
            >
              <CategorySideBarComponents
                color={index == item.key ? "black" : "lightgray"}
                item={item}
                width={"100%"}
                height={20}
              />
            </View>
          )}
        />
      </View>
      <ScrollView
        style={{ backgroundColor: "white", width: "75%", paddingTop: 3 }}
      >
        <Text style={{ padding: 3, fontFamily: "Quicksand_700Bold" }}>
          Thời trang Rose
        </Text>
        <View
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {datachild.map((dt) => (
            <CategoryComponents
              key={dt}
              padding={3}
              width={"50%"}
              height={120}
              marginBottom={10}
              navigation={navigation}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
