import { StyleSheet } from "react-native";
import React from "react";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  h1: {
    fontSize: 24,
    color: "red",
    marginTop: 16,
    marginBottom: 16,
    //fontFamily: "Montserrat Alternates",
  },
  textCenter: {
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 16,
    marginHorizontal: 16,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    aspectRatio: 1,
    borderRadius: 8,
  },
  textContainer: {
    flex: 2,
    marginLeft: 20,
  },
  description: {
    textAlign: "justify",
    fontSize: 20,
  },
  p: {
    marginLeft: 20,
  },
});
export default styles;
