import { useState } from "react";
import { Text, View } from "react-native";
import SearchComponents from "./SearchComponents";
import TabComponents from "./TabComponents";
import { Purplerose2 } from "../../../constants";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";

const renderScene = SceneMap({
  1: TabComponents,
  2: TabComponents,
  3: TabComponents,
  4: TabComponents,
  5: TabComponents,
  6: TabComponents,
});

export default function MyOrder({route}) {
  const [index, setIndex] = useState(route.params?.index?route.params?.index:0);
  const [routes] = useState([
    { key: "1", title: "Tat ca don" },
    { key: "2", title: "Cho thanh toan" },
    { key: "3", title: "Dang xu ly" },
    { key: "4", title: "Dang van chuyen" },
    { key: "5", title: "Da giao" },
    { key: "6", title: "Da huy" },
  ]);
  return (
    <View style={{ height: "100%" }}>
      <SearchComponents />
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        overScrollMode={"auto"}
        renderTabBar={(props) => (
          <TabBar
            renderLabel={({ route, focused, color }) => (
              <Text style={{ color, fontFamily: "Quicksand_700Bold"}}>
                {route.title}
              </Text>
            )}
            {...props}
            indicatorStyle={{ backgroundColor: Purplerose2 }}
            scrollEnabled={true}
            activeColor={Purplerose2}
            style={{ backgroundColor: "white" }}
            inactiveColor="gray"
          />
        )}
        // initialLayout={{width: 150*5}}
      />
      {/* <Tab.Navigator
        initialLayout={{width: 150*6}}
        tabBarOptions={{
          activeTintColor: '#e91e63',
          labelStyle: { fontSize: 12 },
          style: { backgroundColor: 'white' },
          over
        }}
        screenOptions={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontFamily: "Quicksand_700Bold",
            textTransform: "capitalize",
          },
          tabBarItemStyle: { width: 150 },
        }}
      >
        {Tabs.map((tab) => (
          <Tab.Screen key={tab.id} name={tab.name}>
            {(props) => (
              <TabComponents
                {...props}
                key={tab.id}
                id={tab.id}
                name={tab.name}
              />
            )}
          </Tab.Screen>
        ))}
      </Tab.Navigator> */}
    </View>
  );
}
