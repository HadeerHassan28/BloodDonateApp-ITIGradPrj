import { StatusBar } from "expo-status-bar";
import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import Home from "./screens/Home/Home";
import LogOrg from "./screens/LogIn/Organizations/LogOrg";
import LogUser from "./screens/LogIn/User/LogUser";
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
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "#fbf1f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
