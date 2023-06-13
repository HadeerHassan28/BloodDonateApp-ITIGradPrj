import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import rootes from "../../navigateVar/rootes";
import About from "../../screens/About/About";
import Home from "../../screens/Home/Home";
import Blogs from "../../screens/Blogs/Blogs";

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Blogs" component={Blogs} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
}
