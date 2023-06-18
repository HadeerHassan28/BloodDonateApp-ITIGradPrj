import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import routes from "../../Src/Common/routes";
import About from "../../Src/Screens/About/About";
import Blogs from "../../Src/Screens/Blogs/Blogs";
import Home from "../../Src/Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Volunteers from "../../Src/Screens/Volunteers/Volunteers";
import Root from "../../Src/Navigations/root";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name="Home"
        component={Root}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.about}
        component={About}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.blogs}
        component={Blogs}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.Volunteers}
        component={Volunteers}
      />

      {/* <Drawer.Screen name={routes.} component={Login} />
        <Drawer.Screen name="Signup" component={Signup} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
