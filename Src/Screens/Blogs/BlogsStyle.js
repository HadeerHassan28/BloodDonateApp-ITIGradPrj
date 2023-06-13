import { StyleSheet } from "react-native";
import colors from "../../Common/Colors";
const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: colors.mainColor,
    marginTop: 16,
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
