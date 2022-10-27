import { Input } from "native-base";
import React from "react";
import { Dimensions, View } from "react-native";
import InstaStory from "../../../lib/react-native-insta-story-main";
import NewsItemComponetns from "./NewsItemComponetns";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
export default function Demo() {
  const data = [
    {
      user_id: 1,
      user_image:
        "https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg",
      user_name: "Ahmet Çağlar Durmuş",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
        },
      ],
    },
    {
      user_id: 2,
      user_image:
        "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
      user_name: "Test User",
      stories: [
        {
          story_id: 1,
          story_image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 1 swiped"),
        },
        {
          story_id: 2,
          story_image:
            "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
          swipeText: "Custom swipe text for this story",
          onPress: () => console.log("story 2 swiped"),
        },
      ],
    },
  ];
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderColor: "lightgray",
        paddingTop: 5,
      }}
    >
      <NewsItemComponetns id={1} />
      <InstaStory
        data={data}
        duration={10}
        onStart={(item) => console.log(item)}
        onClose={(item) => console.log("close: ", item)}
        customSwipeUpComponent={
          <View
            style={{
              width: "90%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "white",
              padding: 5,
              borderRadius: 30,
            }}
          >
            <Input
              width={Dimensions.get("screen").width - 120}
              borderRadius={30}
              placeholder='Gui tin nhan'
              _input={{fontFamily: 'Quicksand_700Bold',fontSize: 14}}
            />
            <AntDesign name="hearto" size={24} color="black" />
            <Feather
              name="send"
              size={24}
              color="black"
              style={{ paddingRight: 10 }}
            />
          </View>
        }
      />
    </View>
  );
}
