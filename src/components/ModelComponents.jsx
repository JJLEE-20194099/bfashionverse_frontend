import React, { useEffect, useRef, useState } from "react";
import CommentComponents from "./CommentComponents";
import {
  Actionsheet,
  Center,
  Spinner,
  TextField,
  Button,
  Avatar,
  Input,
} from "native-base";
import {
  Platform,
  ScrollView,
  View,
  Keyboard,
  Dimensions,
  Text,
  Animated,
  TextInput,
} from "react-native";
import { observer } from "mobx-react";
import { useStore } from "../utils/context";
import { postRequestJson } from "../hooks/api";
import InputKeyboard from "../test/InputKeyboard";
import { Padding, Purplerose1 } from "../constants";
import LoadingCommentComponents from "./LoadingCommentComponents";

const useKeyboardBottomInset = () => {
  const [bottom, setBottom] = useState(0);
  const subscriptions = useRef([]);

  useEffect(() => {
    function onKeyboardChange(e) {
      if (e.endCoordinates) {
        setBottom(e.endCoordinates.height);
      } else setBottom(0);
    }

    if (Platform.OS === "ios") {
      subscriptions.current = [
        Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener("keyboardDidHide", (e) => setBottom(0)),
        Keyboard.addListener("keyboardDidShow", (e) =>
          setBottom(e.endCoordinates.height)
        ),
      ];
    }
    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [setBottom, subscriptions]);

  return bottom;
};

const Comment = observer(({ focusInput }) => {
  const {
    modelStore: { getDataComment, dataComment, loading },
  } = useStore();
  // const [data, setData] = useState([]);
  // const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // (async () => {
    //   try {
    //     // setIsLoading(true);
    //     // console.log(idPost);
    //     let data = await postRequestJson("reaction/list-react", {
    //       id: idPost,
    //       type: "post",
    //     });
    //     data = data.allReactions.filter((dt) => dt.reactionStatus == "Comment");
    //     setIsLoading(false);
    //     setData(data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // })();  
    getDataComment(); 
  }, []);
  return (
    <View style={{ width: "100%", height: "100%" }}>
      {loading ? (
        <LoadingCommentComponents num={3} />
      ) : (
        <ScrollView style={{ height: "100%", padding: Padding }}>
          {dataComment.map((dt) => (
            <View key={dt._id} style={{ width: "100%" }}>
              <CommentComponents
                content={dt.selfComment}
                like={[1, 2]}
                id={dt._id}
                focusInput={focusInput}
              />
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
});

const ModelComponents = observer(() => {
  const {
    modelStore: { isModelComment, closeModelComment, postComment, idPost },
  } = useStore();
  const [text, setText] = useState();
  const [addData, setAddData] = useState();
  const myRef = useRef(null);
  const fadeAnim = useRef(new Animated.Value(10)).current;
  // let addData;
  const subscriptions = useRef([]);
  const focusInput = (cb) => {
    myRef.current.focus();
    setAddData(() => cb);
  };

  useEffect(() => {
    function onKeyboardChange(e) {
      
    }

    if (Platform.OS === "ios") {
      subscriptions.current = [
        Keyboard.addListener("keyboardWillChangeFrame", onKeyboardChange),
      ];
    } else {
      subscriptions.current = [
        Keyboard.addListener("keyboardDidHide", (e) =>
          Animated.timing(fadeAnim, {
            toValue: 10,
            duration: 500,
            useNativeDriver: false,
          }).start()
        ),
        Keyboard.addListener("keyboardDidShow", (e) =>
          Animated.timing(fadeAnim, {
            toValue: 10 + e.endCoordinates.height,
            duration: 0,
            useNativeDriver: false,
          }).start()
        ),
      ];
    }
    return () => {
      subscriptions.current.forEach((subscription) => {
        subscription.remove();
      });
    };
  }, [Animated, subscriptions]);
  return (
    <Actionsheet isOpen={isModelComment} onClose={closeModelComment}>
      <Actionsheet.Content height={Dimensions.get("screen").height * 0.68}>
        <View style={{ height: "100%", position: "relative" }}>
          <View
            style={{
              height: Dimensions.get("screen").height * 0.68,
              width: Dimensions.get("screen").width,
            }}
          >
            <Comment focusInput={focusInput} />
          </View>
          <Animated.View
            style={{
              backgroundColor: "white",
              display: "flex",
              flexDirection: "row",
              width: Dimensions.get("screen").width,
              justifyContent: "space-between",
              alignItems: "center",
              padding: Padding,
              borderTopWidth: 0.5,
              borderColor: "lightgray",
              position: "absolute",
              bottom: fadeAnim,
            }}
          >
            <Avatar
              bg="cyan.500"
              source={{
                uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
              }}
              width="10"
              height={"10"}
            >
              TE
            </Avatar>
            <Input
              style={{ borderRadius: 30 }}
              placeholder="Thêm bình luận"
              w="60%"
              value={text}
              ref={myRef}
              onChangeText={(txt) => setText(txt)}
            />
            {/* <TextInput style={{width: '60%'}} ref={myRef}/> */}
            <Button
              color={Purplerose1}
              onPress={() => {
                Keyboard.dismiss();
                postComment(idPost, text);
                setText("");
                // addData(text)
              }}
            >
              Đăng
            </Button>
          </Animated.View>
        </View>
      </Actionsheet.Content>
    </Actionsheet>
  );
});
export default ModelComponents;
