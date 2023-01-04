import React, { useEffect } from "react";
import { Text, View } from "react-native";
import PostComponents from "../../../components/PostComponents";
import { observer } from "mobx-react";
import { useStore } from "../../../utils/context";
import { Spinner } from "native-base";
import LoadingPostComponents from "../../../components/LoadingPostComponents";
const OutfitBody = observer(({ navigation, route }) => {
  const id = route.params?.id;
  const {
    myOutfitStore: { fetchData, data, isLoading, clearData },
  } = useStore();
  useEffect(() => {
    fetchData(id);
    return () => {
      clearData();
    };
  }, [id]);
  return (
    <View>
      {isLoading ? (
        <LoadingPostComponents />
      ) : (
        data.map((dt) => (
          <View
            key={dt._id}
            style={{
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: "#D9D9D9",
            }}
          >
            <PostComponents
              navigation={navigation}
              content={dt.description}
              review=""
              name={dt.user.name}
              id={dt._id}
            />
          </View>
        ))
      )}
    </View>
  );
});
export default OutfitBody;
