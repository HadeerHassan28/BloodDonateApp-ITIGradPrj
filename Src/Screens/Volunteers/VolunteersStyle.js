import { Platform, StyleSheet } from "react-native";
import colors from "../../Common/Colors";
import { color } from "react-native-reanimated";
import { Colors } from "react-native/Libraries/NewAppScreen";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "#fbf1f0",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  col: {
    flex: 1,
  },
  justifyContentCenter: {
    justifyContent: "center",
  },
  heading: {
    color: colors.mainColor,
    textAlign: "center",
    fontWeight: "bold",
  },
  paragraph: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 10,
  },
  searchBox: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginTop: 50,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.mainColor,
    paddingVertical: 15,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
  tableTitle: {
    color: colors.mainColor,
    fontSize: 13,
    marginBottom: 13,
    textAlign: "center",
    fontWeight: "bold",
    textAlignVertical: "center",
  },
  tableCell: {
    textAlign: "center",
  },
  title: {
    color: colors.mainColor,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  navigateRes: {
    width: 30,
    textAlign: "center",

    textAlignVertical: "center",
    margin: 5,
  },
  profile: {},
  disNone: {
    display: "none",
  },
  disBlock: {
    textAlign: "center",
    color: colors.mainColor,
  },
  filterWith: {
    color: colors.mainColor,
    fontWeight: "bold",
  },
  select: {
    color: "gray",
  },
  customInput: {},
  searchBox: {
    padding: 15,
    backgroundColor: "#ffffff",
    margin: "0 auto",
    marginTop: 50,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default styles;
