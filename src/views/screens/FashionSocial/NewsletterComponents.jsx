import { View, Text, Dimensions } from "react-native";
import StatusComponents from "./StatusComponents";
import { useStore } from "../../../utils/context";
import VideoComponents from "./VideoComponents";

const NewsletterComponents = () => {
  const {
    fashionSocialStore: { setIndex },
  } = useStore();
  return (
    <View
      style={{
        position: "relative",
        height: "100%",
        alignItems: "center",
        backgroundColor: "black",
      }}
      onTouchEnd={(e) => {
        e.nativeEvent.locationX < Dimensions.get("screen").width / 2
          ? setIndex(-1)
          : setIndex(+1);
      }}
    >
      <StatusComponents />
      <VideoComponents />
    </View>
  );
};
export default NewsletterComponents;
