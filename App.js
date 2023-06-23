//import "react-native-gesture-handler";
import React, { useContext } from "react";
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
import './i18n/config';

import { ThemeConetxt, ThemeProvider } from "./Src/Context/ThemeProvider";
import SettingsStackNavigator from "./Src/Navigations/SettingsStackNavigator";
import ChangeLang from "./component/Localization/changeLang";
export default function App() {
  const scheme = useColorScheme();
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
  let [fontsLoaded] = useFonts({
    MontsBold: require("./assets/fonts/MontserratAlternates-Bold.ttf"),
    MontsSemiBold: require("./assets/fonts/MontserratAlternates-SemiBold.ttf"),
    MontsRegular: require("./assets/fonts/MontserratAlternates-Regular.ttf"),
    MontsItalic: require("./assets/fonts/MontserratAlternates-Italic.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  //const { theme } = useContext(ThemeConetxt);

  return (
    <SafeAreaView style={styles.container}>
      {/* <ThemeProvider> */}
      <ChangeLang/> 
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        {/* <SettingsStackNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
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
