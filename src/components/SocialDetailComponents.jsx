import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import { SimpleCarousel } from "@wecraftapps/react-native-simple-carousel";
import { Button, Image, Actionsheet, useDisclose,Avatar,Input } from "native-base";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import CommentComponents from "./CommentComponents";

const SocialDetailComponents = (props) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const quantity = props.imgs.length;
  const { isOpen, onOpen, onClose } = useDisclose();
  return (
    <View style={styles.container}>
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
        <View
          style={{
            backgroundColor: "white",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between",
            padding: 15,
            borderTopWidth: 0.5,
            borderColor: "lightgray",
          }}
        >
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
          <Input
            style={{ borderRadius: 30 }}
            placeholder="Thêm bình luận"
            w="60%"
          />
          <Button>Đăng</Button>
        </View>
      </Actionsheet>
      <SimpleCarousel ref={carouselRef} setIndex={setIndex}>
        {props.imgs.map((img) => (
          <View style={styles.page}>
            <Image
              source={{
                uri: img.uri,
              }}
              key={index}
              style={{
                width: "100%",
                height: "100%",
                resizeMode: "cover",
                // borderRadius: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
              alt="asdf"
            />
          </View>
        ))}
      </SimpleCarousel>

      <View
        style={[
          styles.paginationContainer,
          { width: quantity * 5 + (quantity - 1) * 6 },
        ]}
      >
        {props.imgs.map((img, idx) => (
          <View
            style={{
              backgroundColor: index === idx ? "#6BBAFF" : "white",
              height: 5,
              width: 5,
              borderRadius: 50,
            }}
          />
        ))}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 4,
        }}
      >
        <Button onPress={() => console.log("first")} variant="ghost">
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   marginRight: 14,
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
        <Button variant="ghost" onPress={() => onOpen()}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              //   marginRight: 14,
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
              //   marginRight: 14,
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 8,
  },
  page: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  paginationContainer: {
    flex: 1,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    bottom: 50,
  },
});

export default SocialDetailComponents;
