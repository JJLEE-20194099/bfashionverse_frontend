import { ScrollView, Text, View } from "react-native";
import RiviewerComponents from "../../../components/RiviewerComponents";

export default function Reviewer({navigation}) {
  return (
    <ScrollView>
      <RiviewerComponents
        navigation={navigation}
      />
      <RiviewerComponents navigation={navigation} />
    </ScrollView>
  );
}
