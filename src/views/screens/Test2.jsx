import { useState } from "react"
import {View,Text, ScrollView} from 'react-native'
import { Avatar, Button, Input } from "native-base";

export default function Test2(props) {
    const [reply, setReply] = useState()
    const handleReply = () => {
        if (props.reply.length > 0) {
            if (reply === undefined) {
                let rl = (
                  <>
                    <View style={{width: '100%'}}>
                      <Avatar
                        bg="green.500"
                        source={{
                          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                        }}
                      >
                        AJ
                      </Avatar>
                      <View>
                        <Input/>
                        <Button>
                          Submit
                        </Button>
                      </View>
                    </View>
                    <View>
                    {props.reply.map((rl) => (
                      <Test2
                        content={rl.content}
                        like={rl.like}
                        reply={rl.reply}
                      />
                    ))}
                    </View>
                  </>
                );
                setReply(rl)
            }
            else setReply(undefined)
        }
    }
    return (
      <ScrollView>
        <View style={{width: '100%'}}>
          <Avatar
            bg="cyan.500"
            source={{
              uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
            }}
          >
            TE
          </Avatar>
          <View>
            <Text>{props?.content}</Text>
            <View style={{display: 'flex', flexDirection: 'row'}}>
              <Button>Like</Button>
              <Button type="text" onPress={handleReply}>
                Reply
              </Button>
            </View>
          </View>
        </View>
        <View style={{ marginLeft: 30 }}>{reply}</View>
      </ScrollView>
    );
}
