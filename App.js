//import "react-native-gesture-handler";
import React, { useContext, useState, useEffect } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import DrawerNavigator from "./component/drawer/DrawerNavigator";
import { useColorScheme } from "react-native";
import { EventRegister } from "react-native-event-listeners";
import theme from "./Src/Theme/theme";
import themeContext from "./Src/Theme/themeContext";
import SettingsStackNavigator from "./Src/Navigations/SettingsStackNavigator";
export default function App() {
  // const scheme = useColorScheme();
  // const MyTheme = {
  //   dark: true,
  //   colors: {
  //     primary: "rgb(255, 45, 85)",
  //     background: "black",
  //     card: "rgb(255, 255, 255)",
  //     text: "white",
  //     border: "rgb(199, 199, 204)",
  //     notification: "rgb(255, 69, 58)",
  //   },
  // };
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const listener = EventRegister.addEventListener("ChangeTheme", (data) => {
      setDarkMode(data);
      console.warn(data);
    });
    return () => {
      EventRegister.removeAllListeners(listener);
    };
  }, [darkMode]);
  let [fontsLoaded] = useFonts({
    MontsBold: require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    MontsSemiBold: require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
    MontsRegular: require("./assets/fonts/MontserratAlternates-Regular.ttf"),
    MontsItalic: require("./assets/fonts/MontserratAlternates-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <themeContext.Provider
        value={darkMode === true ? theme.dark : theme.light}
      >
        {/* <ThemeProvider> */}
        <NavigationContainer
          theme={darkMode === true ? DarkTheme : DefaultTheme}
        >
          {/* <SettingsStackNavigator /> */}
          <DrawerNavigator />
        </NavigationContainer>
      </themeContext.Provider>
      {/* </ThemeProvider> */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,

    flex: 1,
  },
});
