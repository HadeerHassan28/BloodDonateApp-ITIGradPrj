import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import uuid from "react-native-uuid";
import { Picker } from "@react-native-picker/picker";
import styles from "./UserStyle";
import { Trans, useTranslation } from 'react-i18next';

const UserSignUp = () => {
  const {t} = useTranslation();

  const navigation = useNavigation();
  const [data, SetData] = useState({
    id: uuid,
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

  const [isFirstNameValid, setIsFirstNameValid] = useState(false);
  const [isFirstNameFocused, setIsFirstNameFocused] = useState(false);

  const [isLastNameValid, setIsLastNameValid] = useState(false);
  const [isLastNameFocused, setIsLastNameFocused] = useState(false);

  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  const [isConfirmedPasswordValid, setIsConfirmedPasswordValid] =
    useState(false);
  const [isConfirmedPasswordFocused, setIsConfirmedPasswordFocused] =
    useState(false);

  const [isAddressValid, setIsAdressValid] = useState(false);
  const [isAddressFocused, setIsAddressFocused] = useState(false);

  const [isCityValid, setIsCityValid] = useState(false);
  const [isCityFocused, setIsCityFocused] = useState(false);

  const [isPnumberValid, setIsPnumberValid] = useState(false);
  const [isPnumberFocused, setIsPnumberFocused] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDataValid, setIsDataValid] = useState(false);

  const [isEmailExisting, setIsEmailExisting] = useState(false);

  const handleChange = (name, value) => {
    setIsSubmitted(false);
    setIsEmailExisting(false);

    const lettersRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[\w\\.-]+@\w+\.[a-zA-Z]{2,3}(\.[a-zA-Z]{2})?$/;
    const passwordRegex = /^\w{6,}$/;
    const addressRegex = /^[a-zA-Z0-9,\s]+$/;
    const phoneNumberRegex = /^(010|011|012)\d{8}$/;

    const isValid = lettersRegex.test(value);
    const isMailValid = emailRegex.test(value);
    const isEnteredPasswordValid = passwordRegex.test(value);
    const isPassWordConfirmed = value.match(data.password);
    const isEnteredAddressValid = addressRegex.test(value);
    const isEnteredPhoneNumberValid = phoneNumberRegex.test(value);

    SetData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));

    if (name === "firstName") {
      setIsFirstNameValid(isValid);
    } else if (name === "lastName") {
      setIsLastNameValid(isValid);
    } else if (name === "email") {
      setIsEmailValid(isMailValid);
    } else if (name === "password") {
      setIsPasswordValid(isEnteredPasswordValid);
    } else if (name === "confirmPassword") {
      setIsConfirmedPasswordValid(isPassWordConfirmed);
    } else if (name === "Address") {
      setIsAdressValid(isEnteredAddressValid);
    } else if (name === "city") {
      setIsCityValid(isValid);
    } else if (name === "pNumber") {
      setIsPnumberValid(isEnteredPhoneNumberValid);
    }
  };

  const handlePickerChange = (fieldName, itemValue) => {
    SetData((prevData) => ({
      ...prevData,
      [fieldName]: itemValue,
    }));
    console.warn(fieldName, itemValue);
  };

  const handleSubmit = async () => {
    setIsSubmitted(true);
    axios
      .get("http://localhost:3002/users")
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
            isFirstNameValid &&
            isLastNameValid &&
            isEmailValid &&
            isPasswordValid &&
            isConfirmedPasswordValid &&
            isAddressValid &&
            isCityValid &&
            isPnumberValid
          ) {
            //! get data from thr form and add it to the json data:
            const id = uuid.v4();
            const newUser = {
              id: id,
              orgName: data.oName,
              password: data.password,
              confirmPassword: data.confirmPassword,
              OrganizationCode: data.oCode,
              Address: data.Address,
              sector: data.sector,
              pNumber: data.pNumber,
            };
            axios
              .post("http://localhost:3002/users", newUser)
              .then((res) => {
                //console.log(res.data);
                console.warn("Done post");
                //navigation.navigate("LogOrg");
              })
              .catch((err) => console.warn("err"));
          } else {
            console.log("Your Form Is Not Valid");
          }
        }
      })
      .catch((err) => console.warn("geterr"));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.heading}>{t("Sign Up To Save A Life!")}</Text>
            <TextInput
              style={[
                styles.input,
                isFirstNameFocused && !isFirstNameValid && styles.invalidInput,
              ]}
              placeholder={t("First Name")}
              value={data.firstName}
              onChangeText={(text) => handleChange("firstName", text)}
              onFocus={() => setIsFirstNameFocused(true)}
              onBlur={() => setIsFirstNameFocused(false)}
            />
            {isFirstNameFocused && !isFirstNameValid && (
              <Text style={styles.errorText}>
                {t("* This Field Can't be Empty")}
              </Text>
            )}

            <TextInput
              style={[
                styles.input,
                isLastNameFocused && !isLastNameValid && styles.invalidInput,
              ]}
              placeholder={t("Last Name")}
              value={data.lastName}
              onChangeText={(text) => handleChange("lastName", text)}
              onFocus={() => setIsLastNameFocused(true)}
              onBlur={() => setIsLastNameFocused(false)}
            />
            {isLastNameFocused && !isLastNameValid && (
              <Text style={styles.errorText}>
                {t("* This Field Can't be Empty")}
              </Text>
            )}

            <TextInput
              style={[
                styles.input,
                isEmailFocused && !isEmailValid && styles.invalidInput,
              ]}
              placeholder={t("Email address")}
              value={data.email}
              onChangeText={(text) => handleChange("email", text)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
            />
            {isEmailFocused && !isEmailValid && (
              <Text style={styles.errorText}>{t("* Please Enter A Valid Email")}</Text>
            )}

            <TextInput
              style={[
                styles.input,
                isPasswordFocused && !isPasswordValid && styles.invalidInput,
              ]}
              placeholder={t("Password")}
              secureTextEntry
              value={data.password}
              onChangeText={(text) => handleChange("password", text)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
            />
            {isPasswordFocused && !isPasswordValid && (
              <Text style={styles.errorText}>
                {t("* Password Must be At least 6 Characters")}
              </Text>
            )}

            <TextInput
              style={[
                styles.input,
                isConfirmedPasswordFocused &&
                  !isConfirmedPasswordValid &&
                  styles.invalidInput,
              ]}
              placeholder={t("Confirm Password")}
              secureTextEntry
              value={data.confirmPassword}
              onChangeText={(text) => handleChange("confirmPassword", text)}
              onFocus={() => setIsConfirmedPasswordFocused(true)}
              onBlur={() => setIsConfirmedPasswordFocused(false)}
            />
            {isConfirmedPasswordFocused && !isConfirmedPasswordValid && (
              <Text style={styles.errorText}>
                {t("* The Password Is Not Matching")}
              </Text>
            )}
            <TextInput
              style={[
                styles.input,
                isAddressFocused && !isAddressValid && styles.invalidInput,
              ]}
              placeholder={t("Address")}
              value={data.Address}
              onChangeText={(text) => handleChange("Address", text)}
              onFocus={() => setIsAddressFocused(true)}
              onBlur={() => setIsAddressFocused(false)}
            />
            {isAddressFocused && !isAddressValid && (
              <Text style={styles.errorText}>
                {t("* Please Enter A Valid Address")}
              </Text>
            )}

            <TextInput
              style={[
                styles.input,
                isCityFocused && !isCityValid && styles.invalidInput,
              ]}
              placeholder={t("City")}
              value={data.city}
              onChangeText={(text) => handleChange("city", text)}
              onFocus={() => setIsCityFocused(true)}
              onBlur={() => setIsCityFocused(false)}
            />
            {isCityFocused && !isCityValid && (
              <Text style={styles.errorText}>
                {t("* Please Enter A Valid City")}
              </Text>
            )}

            <TextInput
              style={[
                styles.input,
                isPnumberFocused && !isPnumberValid && styles.invalidInput,
              ]}
              placeholder={t("Phone Number")}
              value={data.pNumber}
              onChangeText={(text) => handleChange("pNumber", text)}
              onFocus={() => setIsPnumberFocused(true)}
              onBlur={() => setIsPnumberFocused(false)}
            />
            {isPnumberFocused && !isPnumberValid && (
              <Text style={styles.errorText}>
                {t("* Please Enter A Valid Phone Number")}
              </Text>
            )}

            <Picker
              selectedValue={data.bloodType}
              style={styles.picker}
              onValueChange={(itemValue) =>
                handlePickerChange("bloodType", itemValue)
              }
            >
              <Picker.Item label={t("Select Blood Type")} value="" />
              <Picker.Item label="A+" value="A+" />
              <Picker.Item label="A-" value="A-" />
              <Picker.Item label="B-" value="B-" />
              <Picker.Item label="B+" value="B+" />
              <Picker.Item label="AB+" value="AB+" />
              <Picker.Item label="AB-" value="AB-" />
              <Picker.Item label="O-" value="O-" />
              <Picker.Item label="O+" value="O+" />
            </Picker>

            <Picker
              selectedValue={data.gender}
              style={styles.picker}
              onValueChange={(itemValue) =>
                handlePickerChange("gender", itemValue)
              }
            >
              <Picker.Item label={t("Gender")} value="" />
              <Picker.Item label={t("Male")} value="Male" />
              <Picker.Item label={t("Female")} value="Female" />
            </Picker>

            <Text>
              {t("Have an Account?")}{" "}
              <Text style={styles.signInLink} onPress={() => handleSignIn()}>
                {t("Sign in Here")}
              </Text>
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
              <Text style={styles.buttonText}>{t("Sign Up")}</Text>
            </TouchableOpacity>
            {isSubmitted && !isEmailExisting && isDataValid && (
              <Text style={[styles.successMessage, { color: "green" }]}>
                {t("Your Account Created Successfully")}
              </Text>
            )}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default UserSignUp;
