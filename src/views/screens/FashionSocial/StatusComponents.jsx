import React, { useRef, useEffect } from "react";
import { Image, Progress } from "native-base";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { useStore } from "../../../utils/context";
import { Animated } from "react-native";
import { observer } from "mobx-react";
import { FontAwesome } from "@expo/vector-icons";
import { Padding } from "../../../constants";
const StatusComponents = observer(() => {
  const width = Dimensions.get("screen").width;
  const {
    fashionSocialStore: { videos, index },
    modelStore: { closeModelNews },
  } = useStore();
  const StatusItems = () => {
    const myRef = useRef(new Animated.Value(0)).current;
    useEffect(() => {
      Animated.timing(myRef, {
        toValue: (width - 20) / videos.length,
        duration: 3000,
        useNativeDriver: false,
      }).start();
    }, [myRef]);
    return (
      <Animated.Text
        style={{ width: myRef, backgroundColor: "white", borderRadius: 10 }}
      />
    );
  };

  return (
    <View
      style={{
        position: "absolute",
        top: 4,
        width: "100%",
        padding: 2
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        {videos.map((v, idx) =>
          idx == index ? (
            <View
              style={{
                width: (width - 20) / videos.length,
                backgroundColor: "gray",
                height: 4,
                borderRadius: 10,
              }}
            >
              <StatusItems />
            </View>
          ) : (
            <Progress
              width={(width - 20) / videos.length}
              value={idx < index ? 100 : 0}
              size="xs"
              _filledTrack={{ bg: "white" }}
              colorScheme="white"
              backgroundColor={"gray.500"}
              key={idx}
            />
          )
        )}
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: Padding,
        }}
      >
        <View style={{display: 'flex',flexDirection: 'row', alignItems: 'center'}}>
          <Image
            // ref={id!==1?myRef:null}
            size={50}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: "https://file.tinnhac.com/resize/600x-/2022/07/22/20220722105253-c4be.jpg",
            }}
          />
          <Text style={{ color: "white" }}>asfdasdf</Text>
        </View>
        {/* <View
          onTouchEnd={(e) => {
            e.stopPropagation();
            console.log("first");
            closeModelNews();
          }}
          style={{ backgroundColor: "red" }}
        >
        </View> */}
        <TouchableOpacity
          onPress={(e) => {
            e.stopPropagation();
            console.log("first");
            closeModelNews();
          }}
          style={{backgroundColor: 'red'}}
        >
          <FontAwesome name="close" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
});
export default StatusComponents;
