import { Image } from "native-base"
import { View, Text } from "react-native"
import SvgUri from "react-native-svg-uri";
import vectorImage from '../../../image/Vector.svg'

export default function UtilitiesComponents(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: 18,
        marginBottom: 5,
      }}
      onTouchEnd={() => props.navigation.navigate(props.name)}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "white",
          marginBottom: 5,
        }}
      >
        <Image
          size={50}
          alt="fallback text"
          borderRadius={100}
          source={props.image}
        />
        <View style={{ marginLeft: 20 }}>
          <Text
            style={{
              fontSize: 14,
              marginBottom: 8,
              fontFamily: "Quicksand_700Bold",
            }}
          >
            {props.content1}
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Quicksand_500Medium",
              color: "#BCBCBC",
            }}
          >
            {props?.content2}
          </Text>
        </View>
      </View>
      <SvgUri source={vectorImage} />
    </View>
  );
}
