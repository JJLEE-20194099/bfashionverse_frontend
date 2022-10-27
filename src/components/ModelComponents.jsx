import React from 'react'
import CommentComponents from "./CommentComponents"
import {
    Actionsheet,
    Button,
    Avatar,
    Input,
  } from "native-base";
import { Dimensions, View } from 'react-native';
import { Padding, Purplerose1 } from '../constants';
import { observer } from 'mobx-react';
import { useStore } from '../utils/context';
const ModelComponents = observer(()=> {
    const {modelStore: {isModelComment, closeModelComment}} = useStore()
     return (
       <Actionsheet isOpen={isModelComment} onClose={closeModelComment}>
           <Actionsheet.Content height={Dimensions.get("screen").height * 0.6}>
             <CommentComponents
               content="If you want to fill a certain portion of the screen, but you don't want to use the flex layout, you can use percentage values in the component's style. Similar to flex dimensions, percentage dimensions require parent with a defined size."
               like={[1, 2]}
               reply={[
                 {
                   content:
                     " tells a component to fill all available space, shared evenly amongst other components with the same parent. The larger the flex given, the higher the ratio of space a component will take compared to its siblings.",
                   like: [1, 2],
                   reply: [
                     {
                       content:
                         "y expand to fill available space if its parent has dimensions greater than 0. If a parent does not have either a fixed width and height or flex, the parent will have dimensions of 0 and the flex children wil",
                       like: [1, 2],
                       reply: [],
                     },
                     {
                       content:
                         "LLL n only expand to fill available space if its parent has dimensions greater than 0. If a parent does not hav",
                       like: [1, 2],
                       reply: [],
                     },
                   ],
                 },
                 { content: "LLL jlasjdfl", like: [1, 2], reply: [] },
               ]}
             />
           </Actionsheet.Content>
           <View
             style={{
               backgroundColor: "white",
               display: "flex",
               flexDirection: "row",
               width: "100%",
               justifyContent: "space-between",
               padding: Padding,
               borderTopWidth: 0.5,
               borderColor: "lightgray",
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
             />
             <Button color={Purplerose1} backgroundColor={Purplerose1}>Đăng</Button>
           </View>
         </Actionsheet>
     )
   }
)
export default ModelComponents