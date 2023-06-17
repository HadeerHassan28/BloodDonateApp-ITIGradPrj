//import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import colors from "./Src/Common/Colors";
import { registerFonts } from "./Fonts";

//import DrawerNavigator from "./component/drawer/DrawerNavigator";
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    registerFonts().then(() => setFontsLoaded(true));
  }, []);
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        {/* <DrawerNavigator /> */}
        <Root />
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
