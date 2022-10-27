import { Button, Image } from "native-base";
import React from "react";
import { View, Text } from "react-native";
import { Padding, Purplerose2 } from "../../../constants";
export default function MyOrderItem() {
  return (
    <View style={{ padding: Padding, backgroundColor: "white", marginTop: 5 }}>
      <Text
        style={{
          fontFamily: "Quicksand_700Bold",
          color: "gray",
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderColor: 'lightgray'
        }}
      >
        Dang xu ly
      </Text>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "space-between",
          paddingTop: 10,
          paddingBottom: 10,
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
          <Text numberOfLines={2} style={{ fontFamily: "Quicksand_700Bold",paddingBottom: 5 }}>
            May lam sach sieu am xiaomi Lofans, lam sach kinh va do trang suc
          </Text>
          <Text
            style={{
              fontFamily: "Quicksand_500Medium",
              paddingBottom: 5
            }}
          >
            1 san pham
          </Text>
          <Text
            style={{
              fontFamily: "Quicksand_700Bold",
            }}
          >
            234234d
          </Text>
        </View>
      </View>
      <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
        <Button variant={"outline"} width='49%' _text={{color: Purplerose2, fontFamily: 'Quicksand_700Bold'}}>Xem chi tiet</Button>
        <Button variant={"outline"} width='49%' _text={{color: Purplerose2, fontFamily: 'Quicksand_700Bold'}}>Mua lai</Button>
      </View>
    </View>
  );
}
