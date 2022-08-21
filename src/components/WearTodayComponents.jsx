import {useState} from 'react'
import {View,Text, FlatList,Dimensions} from 'react-native'
import { Button,Image } from 'native-base';
import * as ImagePicker from "expo-image-picker";
export default function WearTodayComponents(props) {
    const [image, setImage] = useState([]);

    const pickImage = async () => {
      // No permissions request is necessary for launching the image library
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: false,
        allowsMultipleSelection: true,
        //   aspect: [4, 3],
        quality: 1,
      });

      if (!result.cancelled) {
        if (result.selected) setImage(result.selected);
        else setImage([result]);
      }
    };
      const jsUcfirst = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
      };
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingLeft: 21,
        paddingRight: 21,
      }}
    >
      <Text
        style={{
          fontSize: 14,
          fontFamily: "Quicksand_700Bold",
        }}
      >
        {jsUcfirst(props.text)}
      </Text>
      {image.length > 0 ? (
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={image}
          style={{paddingTop: 8}}
          renderItem={({ item, index }) => (
            <Image
              source={{
                uri: item.uri,
              }}
              key={index}
              style={{
                width: Dimensions.get('screen').width-42,
                height: 200,
                resizeMode: "cover",
                borderRadius: 10,
              }}
              alt='asdf'
            />
          )}
        />
      ) : (
          <Button
            onPress={pickImage}
            height={200}
            width="100%"
            style={{
              borderRadius: 30,
              elevation: 20,
              shadowColor: "#52006A",
              backgroundColor: "white",
              backgroundColor: "white",
              borderRadius: 8,
              paddingVertical: 45,
              paddingHorizontal: 25,
              width: "100%",
              marginVertical: 10,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color: "#27272A",
                backgroundColor: "#6BBAFF",
                borderRadius: 50,
                paddingLeft: 12,
                paddingRight: 12,
              }}
            >
              +
            </Text>
          </Button>
      )}
    </View>
  );
}
