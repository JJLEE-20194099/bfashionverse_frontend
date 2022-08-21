import React from 'react'
import { Image, Actionsheet, useDisclose , Button, Avatar, Input } from "native-base";
import { View, Text, FlatList, Dimensions } from "react-native";
import SvgUri from "react-native-svg-uri";
import like from '../image/likeimage.svg'
import comment from '../image/commentimage.svg'
import seen from '../image/seenimage.svg'
import share from '../image/shareimage.svg'
import CommentComponents from './CommentComponents';

export default function PostComponents() {
    const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View style={{ backgroundColor: "white", padding: 18, marginBottom: 10 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image
            size={50}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: "https://pbs.twimg.com/media/E8-zubHVcAA5Z1V.jpg:large",
            }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              artlynnnn
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginLeft: 2 }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={like} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={comment} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={share} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button
            size={8}
            style={{ backgroundColor: "#1A94FF", borderRadius: 50 }}
          >
            <Text style={{ fontSize: 20, color: "white" }}>+</Text>
          </Button>
          <Text
            style={{
              fontSize: 12,
              fontFamily: "Quicksand_500Medium",
              color: "#BCBCBC",
            }}
          >
            Liên hệ
          </Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 16, fontFamily: "Quicksand_500Medium" }}>
          “Bộ đồ khiến mình cảm giác tuyệt với trong lần hẹn hò đầu tiên vào mùa
          đông lam
        </Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5, 6, 7, 8]}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
              }}
              key={index}
              style={{
                width: 300,
                height: 190,
                resizeMode: "cover",
                margin: 8,
                borderRadius: 8,
              }}
              alt="Alternate Text"
            />
          )}
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
          }}
        >
          <Button onPress={() => console.log("first")} variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={like} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
          <Button onPress={onOpen} variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={comment} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
          <Button variant="ghost">
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri width={14} fill="#444444" source={share} />
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                1,5k
              </Text>
            </View>
          </Button>
        </View>
        <Text style={{ fontSize: 16, fontFamily: "Quicksand_500Medium" }}>
          “Thời trang từ tháng 1 năm 2017 với vẻ ngoài khỏe khoắn có Fuji, Công
          dân của Nhân loại, trang phục thường ngày, Packandgo, áo khoác dạ và
          gearbest”
        </Text>
      </View>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content height={Dimensions.get("screen").height * 0.6}>
          <CommentComponents
            content="If you want to fill a certain portion of the screen, but you don't want to use the flex layout, you can use percentage values in the component's style. Similar to flex dimensions, percentage dimensions require parent with a defined size."
            like={[1, 2]}
            reply={[
              {
                content:
                  " tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.",
                like: [1, 2],
                reply: [
                  {
                    content:
                      "y expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children wil",
                    like: [1, 2],
                    reply: [],
                  },
                  {
                    content:
                      "LLL n only expand to fill available space if its parent has dimensions greater than 0. If a parent does not hav",
                    like: [1, 2],
                    reply: [],
                  },
                ],
              },
              { content: "LLL jlasjdfl", like: [1, 2], reply: [] },
            ]}
          />
        </Actionsheet.Content>
        <View style={{backgroundColor: 'white', display: 'flex', flexDirection: 'row', width: '100%',justifyContent: 'space-between', padding: 15,borderTopWidth: 0.5,borderColor: 'lightgray'}}>
          <Avatar
            bg="cyan.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
            width="10"
            height={"10"}
          >
            TE
          </Avatar>
          <Input style={{borderRadius: 30}} placeholder="Thêm bình luận" w='60%'/>
          <Button>Đăng</Button>
        </View>
      </Actionsheet>
    </View>
  );
}
