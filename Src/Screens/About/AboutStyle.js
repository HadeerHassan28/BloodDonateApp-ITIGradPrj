import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import colors from "../../Common/Colors";

const windowWidth = Dimensions.get("window").width;
export const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  columnContainer: {
    flex: 1,
    alignItems: "center",
  },
  aboutContent: {
    alignItems: "center",
  },
  title: {
    color: colors.mainColor,
    fontSize: 16,
    marginBottom: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 8,
    textAlign: "center",
    color: "rgba(0, 0, 0, 0.5)",
  },
  button: {
    backgroundColor: colors.mainColor,
    padding: 8,
    marginBottom: 16,
    marginTop: 16,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: colors.backgroundColor,
    borderRadius: 8,
    height: 170,
    padding: 8,
    width: windowWidth,
    marginBottom: 16,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    marginBottom: 8,
    color: colors.mainColor,
  },

  textContainer: {
    marginBottom: 16,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 8,
    marginBottom: 8,
  },
  iconDescription: {
    textAlign: "center",
    marginBottom: 16,
    color: "rgba(0, 0, 0, 0.5)",
  },
});
export default styles;
