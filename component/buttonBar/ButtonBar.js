import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import rootes from "../../navigateVar/rootes";
import About from "../../screens/About/About";
import Home from "../../screens/Home/Home";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name={rootes.Home} component={Home} />
      <Tab.Screen name={rootes.About} component={About} />
    </Tab.Navigator>
  );
}
