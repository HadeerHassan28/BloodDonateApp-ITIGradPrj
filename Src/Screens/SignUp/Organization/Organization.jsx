import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import uuid from "react-native-uuid";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import t from "../../../i18n/i18n";

const OrganizationSignUp = () => {
  const [data, setData] = useState({
    id: uuid,
    oName: "",
    email: "",
    password: "",
    confirmPassword: "",
    oCode: "",
    Address: "",
    pNumber: "",
    sector: "",
  });
  const [isOrgNameIsValid, setIsOrgNameIsValid] = useState(false);
  const [isOrgNameIsFocused, setIsOrgNameIsFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] =
    useState(false);

  const [isOrganiationCodeValid, setIsOrganiationCodeValid] = useState(false);
  const [isOrganiationCodeFocused, setIsOrganiationCodeFocused] =
    useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);

  const navigation = useNavigation();
  const handleChange = (name, value) => {
    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const orgCodeRegex = /^\d{6}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);
    const isPassWordConfirmed = value.match(data.password);
    const isEnteredCodeValid = orgCodeRegex.test(value);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    setData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "oName") {
      setIsOrgNameIsValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "oCode") {
      setIsOrganiationCodeValid(isEnteredCodeValid);
    } else if (name === "confirmPassword") {
      setIsConfirmedPasswordValid(isPassWordConfirmed);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    } else if (name === "pNumber") {
      setIsPnumberValid(isEnteredPhoneNumberValid);
    }
  };
  const handlePickerChange = (name, value) => {
    handleChange(name, value);
  };
  const handleSubmit = () => {
    axios
      .get("http://localhost:3000/org")
      .then((res) => {
        const users = res.data;
        //console.warn(users);
        const user = users.find(
          (user) =>
            user.OrganizationCode === data.OrganizationCode &&
            user.password === data.password
        );
        if (user) {
          console.log("this account is existed");
        } else {
          if (
            isOrgNameIsValid &&
            isPasswordValid &&
            isConfirmedPasswordValid &&
            isAddressValid &&
            isOrganiationCodeValid
          ) {
            //! get data from thr form and add it to the json data:
            const newUser = {
              id: uuid,
              orgName: data.oName,
              password: data.password,
              confirmPassword: data.confirmPassword,
              OrganizationCode: data.oCode,
              Address: data.Address,
              sector: data.sector,
              pNumber: data.pNumber,
            };
            axios
              .post("http://localhost:3000/org", newUser)
              .then((res) => {
                // console.log(res.data);
                console.warn("Done post");
                //navigation.navigate("LogOrg");
              })
              .catch((err) => console.warn("err"));
          } else console.warn("Your Form Is Not Valid");
        }
      })
      .catch((err) => console.warn("get", err));
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#fbf1f0" }}>
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text
          style={{
            textAlign: "center",
            color: "red",
            marginVertical: 20,
            fontSize: 24,
          }}
        >
          {t("Sign Up Your Organization To Save a Life")}
        </Text>
        <View style={{ marginHorizontal: 20 }}>
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isOrgNameIsFocused && isOrgNameIsValid ? "green" : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Organization Name")}
            onChangeText={(value) => handleChange("oName", value)}
            value={data.oName}
            onFocus={() => setIsOrgNameIsFocused(true)}
            onBlur={() => setIsOrgNameIsFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor: isEmailFocused && isEmailValid ? "green" : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Organization Email")}
            onChangeText={(value) => handleChange("email", value)}
            value={data.email}
            onFocus={() => setIsEmailFocused(true)}
            onBlur={() => setIsEmailFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isPasswordFocused && isPasswordValid ? "green" : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Password")}
            secureTextEntry
            onChangeText={(value) => handleChange("password", value)}
            value={data.password}
            onFocus={() => setIsPasswordFocused(true)}
            onBlur={() => setIsPasswordFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isConfirmedPasswordFocused && isConfirmedPasswordValid
                    ? "green"
                    : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Confirm Password")}
            secureTextEntry
            onChangeText={(value) => handleChange("confirmPassword", value)}
            value={data.confirmPassword}
            onFocus={() => setIsConfirmedPasswordFocused(true)}
            onBlur={() => setIsConfirmedPasswordFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isOrganiationCodeFocused && isOrganiationCodeValid
                    ? "green"
                    : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Organization Code")}
            keyboardType="number-pad"
            onChangeText={(value) => handleChange("oCode", value)}
            value={data.oCode}
            onFocus={() => setIsOrganiationCodeFocused(true)}
            onBlur={() => setIsOrganiationCodeFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isAddressFocused && isAddressValid ? "green" : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Address")}
            onChangeText={(value) => handleChange("Address", value)}
            value={data.Address}
            onFocus={() => setIsAddressFocused(true)}
            onBlur={() => setIsAddressFocused(false)}
          />
          <TextInput
            style={[
              {
                borderWidth: 1,
                borderColor:
                  isPnumberFocused && isPnumberValid ? "green" : "red",
                padding: 10,
              },
              { marginBottom: 10 },
            ]}
            placeholder={t("Phone Number")}
            keyboardType="phone-pad"
            onChangeText={(value) => handleChange("pNumber", value)}
            value={data.pNumber}
            onFocus={() => setIsPnumberFocused(true)}
            onBlur={() => setIsPnumberFocused(false)}
          />
          <View
            style={{ borderWidth: 1, borderColor: "gray", marginBottom: 10 }}
          >
            <Picker
              selectedValue={data.gender}
              onValueChange={(value) => handlePickerChange("gender", value)}
            >
              <Picker.Item label={t("Sector")} value="" />
              <Picker.Item label={t("Governmental")} value="governmental" />
              <Picker.Item label={t("Private")} value="Private" />
            </Picker>
          </View>
          <Text>
            {t("Have an Account?")}{" "}
            <Text style={{ color: "red", fontWeight: "bold" }}>
              {t("Sign in Here")}
            </Text>
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "red",
              paddingVertical: 10,
              marginTop: 10,
            }}
            onPress={handleSubmit}
          >
            <Text style={{ color: "white", textAlign: "center", fontSize: 18 }}>
              {t("Sign Up")}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    color: "red",
    marginTop: 50,
    fontSize: 20,
    backgroundColor: "#fbf1f0",
  },
  form: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10,
    paddingHorizontal: 10,
    height: 40,
  },
  button: {
    backgroundColor: "red",
    alignItems: "center",
    padding: 15,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
});

export default OrganizationSignUp;
