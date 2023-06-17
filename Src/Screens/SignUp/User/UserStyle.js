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
  form: {
    marginTop: 30,
  },
  formGroup: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 2,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
  },
  inputValid: {
    borderColor: "green",
  },
  inputInvalid: {
    borderColor: "red",
  },
  error: {
    color: "red",
    marginTop: 5,
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
  successMessage: {
    textAlign: "center",
    marginTop: 10,
  },
  errorMessage: {
    textAlign: "center",
    marginTop: 10,
  },
  alert: {
    backgroundColor: "#f8d7da",
    padding: 10,
    marginTop: 30,
    borderRadius: 5,
  },
  alertText: {
    textAlign: "center",
  },
  signInLink: {
    color: "red",
  },
});

export default styles;
