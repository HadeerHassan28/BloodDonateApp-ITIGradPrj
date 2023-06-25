import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useContext, useState } from "react";
import routes from "../../Src/Common/routes";
import About from "../../Src/Screens/About/About";
import Home from "../../Src/Screens/Home/Home";
import Blogs from "../../Src/Screens/Blogs/Blogs";
import Volunteers from "../../Src/Screens/Volunteers/Volunteers";
import ContactUs from "../../Src/Screens/ContactUs/ContactUs";
import TermsAndConditions from "../../Src/Screens/Terms/Terms";
import Root from "../../Src/Navigations/root";
import t from "../../i18n/i18n";
import themeContext, { ThemeProvider } from "../../Src/Theme/themeContext";
import { TouchableOpacity, View, Text, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { Trans, useTranslation } from "react-i18next";
import SettingsStackNavigator from "../../Src/Navigations/SettingsStackNavigator";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { theme, toggleDarkMode } = useContext(themeContext);
  const handlDark = (value) => {
    setDarkTheme(value);
    EventRegister.emit("ChangeTheme", value);
  };

  const { t } = useTranslation();

  return (
    <ThemeProvider value={darkTheme}>
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
        drawerContent={(props) => {
          return (
            // <View style={styles.drawerContent}>
            //   <View style={styles.switchContainer}>
            //     <Text style={styles.switchLabel}>Dark Mode</Text>
            //     <Switch
            //       value={darkTheme}
            //       onValueChange={handlDark}
            //       style={styles.switchButton}
            //       darkTheme={darkTheme}
            //     />
            //   </View>
            //   {props.children}
            // </View>
            <DrawerContentScrollView {...props}>
              <DrawerItemList {...props} />
              <DrawerItem
                label="Dark theme"
                onPress={() => {
                  handlDark(!darkTheme);
                }}
              />
            </DrawerContentScrollView>
          );
        }}
      >
        <Drawer.Screen
          screenOptions={{ headerShown: false }}
          name={routes.Home}
          component={Home}
        />
        <Drawer.Screen
          screenOptions={{ headerShown: false }}
          name={routes.About}
          component={About}
        />
        <Drawer.Screen
          screenOptions={{ headerShown: false }}
          name={routes.Blogs}
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
    </ThemeProvider>
  );
};
const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  switchLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
  switchButton: {},
});
export default DrawerNavigator;
