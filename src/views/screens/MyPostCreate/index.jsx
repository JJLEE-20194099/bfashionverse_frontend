import { Button, Spinner, TextArea } from "native-base";
import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import WearTodayComponents from "../../../components/WearTodayComponents";
import { Padding, Purplerose2 } from "../../../constants";
import { useStore } from "../../../utils/context";

export default function MyPostCreate({ navigation }) {
  const {
    myOutfitStore: { createPost },
  } = useStore();
  const [description, SetDescription] = useState();
  const [loading, setLoading] = useState(false);
  return (
    <ScrollView style={{ flex: 1}}>
      <View style={{ paddingHorizontal: Padding, paddingTop: Padding}}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={{ flex: 1, justifyContent: "space-around" }}>
              <TextArea
                value={description}
                onChangeText={(text) => SetDescription(text)}
                placeholder="Ban dang nghi gi?"
                fontFamily="Quicksand_500Medium"
                fontSize={14}
                backgroundColor='white'
              />
            </View>
          </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
      </View>
      <WearTodayComponents text={{ key: "" }} height={450} />
      <Button
        // margin={10}
        marginY={4}
        marginX={10}
        onPress={async () => {
          setLoading(true);
          await createPost(description);
          setLoading(false);
          navigation.push("MyOutfit");
        }}
        _text={{ fontFamily: "Quicksand_700Bold" }}
        backgroundColor={Purplerose2}
        isLoading={loading}
      >
        Dang
      </Button>
    </ScrollView>
  );
}
