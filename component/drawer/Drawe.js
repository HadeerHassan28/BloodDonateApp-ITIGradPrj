import { View, Text } from "react-native";
import React from "react";
import "react-native-gesture-handler";
import routes from "../../Src/Common/routes";
import About from "../../Src/Screens/About/About";
import Blogs from "../../Src/Screens/Blogs/Blogs";
const Drawer = createDrawerNavigator();
export function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name={routes.about} component={About} />
      <Drawer.Screen name={routes.blogs} component={Blogs} />
    </Drawer.Navigator>
  );
}
