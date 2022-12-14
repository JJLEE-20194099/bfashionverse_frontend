import { Text, View } from "react-native";
import { Image } from "native-base";

export default function CategorySideBarComponents(props) {
  return (
    <View
      style={{ width: props.width, padding: props.padding }}
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
            color: props.color
          }}
        >
          Product Title
        </Text>
      </View>
    </View>
  );
}
