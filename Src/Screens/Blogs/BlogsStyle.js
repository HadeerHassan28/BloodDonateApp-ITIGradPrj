import { StyleSheet } from "react-native";
import colors from "../../Common/Colors";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbf1f0",
  },
  h1: {
    fontSize: 24,
    color: colors.mainColor,

    //fontFamily: "Montserrat Alternates",
    textAlign: "center",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 20,
  },
});

export default styles;
