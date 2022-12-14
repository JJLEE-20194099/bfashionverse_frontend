import { Text, TouchableWithoutFeedback, View } from "react-native";
import { Image } from "native-base";

export default function CategoryComponents(props) {
  return (
    <TouchableWithoutFeedback
      onPress={() => props.navigation.navigate("Search", "bala")}
    >
      <View
        style={{
          width: props.width,
          padding: props.padding,
          marginBottom: props.marginBottom,
        }}
      >
        <Image
          shadow={2}
          source={{
            uri: "https://pbs.twimg.com/media/E8-zubHVcAA5Z1V.jpg:large",
          }}
          alt="Alternate Text"
          width={"100%"}
          height={props.height}
          style={{ borderRadius: 16 }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Quicksand_500Medium",
              marginTop: 8,
            }}
          >
            Product Title
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
