import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
    <View style={styles.container}>
      <NavigationContainer>
        <Root></Root>
      </NavigationContainer>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
  },
});
