import { useState } from "react";
import {
  Image,
  Button,
  Input,
  Modal,
  AddIcon,
  TextArea,
  CheckIcon
} from "native-base";
import { View, Text } from "react-native";
import SvgUri from "react-native-svg-uri";
import like from "../image/likeimage.svg";
import comment from "../image/commentimage.svg";
import share from "../image/shareimage.svg";
import SliderReviewerComponents from "./SliderReviewerComponents";
import { Padding } from "../constants";
import { useStore } from "../utils/context";

export default function RiviewerComponents(props) {
  const {modelStore: {openModelComment}} = useStore()
  const [showModal, setShowModal] = useState(false);
  const [showModalResult, setShowModalResult] = useState(false)
  return (
    <View style={{ backgroundColor: "white", marginBottom: 10 }}>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              Liên hệ với reviewer
            </Text>
            <View>
              <Text
                style={{
                  fontSize: 14,
                  fontFamily: "Quicksand_500Medium",
                  marginTop: 10,
                }}
              >
                Người liên hệ
              </Text>
              <Input
                placeholder="Tên của shop"
                style={{ backgroundColor: "#F7F7F5" }}
                variant="unstyled"
                width={"100%"}
                marginTop={5}
                fontSize={12}
                fontFamily={"Quicksand_500Medium"}
              />
              <Input
                placeholder="Link dẫn tới shop"
                style={{ backgroundColor: "#F7F7F5" }}
                variant="unstyled"
                marginTop={5}
                fontSize={12}
                fontFamily={"Quicksand_500Medium"}
              />
              <Input
                placeholder="Số điện thoại của shop"
                style={{ backgroundColor: "#F7F7F5" }}
                variant="unstyled"
                marginTop={5}
                fontSize={12}
                fontFamily={"Quicksand_500Medium"}
              />
              <TextArea
                placeholder="Nội dung miêu tả công việc"
                style={{ backgroundColor: "#F7F7F5" }}
                variant="unstyled"
                marginTop={5}
                fontSize={12}
                fontFamily={"Quicksand_500Medium"}
              />
            </View>
            <Button
              style={{
                marginTop: 15,
                backgroundColor: "#1A94FF",
                borderRadius: 30,
              }}
              _text={{ fontFamily: "Quicksand_500Medium", fontSize: 16 }}
              width={87}
              onTouchStart={() => {
                setShowModal(false);
                setShowModalResult(true);
              }}
            >
              Gửi
            </Button>
          </View>
        </Modal.Content>
      </Modal>
      <Modal isOpen={showModalResult} onClose={() => setShowModalResult(false)}>
        <Modal.Content>
          <View
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <View
              style={{
                backgroundColor: "#1A94FF",
                padding: 10,
                borderRadius: 50,
              }}
            >
              <CheckIcon size="20" color="white" />
            </View>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Quicksand_500Medium",
                marginTop: 35,
              }}
            >
              Bạn đã liện hệ với{" "}
              <Text
                style={{ color: "#1A94FF", fontFamily: "Quicksand_700Bold" }}
              >
                artlynnnn
              </Text>
            </Text>
            <Text style={{ fontSize: 16, fontFamily: "Quicksand_500Medium" }}>
              thành công
            </Text>
            <Button
              _text={{ fontSize: 10, fontFamily: "Quicksand_700Bold" }}
              marginTop={35}
              backgroundColor={"#1A94FF"}
              borderRadius={30}
            >
              Theo dõi các reviewer của bạn
            </Button>
            <Button
              variant={"ghost"}
              _text={{
                fontSize: 10,
                fontFamily: "Quicksand_700Bold",
                color: "#1A94FF",
              }}
              marginTop={2}
              onPress={()=>setShowModalResult(false)}
            >
              Quay về trang danh sách reviewer
            </Button>
          </View>
        </Modal.Content>
      </Modal>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 15,
          paddingTop: Padding,
          paddingLeft: Padding,
          paddingRight: Padding,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 5,
          }}
        >
          <Image
            size={50}
            alt="fallback text"
            borderRadius={100}
            source={{
              uri: "https://pbs.twimg.com/media/E8-zubHVcAA5Z1V.jpg:large",
            }}
          />
          <View style={{ marginLeft: 14 }}>
            <Text
              style={{
                fontSize: 16,
                marginBottom: 8,
                fontFamily: "Quicksand_700Bold",
              }}
            >
              artlynnnn
            </Text>
            <View
              style={{ display: "flex", flexDirection: "row", marginLeft: 2 }}
            >
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
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
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
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  marginRight: 14,
                }}
              >
                <SvgUri width={14} fill="#444444" source={share} />
                <Text
                  style={{
                    color: "#444444",
                    fontFamily: "Quicksand_500Medium",
                    marginLeft: 6,
                  }}
                >
                  1,5k
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <View
            style={{ backgroundColor: "#1A94FF", padding: 3, borderRadius: 50 }}
            onTouchStart={() => setShowModal(true)}
          >
            <AddIcon color="white" />
          </View>
          <Text
            style={{
              fontFamily: "Quicksand_500Medium",
              color: "#484848",
              fontSize: 12,
            }}
          >
            Liên hệ
          </Text>
        </View>
        {/*    */}
      </View>
      <View>
        <SliderReviewerComponents
          navigation={props.navigation}
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
          content={[
            "Note that while Hermes will be enabled by default in new React Native projects, support for other engines will continu",
            "TTI, or time to interactive, is the duration of time from the app being launched to the user being able to interact with it. For this benchmark, we define it as the time from pressing the app icon to the first screen being rendered. We also show screen recordings of starting up Mattermo",
            " measured as APK size on android and IPA size on iOS.The memory consumption data wa",
            "aven’t had the time to look into the New React Native Architecture (the Fabric Renderer and the TurboModule system), ther",
          ]}
          review={[
            "we launched the React Native New Architecture Working Group on GitHub, a discussion only repository to coordinate and support the rollout of the New Architecture across the ecosystem.",
            "We envision this working group as a space where the community can meet, share ideas, and discuss challenges during the adoption of the New Architecture. Moreover, we're going to use this working group to share information and updates with the wider community for the sake of transparency.",
            "To keep the discussion focused, we decided to have this working group open to read publicly and restricted to write only for approved users.",
            "If you wish to join the conversation, you can fill in this form to either apply or nominate someone that you think would be a valuable addition to the discussion.",
          ]}
        />
      </View>
      <View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 5,
            paddingLeft: Padding,
            paddingRight: Padding,
            paddingTop: 5,
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
          <Button onPress={openModelComment} variant="ghost">
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
              <SvgUri width={14} fill="#444444" source={share} />
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
        </View>
        <Text
          style={{
            fontSize: 16,
            fontFamily: "Quicksand_500Medium",
            paddingLeft: Padding,
            paddingRight: Padding,
            // paddingBottom: Padding,
          }}
        >
          {props.content}
        </Text>
      </View>
    </View>
  );
}
