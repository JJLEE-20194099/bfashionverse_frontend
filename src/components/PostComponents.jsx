import {
  Image,
  Button,
} from "native-base";
import { View, Text, Dimensions } from "react-native";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import SliderImageComponents from "./SliderImageComponents";
import { Padding } from "../constants";
import { useStore } from "../utils/context";

export default function PostComponents(props) {
  const {modelStore: {openModelComment}} = useStore()
  return (
    <View
      style={{ backgroundColor: "white", marginBottom: 10, paddingBottom: 10 }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
          paddingTop: Padding,
          paddingLeft: Padding,
          paddingRight: Padding,
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
        {/*    */}
      </View>
      <View>
        {props?.review && (
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Quicksand_500Medium",
              paddingLeft: Padding,
              paddingRight: Padding,
            }}
          >
            {props.review}
          </Text>
        )}
      </View>
      <View onTouchEnd={() => props.navigation.navigate("SocialDetail")}>
        <SliderImageComponents
          imgs={[
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
            {
              uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
            },
          ]}
        />
        {/* <FlatList
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
            /> */}
        {/* )} /> */}
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            paddingLeft: Padding,
            paddingRight: Padding,
            paddingTop: 5,
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
          <Button onPress={openModelComment} variant="ghost">
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
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_500Medium",
            paddingLeft: Padding,
            paddingRight: Padding,
            paddingBottom: Padding,
          }}
        >
          {props.content}
        </Text>
      </View>
    </View>
  );
}
