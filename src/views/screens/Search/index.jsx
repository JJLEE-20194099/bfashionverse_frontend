import { Input, Icon } from "native-base";
import { ScrollView, Text, View } from "react-native";
import ProductComponents from "../../../components/ProductComponents";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import data from "../../../mockData/product.json";
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
export default function Search({ route, navigation }) {
  const [value, setValue] = useState(route.params);
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      selectionLimit: 10,
      quality: 1,
    });
    if (!result.cancelled) {
      if (result.selected) setImage(result.selected);
      else setImage([result]);
    }
  };
  return (
    <View>
      <ScrollView>
        <View
          style={{
            padding: 15,
            backgroundColor: "white",
            paddingBottom: 5,
            // borderBottomWidth: 1,
            borderColor: "lightgray",
          }}
        >
          <Input
            placeholder="Tìm kiếm"
            width="100%"
            borderRadius="4"
            value={value}
            backgroundColor={"#E7ECF0"}
            onChange={(e) => setValue(e.nativeEvent.text)}
            px="1"
            fontSize="14"
            borderColor={"#B9DCF7"}
            style={{ fontFamily: "Quicksand_500Medium" }}
            InputLeftElement={
              <Icon
                m="2"
                ml="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="search" />}
              />
            }
            InputRightElement={
              <Icon
                m="2"
                mr="3"
                size="6"
                color="gray.400"
                as={<MaterialIcons name="image" />}
                onPress={() => pickImage()}
              />
            }
          />
        </View>
        <View></View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            padding: 10,
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
        </View>
      </ScrollView>
    </View>
  );
}
