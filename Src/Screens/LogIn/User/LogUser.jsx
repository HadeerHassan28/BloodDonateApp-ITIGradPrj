import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import axios from "axios";
import { v4 as uuid } from "uuid";
import { useNavigation } from "@react-navigation/native";
import t from "../../../i18n/i18n";

const LogUser = () => {
  const navigation = useNavigation();

  const [data, setData] = useState({
    id: uuid(),
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    Address: "",
    city: "",
    pNumber: "",
    bloodType: "",
    gender: "",
  });

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isEmailExisting, setIsEmailExisting] = useState(false);

  const handleChange = (name, value) => {
    setIsSubmitted(false);
    setIsEmailExisting(false);
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);

    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "email") {
      setIsEmailValid(isMailValid);
      console.log(true);
    } else if (name === "password") setIsPasswordValid(isEnteredPasswordValid);
  };

  const handleSubmit = () => {
    setIsSubmitted(true);

    axios.get("http://localhost:3002/users").then((res) => {
      const users = res.data;
      const user = users.find(
        (user) => user.email === data.email && user.password === data.password
      );
      if (user) {
        console.warn("Done");
        setIsEmailExisting(true);
        navigation.navigate("userProfile");
      } else console.warn("error");
    });
  };

  return (
    <View style={styles.login_user}>
      <View style={styles.login_user_content}>
        <Text style={styles.heading}>{t("Log In - Users")}</Text>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>{t("Email address")}</Text>
            <TextInput
              style={[
                styles.input,
                isEmailFocused
                  ? { borderColor: "green" }
                  : { borderColor: "red" },
              ]}
              value={data.email}
              name="email"
              placeholder={t("Email address")}
              placeholderTextColor="#888"
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              onChangeText={(value) => handleChange("email", value)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>{t("Password")}</Text>
            <TextInput
              style={[
                styles.input,
                isPasswordFocused
                  ? { borderColor: "green" }
                  : { borderColor: "red" },
              ]}
              value={data.password}
              name="password"
              placeholder={t("Password")}
              placeholderTextColor="#888"
              secureTextEntry
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              onChangeText={(value) => handleChange("password", value)}
            />
          </View>

          <TouchableOpacity style={styles.signInButton} onPress={handleSubmit}>
            <Text style={styles.signInButtonText}>{t("Sign In")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  login_user: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fbf1f0",
  },
  login_user_content: {
    width: "80%",
  },
  heading: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    color: "red",
    marginBottom: 20,
  },
  form: {
    marginBottom: 20,
  },
  formGroup: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
  },
  signInButton: {
    backgroundColor: "red",
    borderRadius: 5,
    padding: 15,
    alignItems: "center",
  },
  signInButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default LogUser;
