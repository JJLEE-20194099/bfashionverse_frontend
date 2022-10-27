import React from "react";
import { ScrollView } from "react-native";
import PostComponents from "../../../components/PostComponents";
import Demo from "./Demo";
export default function FashionSocial({ navigation }) {
  return (
    <ScrollView>
      <Demo />
      <PostComponents
        navigation={navigation}
        content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
        review="Bộ đồ khiến mình cảm giác tuyệt với trong lần hẹn hò đầu tiên vào mùa
          đông lam"
      />
      <PostComponents
        navigation={navigation}
        content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
        review="Bộ đồ khiến mình cảm giác tuyệt với trong lần hẹn hò đầu tiên vào mùa
          đông lam"
      />
    </ScrollView>
  );
}
