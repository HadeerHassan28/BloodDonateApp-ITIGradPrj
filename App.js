import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";

export default function App() {
  // useEffect(() => {
  //   const loadFonts = async () => {
  //     await Font.loadAsync({
  //       "Montserrat Alternates": require("MontserratAlternates-Regular.ttf"),
  //     });
  //   };

  //   loadFonts();
  // }, []);
  return (
    <NavigationContainer>
      <Root></Root>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
