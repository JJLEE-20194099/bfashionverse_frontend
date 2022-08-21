import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {router, screens} from './src/routes'
import { Image, Text, StyleSheet, View, TouchableOpacity } from "react-native";

import {
  useFonts,
  Quicksand_700Bold,
  Quicksand_500Medium,
} from "@expo-google-fonts/quicksand";
import SvgUri from "react-native-svg-uri";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 5,
  },
  logoLeft: {
    height: 32,
    width: 90,
  },
  logoRight: {
    height: 20,
    width: 20,
  },
  headerRight: {
    marginRight: 5,
  },
  styleLogo: {
    width: 20,
    height: 20,
  },
});

const TabMain = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {
        router.map(item => (
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
              tabBarActiveTintColor: "#3089CC",
              tabBarInactiveTintColor: "gray",
            }}
          />
        ))
      }
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
            // options={({ navigation }) => ({
            //   headerLeft: () => (
            //     <View style={styles.headerLeft}>
            //       <SvgUri
            //         source={logoright}
            //         style={styles.logoLeft}
            //         fill="#3089CC"
            //       />
            //     </View>
            //   ),
            //   headerTitle: "",
            //   headerRight: () => (
            //     <TouchableOpacity
            //       style={styles.headerRight}
            //       onPress={() => navigation.navigate("faqs")}
            //     >
            //       <SvgUri style={styles.logoRight} source={logoleft} />
            //     </TouchableOpacity>
            //   ),
            // })}
          />
        {
          screens.map(sc => <Stack.Screen
            key={sc.name}
            name={sc.name}
            component={sc.component}
            options={{ headerShown: true }}
          />)
        }
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}