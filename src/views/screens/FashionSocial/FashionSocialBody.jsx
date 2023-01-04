import React, { useEffect } from "react";
import { View } from "react-native";
import PostComponents from "../../../components/PostComponents";
import { observer } from "mobx-react";
import { useStore } from "../../../utils/context";
import LoadingPostComponents from "../../../components/LoadingPostComponents";
const FashionSocialBody = observer(({ navigation }) => {
  const {
    fashionSocialStore: { fetchData,data, isLoading },
  } = useStore();
  useEffect(() => {
    if(data.length == 0){
      fetchData();
    }
  }, []);
  return (
    <View>
      {
        data.map((dt) => (
          <View
            key={dt._id}
          >
            <PostComponents
              navigation={navigation}
              content={dt.description}
              review={dt.review}
              name={dt.user.name}
              id={dt._id}
            />
          </View>
        )
      )}
      <LoadingPostComponents />
    </View>
  );
});
export default FashionSocialBody;
