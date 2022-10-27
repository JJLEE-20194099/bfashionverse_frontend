import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import { SimpleCarousel } from "@wecraftapps/react-native-simple-carousel";
import { Image } from "native-base";
import SeeMore from "react-native-see-more-inline";
import { Padding } from "../constants";
const SliderReviewerComponents = (props) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const quantity = props.imgs.length;
  return (
    <View>
      {/* <Text
        style={{
          paddingLeft: Padding,
          paddingRight: Padding,
          fontSize: 16,
          fontFamily: "Quicksand_500Medium",
        }}
      ></Text> */}
      <View style={{ paddingLeft: Padding, paddingRight: Padding }}>
        <SeeMore
          numberOfLines={3}
          linkStyle={{ color: "red.100" }}
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_500Medium",
          }}
        >
          {props.review[index]}
        </SeeMore>
      </View>
      <View
        style={styles.container}
        onTouchEnd={() => props.navigation.navigate("SocialDetail")}
      >
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
                  height: 200,
                  resizeMode: "cover",
                  borderRadius: 10,
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
      </View>
      <View style={{ paddingLeft: Padding, paddingRight: Padding }}>
        <SeeMore
          numberOfLines={3}
          linkStyle={{ color: "red.100" }}
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_500Medium",
          }}
        >
          {props.content[index]}
        </SeeMore>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  page: {
    width: Dimensions.get('screen').width - 2*Padding,
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
    bottom: 3,
  },
});

export default SliderReviewerComponents;
