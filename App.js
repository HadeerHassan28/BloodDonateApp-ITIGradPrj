<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
=======
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
>>>>>>> 4df961b04545a2439912fb93da6320d35b13458d
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import colors from "./Src/Common/Colors";
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
<<<<<<< HEAD
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </SafeAreaView>
=======
    <View style={styles.container}>
      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>
    </View>
>>>>>>> 4df961b04545a2439912fb93da6320d35b13458d
  );
}
const styles = StyleSheet.create({
  container: {
<<<<<<< HEAD
    marginTop: Platform.OS === "android" ? 30 : 0,
=======
    backgroundColor: "red",
>>>>>>> 4df961b04545a2439912fb93da6320d35b13458d
    flex: 1,
  },
});
