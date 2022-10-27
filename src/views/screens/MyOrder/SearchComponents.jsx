import { View } from "react-native";
import { Input, Icon } from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";
export default function SearchComponents() {
  const [value, setValue] = useState();
  return (
    <View
      style={{
        margin: 10,
        backgroundColor: "white",
        borderColor: "lightgray",
      }}
    >
      <Input
        placeholder="Tìm kiếm Ma don hang"
        width="100%"
        borderRadius="4"
        value={value}
        backgroundColor={"white"}
        onChange={(e) => setValue(e.nativeEvent.text)}
        fontSize="14"
        padding={0}
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
  );
}
