import { useState } from "react";
import { View, Text, ScrollView, Keyboard } from "react-native";
import { Avatar, Button, Input } from "native-base";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import SvgUri from "react-native-svg-uri";
import { useStore } from "../utils/context";
import { postRequestJson } from "../hooks/api";
import { Purplerose1 } from "../constants";
import LoadingCommentComponents from "./LoadingCommentComponents";

export default function CommentComponents(props) {
  const {
    modelStore: { reactReply, idPost },
  } = useStore();
  const [isLoading, setIsLoading] = useState(false);
  const [dataComment, setDataComment] = useState({
    data: [],
    isSeeMore: false,
  });
  const [react, setReact] = useState({
    quantity: props.like.length,
    isReact: false,
  });
  const addDataComment = (text) => {
    setDataComment((prev) => ({
      ...prev,
      data: [{ _id: "af", selfComment: text }, ...dataComment.data],
    }));
  };

  const handleReply = async () => {
    setIsLoading(true);
    let data = [];
    try {
      data = await postRequestJson("reaction/list-react", {
        id: props.id,
        type: "react",
      });
      data = data.allReactions.filter((dt) => dt.reactionStatus == "Comment");
      setDataComment((prev) => ({ data: [...prev.data, ...data], isSeeMore: true }));
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <ScrollView>
      {/* <Input /> */}
      <View style={{ width: "100%" }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
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
          <View style={{ marginLeft: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              trungntho
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontFamily: "Quicksand_500Medium",
                color: "#5F5F5F",
              }}
            >
              2h30
            </Text>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontFamily: "Quicksand_500Medium",
              fontSize: 14,
              padding: 10,
            }}
          >
            {props?.content}
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
            }}
          >
            <Button
              onPress={() => {
                if (react.isReact) {
                  setReact((prev) => ({
                    isReact: false,
                    quantity: prev.quantity - 1,
                  }));
                } else {
                  setReact((prev) => ({
                    isReact: true,
                    quantity: prev.quantity + 1,
                  }));
                }
                reactReply(idPost, "Like", props.id);
              }}
              variant="ghost"
              width={"20%"}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri
                  width={14}
                  fill={react.isReact ? Purplerose1 : "#444444"}
                  source={like}
                />
                <Text
                  style={{
                    color: react.isReact ? Purplerose1 : "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 11,
                  }}
                >
                  {react.quantity}
                </Text>
              </View>
            </Button>
            <Button
              variant="ghost"
              onPress={() => {
                // addDataComment("asdfsdf ksdkfdk");
                props.focusInput(addDataComment);
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={comment} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 11,
                  }}
                >
                  Trả lời
                </Text>
              </View>
            </Button>
          </View>
          {!(dataComment.isSeeMore || isLoading) && (
            <Button
              variant={"ghost"}
              onPress={handleReply}
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginBottom: 20,
              }}
            >
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                }}
              >
                Xem 121 bình luận
              </Text>
            </Button>
          )}
        </View>
      </View>
      <View style={{ paddingLeft: 20 }}>
        {
          <View>
            {dataComment.data.map((dt) => (
              <CommentComponents
                content={dt.selfComment}
                like={[1, 2]}
                id={dt._id}
                key={dt._id}
                focusInput={props.focusInput}
              />
            ))}
          </View>
        }
        {isLoading && <LoadingCommentComponents num={2} />}
      </View>
    </ScrollView>
  );
}
