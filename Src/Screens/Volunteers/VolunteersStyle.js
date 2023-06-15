import { Platform, StyleSheet } from "react-native";
import colors from "../../Common/Colors";

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    padding: 20,
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
    color: "red",
    fontSize: 24,
    textAlign: "center",
    marginBottom: 10,
  },
  searchBox: {
    padding: 15,
    backgroundColor: "#ffffff",
    marginTop: 50,
    borderRadius: 5,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignItems: "center",
    border: "1px solid gray",
},
  button: {
    backgroundColor: colors.mainColor,
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default styles;
