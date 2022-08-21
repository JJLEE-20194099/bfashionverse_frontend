
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Avatar, Button, Input } from "native-base";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import seen from "../image/seenimage.svg";
import share from "../image/shareimage.svg";
import SvgUri from "react-native-svg-uri";

export default function CommentComponents(props) {
  const [reply, setReply] = useState();
  const handleReply = () => {
    if (props.reply.length > 0) {
      if (reply === undefined) {
        let rl = (
          <>
            <View>
              {props.reply.map((rl,index) => (
                <CommentComponents key={index} content={rl.content} like={rl.like} reply={rl.reply} />
              ))}
            </View>
          </>
        );
        setReply(rl);
      } else setReply(undefined);
    }
  };
  return (
    <ScrollView>
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
              justifyContent: 'flex-start',
            }}
          >
            <Button onPress={() => console.log("first")} variant="ghost">
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={like} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 11,
                  }}
                >
                  1,5k
                </Text>
              </View>
            </Button>
            <Button variant="ghost">
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
            <Button variant={'ghost'} onPress={handleReply} style={{display: 'flex', justifyContent: 'flex-start',marginBottom: 20}}>
              <Text
                style={{
                  color: "#444444",
                  fontFamily: "Quicksand_500Medium",
                }}
              >
                Xem 121 bình luận
              </Text>
            </Button>
        </View>
      </View>
      <View style={{ paddingLeft: 20 }}>{reply}</View>
    </ScrollView>
  );
}
