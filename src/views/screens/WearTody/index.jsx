import { View, Text,Image,Platform, ScrollView, Dimensions } from "react-native"
import { Button, Input } from "native-base";
import { Select, CheckIcon } from "native-base"
import { useState } from "react";
import WearTodayComponents from "../../../components/WearTodayComponents";
import WearImageTodayComponents from "../../../components/WearImageTodayComponents";
const items= [
      { key: 1, label: 'Outfit 1 (Top, Bottom, Shoe)', keys: ['top','bottom','shoe']},
      { key: 2, label: 'Outfit 2 (Top, Bottom, Shoe, Bag)',keys: ['top','bottom','shoe','bag'] },
      { key: 3, label: 'Outfit 3 (Top ,Outerwear, Bottom, Shoe, Bag)',keys: ['top','outerwear','bottom','shoe','bag'] },
      { key: 4, label: 'Outfit 4 (Top, Dress, Shoe, Bag)',keys: ['top','dress','shoe','bag'] },
      { key: 5, label: 'Outfit 5 (Dress, Shoe, Bag)',keys: ['dress','shoe','bag'] },
      
    ]
const key = ['top','pullover','outerwear','bottom','shoe','bag','dress']
export default function WearToday() {
  const [service, setService] = useState(
    'Outfit 1 (Top, Bottom, Shoe)'
  );
  const [keys, setKeys] = useState(["top", "bottom", "shoe"]);
  const [isDisplay, setIsDisplay] = useState(true)
  const [text, setText] = useState();
  const [myoutfit, setMyOutfit] = useState({
    key: 6,
    label: "Outfit 6 Thiết kế bộ độ cho riêng bạn",
    keys: [],
  });
  const [isOk, setIsOk] = useState(false)
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <Select
        fontFamily={"Quicksand_700Bold"}
        backgroundColor="#F7F7F5"
        borderWidth={0}
        margin={21}
        shadow={2}
        selectedValue={service}
        onValueChange={(itemValue) => {
          if (itemValue[7] != "6") {
            setService(itemValue);
            setKeys(items[itemValue[7] - 1].keys);
          } else {
            setIsDisplay(false);
            setService(itemValue);
            setKeys([]);
          }
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
        <Select.Item
          shadow={2}
          label={myoutfit.label}
          key={myoutfit.key}
          value={myoutfit.label}
        />
      </Select>
      {isDisplay ? (
        <View>
          {isOk ? (
            <View>
              <View>
                <WearImageTodayComponents
                  imgs={[
                    {
                      uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
                    },
                    {
                      uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
                    },
                    {
                      uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
                    },
                    {
                      uri: "https://icdn.dantri.com.vn/thumb_w/770/2022/02/28/rose-2-1646032942820.png",
                    },
                  ]}
                />
              </View>
              <View style={{ display: "flex", alignItems: "center" }}>
                <Button
                  style={{
                    marginTop: 15,
                    marginBottom: 15,
                    borderRadius: 30,
                    width: 200,
                    backgroundColor: "#6BBAFF",
                  }}
                  _text={{ fontFamily: "Quicksand_700Bold" }}
                  onPress={() => setIsOk(true)}
                >
                  Lưu vào tủ đồ của bạn
                </Button>
              </View>
            </View>
          ) : (
            <View>
              <View>
                {keys.map((key) => (
                  <WearTodayComponents text={{ key: key }} />
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
                  onPress={() => setIsOk(true)}
                >
                  Gợi ý ngay
                </Button>
              </View>
            </View>
          )}
        </View>
      ) : (
        <View>
          <Text
            style={{
              marginLeft: 20,
              marginBottom: 20,
              marginTop: 10,
              fontSize: 14,
              color: "#999999",
              fontFamily: "Quicksand_700Bold",
            }}
          >
            Hãy chọn những danh mục bạn thích
          </Text>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: Dimensions.get("screen").width - 20,
              }}
            >
              {key.map((k) => (
                <View
                  style={{ position: "relative", width: "44%", margin: 10 }}
                >
                  <Button
                    width={"100%"}
                    height={90}
                    borderRadius={20}
                    backgroundColor="white"
                    style={{
                      backgroundColor: keys.includes(k)
                        ? "rgba(217, 217, 217, 1)"
                        : "white",
                      elevation: 20,
                      shadowColor: "#52006A",
                      borderRadius: 8,
                      paddingVertical: 45,
                      paddingHorizontal: 25,
                      marginVertical: 10,
                    }}
                    onPress={() => {
                      if (!keys.includes(k)) {
                        let dt = [...keys];
                        dt.push(k);
                        setKeys(dt);
                      } else {
                        let dt = [...keys];
                        dt = dt.filter((f) => f != k);
                        setKeys(dt);
                      }
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 14,
                        fontFamily: "Quicksand_700Bold",
                        color: keys.includes(k) ? "gray" : "#334555",
                      }}
                    >
                      {k}
                    </Text>
                  </Button>
                  {keys.includes(k) && (
                    <View
                      style={{
                        position: "absolute",
                        right: 5,
                        bottom: 15,
                        backgroundColor: "#1A94FF",
                        borderRadius: 50,
                        padding: 2,
                      }}
                    >
                      <CheckIcon size="3" color="white" />
                    </View>
                  )}
                </View>
              ))}
            </View>
          </View>
          <View
            style={{
              padding: 20,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Input
              placeholder="Đặt tên cho bộ thiết kế"
              style={{
                backgroundColor: "#F7F7F5",
                fontFamily: "Quicksand_500Medium",
              }}
              borderWidth={0}
              value={text}
              onChange={(e) => setText(e.nativeEvent.text)}
            />
            <Button
              _text={{ fontSize: 20, fontFamily: "Quicksand_700Bold" }}
              width={167}
              borderRadius={30}
              marginTop={5}
              backgroundColor={"#1A94FF"}
              isDisabled={!text || keys.length < 1}
              onPress={() => {
                setIsDisplay(true);
                setMyOutfit({
                  key: 6,
                  label: "Outfit 6 " + text,
                  keys: [],
                });
                setService("Outfit 6 " + text);
              }}
            >
              Xác nhận
            </Button>
          </View>
        </View>
      )}
    </ScrollView>
  );
}
