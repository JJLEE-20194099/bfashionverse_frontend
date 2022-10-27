import React from 'react'
import { ScrollView, Text, View } from 'react-native'
import {Avatar, Button} from 'native-base'
import PostComponents from '../../../components/PostComponents';

export default function MyOutfit({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ margin: 40, marginTop: 20 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: "center",
          }}
        >
          <Avatar
            bg="indigo.500"
            source={{
              uri: "https://images.unsplash.com/photo-1614289371518-722f2615943d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
            }}
            marginRight={14}
          >
            JB
          </Avatar>
          <Text
            style={{
              fontSize: 14,
              fontFamily: "Quicksand_500Medium",
              color: "#687684",
            }}
          >
            Bạn có muốn giới thiệu thời trang của mình tới tất cả mọi người?
          </Text>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 35,
          }}
        >
          <Button
            style={{ backgroundColor: "#F6F6F6", borderWidth: 0 }}
            _text={{
              color: "black",
              fontSize: 12,
              fontFamily: "Quicksand_700Bold",
            }}
            onPress={() => navigation.navigate("WearToday")}
          >
            Tạo Outfit
          </Button>
          <Button
            style={{ backgroundColor: "#F6F6F6", borderWidth: 0 }}
            _text={{
              color: "black",
              fontSize: 12,
              fontFamily: "Quicksand_700Bold",
            }}
          >
            Review
          </Button>
          <Button
            style={{ backgroundColor: "#F6F6F6", borderWidth: 0 }}
            _text={{
              color: "black",
              fontSize: 12,
              fontFamily: "Quicksand_700Bold",
            }}
          >
            Tạo album
          </Button>
        </View>
      </View>
      <View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#D9D9D9",
          }}
        >
          <PostComponents
            navigation={navigation}
            content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
            review=""
          />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            borderBottomWidth: 1,
            borderColor: "#D9D9D9",
          }}
        >
          <PostComponents
            navigation={navigation}
            content="Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest"
            review=""
          />
        </View>
      </View>
    </ScrollView>
  );
}
