import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  h1: {
    fontSize: 24,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    //fontFamily: "Montserrat Alternates",
    textAlign: "center",
  },
  row: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  imageContainer: {
    width: width,
    aspectRatio: 1.5,
    borderRadius: 8,
    marginBottom: 8,
  },
  image: {
    flex: 1,
    borderRadius: 8,
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
