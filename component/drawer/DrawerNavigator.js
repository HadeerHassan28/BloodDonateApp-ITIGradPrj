import { createDrawerNavigator } from "@react-navigation/drawer";
import React, { useContext } from "react";
import routes from "../../Src/Common/routes";
import About from "../../Src/Screens/About/About";
import Blogs from "../../Src/Screens/Blogs/Blogs";
import Home from "../../Src/Screens/Home/Home";
import { NavigationContainer } from "@react-navigation/native";
import Volunteers from "../../Src/Screens/Volunteers/Volunteers";
import ContactUs from "../../Src/Screens/ContactUs/ContactUs";
import TermsAndConditions from "../../Src/Screens/Terms/Terms";
import Root from "../../Src/Navigations/root";

import { ThemeConetxt } from "../../Src/Context/ThemeProvider";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Trans, useTranslation } from 'react-i18next';

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ theme }) => {
  const {t} = useTranslation();
  // const { theme, toggleDarkMode } = useContext(ThemeConetxt);
  // const handleToggleTheme = () => {
  //   toggleDarkMode();
  // };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: theme === "dark" ? "#000000" : "#fbf1f0",
          width: "75%",
        },
        drawerActiveTintColor: theme === "dark" ? "#fbf1f0" : "black",
        drawerInactiveTintColor: theme === "dark" ? "#fbf1f0" : "red",
      }}
    >
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={t("Home")}
        component={Root}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={t(routes.about)}
        component={About}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false, activeTintColor: "#fbf1f0" }}
        name={t(routes.blogs)}
        component={Blogs}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={t(routes.Volunteers)}
        component={Volunteers}
      />
      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={t(routes.ContactUs)}
        component={ContactUs}
      />

      <Drawer.Screen
        screenOptions={{ headerShown: false }}
        name={t(routes.TermsAndConditions)}
        component={TermsAndConditions}
      />
      <Drawer.Screen
        name={t("Toggle Theme")}
        component={() => (
          <TouchableOpacity
            title={theme === "dark" ? "Switch to Light" : "Switch to Dark"}
            onPress={handleToggleTheme}
          />
        )}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
