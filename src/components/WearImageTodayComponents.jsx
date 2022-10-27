import React, { useRef, useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import { SimpleCarousel } from "@wecraftapps/react-native-simple-carousel";
import { Image } from "native-base";

const WearImageTodayComponents = (props) => {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef(null);
  const quantity = props.imgs.length;
  return (
    <View style={styles.container}>
      <SimpleCarousel ref={carouselRef} setIndex={setIndex}>
        {props.imgs.map((img) => (
          <View style={styles.page} key={index}>
            <Image
              source={{
                uri: img.uri,
              }}
              style={{
                width: "100%",
                height: 200,
                resizeMode: "cover",

                justifyContent: "center",
                alignItems: "center",
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10
              }}
              alt="asdf"
            />
            <Image
              source={{
                uri: img.uri,
              }}
              style={{
                width: "100%",
                height: 200,
                resizeMode: "cover",

                justifyContent: "center",
                alignItems: "center",
              }}
              alt="asdf"
            />
            <Image
              source={{
                uri: img.uri,
              }}
              style={{
                width: "100%",
                height: 200,
                resizeMode: "cover",

                justifyContent: "center",
                alignItems: "center",
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10
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
    width: "90%",
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

export default WearImageTodayComponents;
