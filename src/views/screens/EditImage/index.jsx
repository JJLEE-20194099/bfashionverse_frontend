import React, { useEffect, useState } from "react";
import { TouchableOpacity, Image, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

const EditImage = () => {
  const [photo, setPhoto] = useState({});
  useEffect(() => {
    const openPicker = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        selectionLimit: 10,
        quality: 1,
      });
      if (!result.cancelled) {
        setPhoto({ path: result.uri });
      }
    };
    openPicker();
  }, []);
  return (
    <View style={{ width: "100%", height: "100%", position: "relative" }}>
      {photo.path && (
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{
            uri: photo.path,
          }}
        />
      )}
      <TouchableOpacity style={{ position: "absolute", bottom: 10, right: 10 }}>
        <View
          style={{ backgroundColor: "white", padding: 5, borderRadius: 50 }}
        >
          <AntDesign name="right" size={24} color="black" />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EditImage;
