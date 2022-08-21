import { Text,View } from "react-native";
import Test2 from "./Test2";
export default function Test1() {
  return (
    <Test2
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
  );
}
