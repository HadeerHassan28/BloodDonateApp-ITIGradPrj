import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import routes from "../../Src/Common/routes";
import About from "../../Src/Screens/About/About";
import Blogs from "../../Src/Screens/Blogs/Blogs";
import Home from "../../Src/Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Volunteers from "../../Src/Screens/Volunteers/Volunteers";
import ContactUs from "../../Src/Screens/ContactUs/ContactUs";
import TermsAndConditions from "../../Src/Screens/Terms/Terms";
import Root from "../../Src/Navigations/root";
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: "#fbf1f0",
          width: "75%",
        },
        drawerActiveTintColor: "black",
        drawerInactiveTintColor: "red",
      }}
    >
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
        screenOptions={{ headerShown: false, activeTintColor: "#fbf1f0" }}
        name={routes.blogs}
        component={Blogs}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.Volunteers}
        component={Volunteers}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.ContactUs}
        component={ContactUs}
      />

      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={routes.TermsAndConditions}
        component={TermsAndConditions}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
