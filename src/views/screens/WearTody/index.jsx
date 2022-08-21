import { View, Text,Image,Platform, ScrollView } from "react-native"
import { Button } from "native-base";
import { Select, CheckIcon } from "native-base"
import { useState } from "react";
import WearTodayComponents from "../../../components/WearTodayComponents";
const items= [
      { key: 1, label: 'Outfit 1 (Top, Bottom, Shoe)', keys: ['top','bottom','shoe']},
      { key: 2, label: 'Outfit 2 (Top, Bottom, Shoe, Bag)',keys: ['top','bottom','shoe','bag'] },
      { key: 3, label: 'Outfit 3 (Top ,Outerwear, Bottom, Shoe, Bag)',keys: ['top','outerwear','bottom','shoe','bag'] },
      { key: 4, label: 'Outfit 4 (Top, Dress, Shoe, Bag)',keys: ['top','dress','shoe','bag'] },
      { key: 5, label: 'Outfit 5 (Dress, Shoe, Bag)',keys: ['dress','shoe','bag'] },
      { key: 6, label: 'Outfit 6 Thiết kế bộ độ cho riêng bạn' ,keys: [] },
    ]

export default function WearToday() {
  const [service, setService] = useState(
    'Outfit 1 (Top, Bottom, Shoe)'
  );
  const [keys, setKeys] = useState(["top", "bottom", "shoe"]);

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Select
        fontFamily={"Quicksand_500Medium"}
        backgroundColor="#F7F7F5"
        margin={21}
        shadow={2}
        selectedValue={service}
        onValueChange={(itemValue) => {
          setService(itemValue);
          console.log(items[itemValue[7] - 1].keys);
          setKeys(items[itemValue[7] - 1].keys);
        }}
        _selectedItem={{
          bg: "#f4f4f4",
          endIcon: <CheckIcon size="5" />,
          _text: { fontSize: 14, fontFamily: "Quicksand_500Medium" },
        }}
        _item={{
          _text: { fontSize: 14, fontFamily: "Quicksand_500Medium" },
        }}
      >
        {items.map((item) => (
          <Select.Item
            shadow={2}
            label={item.label}
            key={item.key}
            value={item.label}
          />
        ))}
      </Select>
      <View>
        {keys.map((key) => (
          <WearTodayComponents text={key}/>
        ))}
        
      </View>
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          style={{
            margin: 40,
            borderRadius: 30,
            width: 140,
            backgroundColor: "#6BBAFF",
          }}
          _text={{ fontFamily: "Quicksand_700Bold" }}
        >
          Gợi ý ngay
        </Button>
      </View>
    </ScrollView>
  );
}
