import { StyleSheet } from "react-native";
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
  },
  aboutContent: {
    alignItems: "center",
  },
  title: {
    color: "red",
    fontSize: 24,
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 8,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    padding: 8,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 1,
    borderRadius: 8,
  },
  sectionTitle: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 16,
  },
  card: {
    backgroundColor: "#f8f8f8",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: "bold",
  },
  cardDescription: {
    textAlign: "center",
  },
  secondaryColor: {
    backgroundColor: "#f8f8f8",
    padding: 16,
    marginTop: 16,
  },
  textContainer: {
    marginBottom: 16,
  },
  secondaryTitle: {
    color: "red",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 8,
  },
  secondaryDescription: {
    fontSize: 16,
    textAlign: "center",
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  iconText: {
    fontSize: 18,
    //fontWeight: "bold",
  },
  iconDescription: {
    textAlign: "center",
  },
});
