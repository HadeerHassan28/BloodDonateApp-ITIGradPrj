import "react-native-gesture-handler";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import * as Font from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Src/Navigations/root";
import colors from "./Src/Common/Colors";
import DrawerNavigator from "./component/drawer/Drawe";
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
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
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
