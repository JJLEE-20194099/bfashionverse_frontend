import { Text, View } from "react-native"
import {Image} from 'native-base'
import { Purplerose1, Purplerose2 } from "../constants";
export default function ProductComponents(props) {
  return (
    <View
      style={{ width: props.width, padding: props.padding }}
      onTouchEnd={() => props.navigation.push("ProductDetail", {id: props.id, name: props.name, price: props.price})}
    >
      <Image
        shadow={2}
        source={{
          uri: props.image?props.image:"https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2022/03/saint6.jpg",
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
            minHeight: 40
          }}
          numberOfLines={2}
        >
          {props.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "Quicksand_700Bold",
            marginTop: 8,
            color: Purplerose2
          }}
        >
          {props.price} đ
        </Text>
      </View>
    </View>
  );
}
