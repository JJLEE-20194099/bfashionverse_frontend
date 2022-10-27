import { View, Text } from 'react-native'
import { Checkbox, Image, Button } from 'native-base'
export default function OrderCartComponents(props) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: 'flex-start',
        padding: 10,
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 2,
        marginBottom: 2,
        borderRadius: 10,
      }}
    >
      <Image
        source={{
          uri: "https://cdnmedia.thethaovanhoa.vn/Upload/leenEplQKY7jsunvYUYgg/files/2022/03/saint6.jpg",
        }}
        alt="Alternate Text"
        width={"40%"}
        height={100}
        borderRadius={10}
        // size={30}
      />

      <View style={{ width: "58%", paddingTop: 5 }}>
        <View>
          <Text style={{ fontFamily: "Quicksand_500Medium" }}>
            {props.name.length>65?props.name.slice(
              0,
              65
            ):props.name}
          </Text>
        </View>
        <View
          style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
        >
            <Text style={{fontFamily: 'Quicksand_500Medium'}}>So luong: {props.quantity}</Text>
            <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16 }}>
              {props.price} đ
            </Text>
        </View>
      </View>
    </View>
  );
}
