import { Image, Button } from "native-base";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from "react-native";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import SliderImageComponents from "./SliderImageComponents";
import { Padding, Purplerose1, Purplerose2 } from "../constants";
import { useStore } from "../utils/context";
import { useState } from "react";

export default function PostComponents(props) {
  // console.log(props)
  const {
    modelStore: { openModelComment, setIdPost },
    fashionSocialStore: { reactPost },
  } = useStore();
  const [react, setReact] = useState({
    quantity: props.numOfReacts
      ? Object.keys(props.numOfReacts).reduce(
          (prev, curent) => (prev = prev + p[curent]),
          0
        )
      : 0,
    isReact: false,
  });
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
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate("MyOutfit", {
                id: props.id,
              })
            }
          >
            <Image
              size={50}
              alt="fallback text"
              borderRadius={100}
              source={{
                uri: "https://pbs.twimg.com/media/E8-zubHVcAA5Z1V.jpg:large",
              }}
            />
          </TouchableWithoutFeedback>
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              {props.name||"Alice"}
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
                  15k
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
      <TouchableWithoutFeedback
        onPress={() => props.navigation.navigate("SocialDetail")}
      >
        <View>
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
        </View>
      </TouchableWithoutFeedback>
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
          <Button
            onPress={() => {
              reactPost(props.id, "Like");
              if (react.isReact) {
                setReact((prev) => ({
                  ...prev,
                  isReact: !prev.isReact,
                  quantity: prev.quantity - 1,
                }));
              } else {
                setReact((prev) => ({
                  ...prev,
                  isReact: !prev.isReact,
                  quantity: prev.quantity + 1,
                }));
              }
            }}
            variant="ghost"
            width={"33%"}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                marginRight: 14,
              }}
            >
              <SvgUri
                width={14}
                fill={react.isReact ? Purplerose1 : "#444444"}
                source={like}
              />
              <Text
                style={{
                  color: react.isReact ? Purplerose1 : "#444444",
                  fontFamily: "Quicksand_500Medium",
                  marginLeft: 11,
                }}
              >
                {react.quantity}
              </Text>
            </View>
          </Button>
          <Button
            onPress={() => {
              openModelComment();
              setIdPost(props.id);
            }}
            variant="ghost"
            width={"33%"}
          >
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
          <Button variant="ghost" width={"33%"}>
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
