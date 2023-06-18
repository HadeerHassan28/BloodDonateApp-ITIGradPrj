//import "react-native-gesture-handler";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import AppLoading from "expo-app-loading";
import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import DrawerNavigator from "./component/drawer/DrawerNavigator";
import SettingsStackNavigator from "./Src/Navigations/SettingsStackNavigator";

export default function App() {
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
      <NavigationContainer>
        {/* <SettingsStackNavigator /> */}
        <DrawerNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    backgroundColor: "red",
    flex: 1,
  },
});
