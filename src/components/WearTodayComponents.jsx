import { useState, useEffect } from "react";
import { View, Text, FlatList, Dimensions } from "react-native";
import { Button, Image } from "native-base";
import * as ImagePicker from "expo-image-picker";
import SliderImageComponents from "./SliderImageComponents";
import { useStore } from "../utils/context";
import { Padding } from "../constants";
export default function WearTodayComponents(props) {
  const {
    myOutfitStore: { addImage },
  } = useStore();
  const [image, setImage] = useState([]);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      allowsMultipleSelection: true,
      quality: 1,
    });
    if (!result.cancelled) {
      if (result.selected) {
        setImage(result.selected);
        addImage(result.selected);
      } else {
        setImage([result]);
        addImage(result);
      }
    }
  };
  const jsUcfirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // useEffect(() => {
  //   return setImage([]);
  // }, [props.text]);
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Quicksand_700Bold",
        }}
      >
        {jsUcfirst(props.text.key)}
      </Text>
      {image.length > 0 ? (
        <SliderImageComponents imgs={image} height={props.height} />
      ) : (
        <View style={{paddingHorizontal: Padding, width: '100%'}}>
          <Button
            onPress={pickImage}
            height={props.height ? props.height : 200}
            width="100%"
            padding={10}
            style={{
              borderRadius: 30,
              elevation: 20,
              shadowColor: "#52006A",
              backgroundColor: "white",
              borderRadius: 8,
            }}
          >
            <View
              style={{
                borderRadius: 50,
                width: 40,
                height: 40,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
                backgroundColor: "#6BBAFF",
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                }}
              >
                +
              </Text>
            </View>
          </Button>
        </View>
      )}
    </View>
  );
}
