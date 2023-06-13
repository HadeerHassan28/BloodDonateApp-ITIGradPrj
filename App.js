import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MyTabs } from "./component/buttonBar/ButtonBar";
import About from "./screens/About/AboutStyle";
import Blogs from "./screens/Blogs/Blogs";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";

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
      <SafeAreaView style={styles.container}>
        <Blogs />
      </SafeAreaView>
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
