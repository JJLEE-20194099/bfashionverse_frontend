import { Text, View } from "react-native"
import {Image} from 'native-base'

export default function ProductComponents(props) {
  return (
    <View style={{ width: props.width, padding: props.padding }}>
      <Image
        shadow={2}
        source={{
          uri: "https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2022/03/saint6.jpg",
        }}
        alt="Alternate Text"
        width={"100%"}
        height={props.height}
        style={{ borderRadius: 8 }}
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
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Quicksand_700Bold",
            marginTop: 8,
          }}
        >
          99999 đ
        </Text>
      </View>
    </View>
  );
}
