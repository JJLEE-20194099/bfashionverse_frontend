import { AntDesign } from "@expo/vector-icons";
import { Avatar, Button, Image } from "native-base";
import { Text, View, ScrollView } from "react-native";
import {
  Padding,
  Purplerose1,
  Purplerose2,
  Purplerose3,
} from "../../../constants";
import vectorImage from "../../../image/Vector.svg";
import chatIcon from "../../../image/chatIcon.png";
import headphoneIcon from "../../../image/headphoneIcon.png";
import SvgUri from "react-native-svg-uri";
import AccountComponents from "./AccountComponents";
export default function Account({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          backgroundColor: "white",
          padding: 10,
          margin: 10,
          borderRadius: 10,
        }}
      >
        <AccountComponents />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <View
            style={{
              alignItems: "center",
              width: "33%",
              borderRightWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <Text
              style={{ fontFamily: "Quicksand_700Bold", color: Purplerose2 }}
            >
              Astra
            </Text>
            <Text
              style={{ fontFamily: "Quicksand_500Medium", color: Purplerose3 }}
            >
              234
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              width: "33%",
              borderRightWidth: 1,
              borderColor: "lightgray",
            }}
          >
            <Text
              style={{ fontFamily: "Quicksand_700Bold", color: Purplerose2 }}
            >
              Xu
            </Text>
            <Text
              style={{ fontFamily: "Quicksand_500Medium", color: Purplerose3 }}
            >
              234
            </Text>
          </View>
          <View style={{ alignItems: "center", width: "33%" }}>
            <Text
              style={{ fontFamily: "Quicksand_700Bold", color: Purplerose2 }}
            >
              Giam gia
            </Text>
            <Text
              style={{ fontFamily: "Quicksand_500Medium", color: Purplerose3 }}
            >
              234
            </Text>
          </View>
        </View>
      </View>
      <View style={{ backgroundColor: "white", padding: 10, marginBottom: 10 }}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Text style={{ fontFamily: "Quicksand_700Bold", fontSize: 16 }}>
            Đơn hàng của tôi
          </Text>
          <Button
            variant="ghost"
            _text={{ fontFamily: "Quicksand_500Medium", color: Purplerose3 }}
            onPress={() => navigation.navigate("MyOrder")}
          >
            Xem lịch sử
          </Button>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View
            style={{ width: "19%", alignItems: "center" }}
            onTouchEnd={() => navigation.navigate("MyOrder", { index: 1 })}
          >
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Cho thanh toan
            </Text>
          </View>
          <View
            style={{ width: "19%", alignItems: "center" }}
            onTouchEnd={() => navigation.navigate("MyOrder", { index: 2 })}
          >
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Dang xu ly
            </Text>
          </View>
          <View
            style={{ width: "19%", alignItems: "center" }}
            onTouchEnd={() => navigation.navigate("MyOrder", { index: 3 })}
          >
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Dang van chuyen
            </Text>
          </View>
          <View
            style={{ width: "19%", alignItems: "center" }}
            onTouchEnd={() => navigation.navigate("MyOrder", { index: 4 })}
          >
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Da giao
            </Text>
          </View>
          <View
            style={{ width: "19%", alignItems: "center" }}
            onTouchEnd={() => navigation.navigate("MyOrder", { index: 5 })}
          >
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Doi tra
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          padding: Padding,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={chatIcon}
            size={35}
            alt="fallback text"
            borderRadius={100}
          />
          <Text
            style={{
              fontFamily: "Quicksand_700Bold",
              fontSize: 16,
              paddingLeft: 5,
              color: Purplerose2,
            }}
          >
            Đánh giá sản phẩm
          </Text>
        </View>
        <SvgUri source={vectorImage} fill={Purplerose2} />
      </View>
      <View
        style={{
          padding: Padding,
          backgroundColor: "white",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            source={headphoneIcon}
            size={35}
            alt="fallback text"
            borderRadius={100}
          />
          <Text
            style={{
              fontFamily: "Quicksand_700Bold",
              fontSize: 16,
              paddingLeft: 5,
              color: Purplerose2,
            }}
          >
            Trung tâm trợ giúp
          </Text>
        </View>
        <SvgUri source={vectorImage} fill={Purplerose2} />
      </View>
      <View
        style={{ marginTop: 10, backgroundColor: "white", padding: Padding }}
      >
        <Text
          style={{
            fontFamily: "Quicksand_700Bold",
            fontSize: 16,
            color: Purplerose2,
            paddingBottom: 10,
          }}
        >
          Quan tam
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Da xem
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Yeu thich
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Mua lai
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Theo doi
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 10,
          backgroundColor: "white",
          padding: Padding,
          marginBottom: 5,
        }}
      >
        <Text
          style={{
            fontFamily: "Quicksand_700Bold",
            fontSize: 16,
            color: Purplerose2,
            paddingBottom: 10,
          }}
        >
          Tien ich khac
        </Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              BookCare
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              So dia chi
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Thong tin thanh toan
            </Text>
          </View>
          <View style={{ width: "24%", alignItems: "center" }}>
            <AntDesign
              name="inbox"
              size={40}
              color={Purplerose3}
              style={{
                borderColor: Purplerose1,
                borderWidth: 1,
                padding: 5,
                borderRadius: 10,
              }}
            />
            <Text
              style={{
                fontFamily: "Quicksand_700Bold",
                fontSize: 13,
                paddingTop: 5,
                textAlign: "center",
              }}
            >
              Mua sau
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
