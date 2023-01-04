import { Input, Button } from "native-base";
import React, { useEffect, useRef } from "react";
import {
  Dimensions,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";
import { useStore } from "../utils/context";

export default function InputKeyboard() {
  const {modelStore: {openModelInput}} = useStore()
  return (
    <View style={{ height: "100%", position: "relative" }}>

      {/* <View style={{ backgroundColor: "red", height: "50%", width: Dimensions.get('screen').width }}><Text>asdf</Text></View> */}
      <View
        style={{
          backgroundColor: "red",
          height: "100%",
          width: Dimensions.get("screen").width,
        }}
      >
        <Text>Đến Hoa Lư hôm nay, em không còn được nhìn thấy những cung điện nguy nga, những thành cao hào sâu… nhưng mỗi tấc đất, mỗi ngọn núi nơi đây đều ghi đậm dấu ấn vẻ vang của một thời kỳ lịch sử oai hùng. Kia là núi Cột Cờ cao hơn 200 mét như một chân đế khổng lồ để vua Đinh dựng cờ khởi nghĩa. Đây là ngôi Sao Khê chảy qua hang Luồn, là nơi thuỷ quân ta luyện tập. Chúng em còn đi thăm hang Muối, hàng Tiền với những nhũ đá lóng lánh. Nghe nói đây là kho dự trữ, nguồn cung cấp quân lương cho Đinh Bộ Lĩnh ngày xưa.Đến Hoa Lư hôm nay, em không còn được nhìn thấy những cung điện nguy nga, những thành cao hào sâu… nhưng mỗi tấc đất, mỗi ngọn núi nơi đây đều ghi đậm dấu ấn vẻ vang của một thời kỳ lịch sử oai hùng. Kia là núi Cột Cờ cao hơn 200 mét như một chân đế khổng lồ để vua Đinh dựng cờ khởi nghĩa. Đây là ngôi Sao Khê chảy qua hang Luồn, là nơi thuỷ quân ta luyện tập. Chúng em còn đi thăm hang Muối, hàng Tiền với những nhũ đá lóng lánh. Nghe nói đây là kho dự trữ, nguồn cung cấp quân lương cho Đinh Bộ Lĩnh ngày xưa.Đến Hoa Lư hôm nay, em không còn được nhìn thấy những cung điện nguy nga, những thành cao hào sâu… nhưng mỗi tấc đất, mỗi ngọn núi nơi đây đều ghi đậm dấu ấn vẻ vang của một thời kỳ lịch sử oai hùng. Kia là núi Cột Cờ cao hơn 200 mét như một chân đế khổng lồ để vua Đinh dựng cờ khởi nghĩa. Đây là ngôi Sao Khê chảy qua hang Luồn, là nơi thuỷ quân ta luyện tập. Chúng em còn đi thăm hang Muối, hàng Tiền với những nhũ đá lóng lánh. Nghe nói đây là kho dự trữ, nguồn cung cấp quân lương cho Đinh Bộ Lĩnh ngày xưa.Đến Hoa Lư hôm nay, em không còn được nhìn thấy những cung điện nguy nga, những thành cao hào sâu… nhưng mỗi tấc đất, mỗi ngọn núi nơi đây đều ghi đậm dấu ấn vẻ vang của một thời kỳ lịch sử oai hùng. Kia là núi Cột Cờ cao hơn 200 mét như một chân đế khổng lồ để vua Đinh dựng cờ khởi nghĩa. Đây là ngôi Sao Khê chảy qua hang Luồn, là nơi thuỷ quân ta luyện tập. Chúng em còn đi thăm hang Muối, hàng Tiền với những nhũ đá lóng lánh. Nghe nói đây là kho dự trữ, nguồn cung cấp quân lương cho Đinh Bộ Lĩnh ngày xưa.</Text>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ position: "absolute", bottom: 0 }}
        keyboardVerticalOffset={50}
      >
        <View
          style={{
            backgroundColor: "white",
            width: Dimensions.get("screen").width,
            padding: 20,
            height: '100%'
          }}
        >
          <TextInput placeholder="Username" />
          {/* <Button onPress={openModelInput}>asdf</Button> */}
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
