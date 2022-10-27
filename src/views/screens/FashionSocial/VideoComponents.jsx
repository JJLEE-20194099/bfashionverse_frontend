import React from "react";
import { Video } from "expo-av";
import { observer } from "mobx-react";
import { useStore } from "../../../utils/context";
const VideoComponents = observer(() => {
  const {fashionSocialStore: {videos, index, setIndex}}  = useStore()
  return (
    <Video
      source={{
        uri: videos[index],
      }}
      useNativeControls={false}
      shouldPlay={true}
      resizeMode="contain"
      isLooping={false}
      style={{ width: "100%", height: "100%", zIndex: 0 }}
      // onPlaybackStatusUpdate={(stt) => {
      //   if(stt.durationMillis == stt.playableDurationMillis)
      //   {
      //     setIndex(+1)
      //   }
      // }}
    />
  );
});
export default VideoComponents;
