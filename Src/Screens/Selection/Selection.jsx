import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Link } from "react-router-dom";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../Common/Colors";
import { Trans, useTranslation } from 'react-i18next';

const Selection = ({ onSelection }) => {
  const {t} = useTranslation();

  const optionOne = useRef();
  const optionTwo = useRef();

  const [isOptionOneSelected, setIsOptionOneSelected] = useState(false);
  const [isOptionTwoSelected, setIsOptionTwoSelected] = useState(false);

  const toggleSelection = () => {
    onSelection(false);
  };

  const handleOptionOne = () => {
    if (!isOptionOneSelected && isOptionTwoSelected) {
      setIsOptionOneSelected(true);
      setIsOptionTwoSelected(false);
    } else if (!isOptionOneSelected) {
      setIsOptionOneSelected(true);
    }
  };

  const handleOptionTwo = () => {
    if (!isOptionTwoSelected && isOptionOneSelected) {
      setIsOptionTwoSelected(true);
      setIsOptionOneSelected(false);
    } else if (!isOptionTwoSelected) {
      setIsOptionTwoSelected(true);
    }
  };

  return (
    <>
      <View style={styles.overlay} onPress={toggleSelection}></View>
      <View style={styles.container}>
        <View style={[styles.selection, { marginHorizontal: 10 }]}>
          <Text style={styles.heading}>{t("Choose Your Plan")}</Text>
          <View style={styles.row}>
            <TouchableOpacity
              style={[
                styles.option,
                styles.rounded,
                { borderWidth: isOptionOneSelected ? 2 : 0 },
              ]}
              onPress={handleOptionOne}
              ref={optionOne}
            >
              <Text style={styles.optionTitle}>{t("Organization")}</Text>
              {/* <BsHospital size={64} color="#ee394a" /> */}
              <Ionicons
                name={"business-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.optionDescription}>
                {t("This Plan Include Hospitals and Blood Banks")}
              </Text>
              {isOptionOneSelected && (
                <Text style={styles.optionSelectedText}>
                  {t("* You are Following the Organizational Plan")}
                </Text>
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.option,
                styles.rounded,
                { borderWidth: isOptionTwoSelected ? 2 : 0 },
              ]}
              onPress={handleOptionTwo}
              ref={optionTwo}
            >
              <Text style={styles.optionTitle}>{t("User")}</Text>
              {/* <AiOutlineUser size={64} color="#ee394a" /> */}
              <Ionicons
                name={"person-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.optionDescription}>
                {t("This Plan Include Donors and Recipients")}
              </Text>
              {isOptionTwoSelected && (
                <Text style={styles.optionSelectedText}>
                  {t("* You are Following the Users Plan")}
                </Text>
              )}
            </TouchableOpacity>
          </View>

          {isOptionOneSelected && (
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={toggleSelection}
              >
                <Text style={styles.buttonText}>{t("Cancel")}</Text>
              </TouchableOpacity>
              <Link to="signup-org">
                <TouchableOpacity style={[styles.button, styles.dangerButton]}>
                  <Text style={styles.buttonText}>{t("Sign Up")}</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}

          {isOptionTwoSelected && (
            <View style={styles.buttons}>
              <TouchableOpacity
                style={[styles.button, styles.secondaryButton]}
                onPress={toggleSelection}
              >
                <Text style={styles.buttonText}>{t("Cancel")}</Text>
              </TouchableOpacity>
              <Link to="signup-user">
                <TouchableOpacity style={[styles.button, styles.dangerButton]}>
                  <Text style={styles.buttonText}>{t("Sign Up")}</Text>
                </TouchableOpacity>
              </Link>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  selection: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    marginBottom: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 20,
  },
  option: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  rounded: {
    borderRadius: 10,
  },
  optionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  optionDescription: {
    textAlign: "center",
    marginBottom: 10,
  },
  optionSelectedText: {
    color: "red",
    marginBottom: 10,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  button: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 5,
    borderRadius: 5,
  },
  secondaryButton: {
    backgroundColor: "#ccc",
  },
  dangerButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "#fff",
  },
});

export default Selection;
