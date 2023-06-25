import React, { useState, useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  Switch,
} from "react-native";
import { DarkTheme, Link } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";

//import t from "../../../i18n/i18n";
import { EventRegister } from "react-native-event-listeners";
import themeContext from "../../Theme/themeContext";

import themes from "../../Theme/theme";
import { ThemeProvider } from "../../Theme/themeContext";

import { Trans, useTranslation } from "react-i18next";
import routes from "../../Common/routes";
export default function Home() {
  const { navigate } = useNavigation();

  const { t } = useTranslation();

  // const navigation = useNavigation();

  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };
  // const [darkTheme, setDarkTheme] = useState(true);
  // const handlDark = (value) => {
  //   setDarkTheme(value);
  //   EventRegister.emit("ChangeTheme", value);
  // };

  const darkTheme = useContext(themeContext);
  //console.warn(darkTheme);

  return (
    <ScrollView style={[styles.container]}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/heart.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.landingContent}>
        <View style={styles.textContainer}>
          <Text
            style={{
              ...styles.title,
            }}
          >
            {t("Blood-Donation")}
          </Text>
          <Text
            style={[
              styles.subtitle,
              {
                color:
                  darkTheme === true ? themes.dark.color : themes.light.color,
              },
            ]}
          >
            {t("Saves-Lives,")}
            <Trans i18nKey="Blood-Donation">
              <Text></Text>
            </Trans>
          </Text>
          <View style={styles.tagContainer}>
            <Text style={[styles.tag]}>{t("Together we are stronger")}</Text>
          </View>
          <Text
            style={[
              styles.description,
              {
                color:
                  darkTheme === true ? themes.dark.color : themes.light.color,
              },
            ]}
          >
            {t("Find-blood-donors")}
          </Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate(routes.Selection)}
          >
            <Text style={styles.buttonText}>{t("Donate Now")}</Text>
          </TouchableOpacity>
        </View>

        {/* {isSelectionActive && (
            <Selection onSelection={setIsSelectionActive} />
          )} */}
      </View>
      <View style={styles.infoContainer}>{/* <InfoHome /> */}</View>
      <ScrollView contentContainerStyle={styles.textCenter}>
        <Text
          style={[
            styles.description,
            {
              fontFamily: "MontsBold",
            },
            {
              color:
                darkTheme === true ? themes.dark.color : themes.light.color,
            },
          ]}
        >
          {t("Join-our-cause")}
        </Text>
      </ScrollView>
      {/* <TouchableOpacity style={styles.drawerLogoContainer}>
        <Image
          source={require("../../../assets/images/stock-vector-1.png")}
          style={styles.hamLogo}
        />
      </TouchableOpacity> */}
      {/* <Switch value={darkTheme} onValueChange={handlDark}></Switch> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    // backgroundColor: "#fbf1f0",
  },
  drawerLogoContainer: {
    marginRight: 10,
  },
  hamLogo: {
    color: "red",
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  landingContent: {
    padding: 20,
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    textAlign: "center",

    // marginTop: "3rem",
    marginBottom: 0,
  },
  title: {
    letterSpacing: 4,
    fontSize: 30,
    fontFamily: "MontsBold",
    color: "#ff4951",
    marginBottom: 10,
    textAlign: "center",
    justifyContent: "center",
  },
  subtitle: {
    letterSpacing: 4,
    fontSize: 20,
    fontFamily: "MontsItalic",
    marginBottom: 20,
    textAlign: "center",
  },
  tagContainer: {
    backgroundColor: "#fbd6e7",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 20,
  },
  tag: {
    letterSpacing: 4,
    fontSize: 14,
    fontFamily: "MontsSemiBold",
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "MontsSemiBold",
    maxWidth: 500,
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: "red",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontFamily: "MontsSemiBold",
  },
  infoContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  textCenter: {
    alignItems: "center",
  },
});
