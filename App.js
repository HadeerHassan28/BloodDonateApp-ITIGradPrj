import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { MyTabs } from "./component/buttonBar/ButtonBar";
import About from "./screens/About/AboutStyle";

export default function App() {
  return (
    <View>
      <About></About>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
