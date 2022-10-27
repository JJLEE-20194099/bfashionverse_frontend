import { View, Text, FlatList, ScrollView, Dimensions } from "react-native";
import SliderImageDetailComponents from "../../../components/SliderImageDetailComponents";
import { Rating } from "react-native-ratings";
import ProductComponents from "../../../components/ProductComponents";
import { Button } from "native-base";
import { Purplerose2, Purplerose1, Purplerose3 } from "../../../constants";
import SeeMore from "react-native-see-more-inline";
import { useStore } from "../../../utils/context";
import data from "../../../mockData/product.json";
import AddOrderComponents from "./AddOrderComponents";
export default function ProductDetail({ navigation, route }) {
  const {
    modelStore: { openModelComment }
  } = useStore();
  const {id, price, name} = route.params
  const convertData =(data)=>{
    let dt = []
    for (let index = 0; index < data.length; index=index+2) {
      if(data[index+1]){
        dt.push([data[index], data[index+1]])   
      }
      else dt.push([data[index]])
    }
    return dt
  }
  return (
    <View>
      <ScrollView style={{ height: Dimensions.get("screen").height - 80 }}>
        <View style={{ width: "100%", height: 450 }}>
          <SliderImageDetailComponents
            imgs={[
              {
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              },
              {
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              },
              {
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              },
              {
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              },
            ]}
          />
        </View>
        <View
          style={{
            backgroundColor: "white",
            padding: 10,
            borderBottomLeftRadius: 10,
            borderBottomRightRadius: 10,
          }}
        >
          <Text style={{ fontSize: 16, fontFamily: "Quicksand_500Medium" }}>
            However, my phone can't connect to project, and I don't know why. It
            just loads and fails. This is error message:
          </Text>
          <View style={{ width: 77, paddingTop: 10, paddingBottom: 10 }}>
            <Rating ratingCount={5} imageSize={15} startingValue={4} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 25,
                fontFamily: "Quicksand_700Bold",
                color: Purplerose3,
                marginRight: 20,
                // borderWidth: 1
              }}
            >
              164.000 đ
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Quicksand_500Medium",
                color: "white",
                borderWidth: 1,
                borderColor: Purplerose2,
                backgroundColor: Purplerose1,
                borderRadius: 5,
                padding: 3,
                marginTop: 4,
              }}
            >
              -25%
            </Text>
          </View>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
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
            Thời trang tương tự
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={data}
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
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Quicksand_700Bold",
              marginBottom: 10,
              color: Purplerose2,
            }}
          >
            Mô tả{" "}
          </Text>
          <SeeMore
            numberOfLines={5}
            linkStyle={{ color: "red.100" }}
            style={{
              fontSize: 14,
              fontFamily: "Quicksand_500Medium",
            }}
          >
            With Expo SDK, expo will generate tunnel link to your local ip, or
            you can publish your react native app to their server so you can
            always look your app when you turn off dev mode. I have some problem
            when using local ip. – Rahmat Aligos Aug 8, 2017 at 3:52 With Expo
            SDK, expo will generate tunnel link to your local ip, or you can
            publish your react native app to their server so you can always look
            your app when you turn off dev mode. I have some problem when using
            local ip. – Rahmat Aligos Aug 8, 2017 at 3:52 With Expo SDK, expo
            will generate tunnel link to your local ip, or you can publish your
            react native app to their server so you can always look your app
            when you turn off dev mode. I have some problem when using local ip.
            – Rahmat Aligos Aug 8, 2017 at 3:52
          </SeeMore>
        </View>
        <View
          style={{
            // padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
          }}
        >
          <Button
            onPress={openModelComment}
            variant="ghost"
            _text={{
              // fontSize: 1,
              fontFamily: "Quicksand_700Bold",
              color: Purplerose2,
            }}
          >
            Xem bình luận
          </Button>
        </View>
        <View
          style={{
            padding: 10,
            backgroundColor: "white",
            borderRadius: 10,
            marginTop: 10,
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
            Khám phá thêm
          </Text>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={convertData(data.slice(0,15))}
            renderItem={({ item }) => (
              <View style={{ width: 120, marginRight: 16 }}>
                <View style={{ marginBottom: 20 }}>
                  <ProductComponents
                    padding={0}
                    width={"100%"}
                    height={120}
                    navigation={navigation}
                    name={item[0].name}
                    price={item[0].price}
                    key={item[0].id}
                    id={item[0].id}
                    image={item[0].image}
                  />
                </View>
                {
                 item[1]&&<View>
                  <ProductComponents
                    padding={0}
                    width={"100%"}
                    height={120}
                    navigation={navigation}
                    name={item[1].name}
                    price={item[1].price}
                    key={item[1].id}
                    id={item[1].id}
                    image={item[1].image}
                  />
                </View>

                }
              </View>
            )}
          />
        </View>
      </ScrollView>
      <AddOrderComponents id={id} name={name} price={price} navigation={navigation}/>
    </View>
  );
}
