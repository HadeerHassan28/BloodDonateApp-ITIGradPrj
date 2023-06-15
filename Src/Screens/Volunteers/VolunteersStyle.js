import { Platform, StyleSheet } from "react-native";

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
  button: {
    backgroundColor: "red",
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
