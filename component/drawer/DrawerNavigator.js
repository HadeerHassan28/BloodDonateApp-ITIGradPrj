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
import { createStackNavigator } from "@react-navigation/stack";
import themeContext, { ThemeProvider } from "../../Src/Theme/themeContext";
import { TouchableOpacity, View, Text, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import { Trans, useTranslation } from "react-i18next";
import SettingsStackNavigator from "../../Src/Navigations/SettingsStackNavigator";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness4";
import { Icon } from "react-native-paper";
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const DrawerNavigator = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const { theme } = useContext(themeContext);
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
                // icon={({ color, size, focused }) => {
                //   <Icon
                //     color={color}
                //     size={size}
                //     name={focused ? "heart" : "heart-outline"}
                //   />;
                // }}
                label="Dark Theme"
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
          component={Root}
        />
        <Drawer.Screen
          screenOptions={{ headerShown: true }}
          name={routes.Blogs}
          component={Blogs}
        />
        <Drawer.Screen
          screenOptions={{ headerShown: true }}
          name={routes.ContactUs}
          component={ContactUs}
        />
        <Drawer.Screen
          screenOptions={{ headerShown: true }}
          name={routes.TermsAndConditions}
          component={TermsAndConditions}
<<<<<<< HEAD
        /> */}
        {/* <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            title: "Home",
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="md-home"
                size={size}
                color={focused ? "#7cc" : "#ccc"}
              />
            ),
          }}
        /> */}
=======
        />
>>>>>>> bdedb297878993ed047ec2b8fa63a3862f8dfb75
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
