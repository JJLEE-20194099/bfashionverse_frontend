import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { router, screens, screensTransparent } from "./src/routes";
import {  Text, StyleSheet, View } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { Badge } from "react-native-elements";
import { Purplerose2 } from "./src/constants";
import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import SvgUri from "react-native-svg-uri";
import ModelComponents from "./src/components/ModelComponents";
import ModelNewsComponents from "./src/views/screens/FashionSocial/ModelNewsComponents";
import { useEffect } from "react";
import { GetStorage } from "./src/hooks/api";
import ModelInput from "./src/components/ModelInput";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const CartIcon = ({ navigation }) => {
  // const {cartStore: {order}} = useStore()
  return (
    <View onTouchEnd={() => navigation.navigate("Cart")}>
      <AntDesign
        name="shoppingcart"
        size={22}
        color={Purplerose2}
        style={{ marginRight: 5 }}
      />
      <Badge
        value={2}
        containerStyle={{ position: "absolute", top: -6, right: -5 }}
        badgeStyle={{ backgroundColor: "red" }}
      />
    </View>
  );
};

const TabMain = () => {
  useEffect(()=>{
    (
      async()=>{
        await GetStorage()
      }
    )()
  })
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {router.map((item) => (
        <Tab.Screen
          key={item.name}
          name={item.name}
          component={item.component}
          options={{
            tabBarIcon: ({ focused, color }) => (
              <SvgUri source={item.icon} fill={focused ? color : "gray"} />
            ),
            tabBarLabelStyle: {
              textTransform: "none",
              fontSize: 10,
              fontFamily: "Quicksand_700Bold",
            },
            tabBarActiveTintColor: Purplerose2,
            tabBarInactiveTintColor: "gray",
            headerShown: true,
            headerTitle: "",
            header: ({ navigation }) => (
              <View
                style={{
                  backgroundColor: "white",
                  // height: 80,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  // paddingTop: 20,
                  padding: 10,
                  paddingTop: 15,
                  alignContent: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 20,
                    marginLeft: 10,
                    fontFamily: "Quicksand_700Bold",
                    color: Purplerose2,
                  }}
                >
                  {item.name}
                </Text>
                <View
                  style={{
                    marginRight: 15,
                    display: "flex",
                    flexDirection: "row",
                    marginTop: 8,
                  }}
                >
                  <View>
                    <FontAwesome
                      name="bell-o"
                      size={20}
                      color={Purplerose2}
                      style={{ marginRight: 20 }}
                    />
                    <Badge
                      value={2}
                      containerStyle={{
                        position: "absolute",
                        top: -6,
                        right: 10,
                      }}
                      badgeStyle={{ backgroundColor: "red" }}
                    />
                  </View>
                  <CartIcon navigation={navigation} />
                </View>
              </View>
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default function App() {
  let [fontsLoaded] = useFonts({ Quicksand_700Bold, Quicksand_500Medium });
  if (!fontsLoaded) {
    return null;
  }

  return (
    <NativeBaseProvider>
      <ModelComponents />
      <ModelInput />
      <ModelNewsComponents />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="main">
          {/* <Stack.Screen
            name="splash"
            component={SplashScreen}
            options={{ headerShown: false }}
          /> */}
          <Stack.Screen
            name="main"
            component={TabMain}
            options={{ headerShown: false }}
          />
          {screens.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{ headerShown: true, headerTintColor: Purplerose2 }}
            />
          ))}
          {screensTransparent.map((sc) => (
            <Stack.Screen
              key={sc.name}
              name={sc.name}
              component={sc.component}
              options={{
                headerShown: true,
                headerTransparent: true,
                headerTitle: "",
                headerTintColor: Purplerose2,
              }}
            />
          ))}
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
