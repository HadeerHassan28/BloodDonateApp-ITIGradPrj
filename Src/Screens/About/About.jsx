import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import colors from "../../Common/Colors";
import routes from "../../Common/routes";

// import SiQuantconnect from "react-icons/si/Quantconnect";
// import FaRegLightbulb from "react-icons/fa/RegLightbulb";
// import BsGlobe2 from "react-icons/bs/Globe2";
// import AiOutlineNotification from "react-icons/ai/OutlineNotification";
// import FaMoneyCheckAlt from "react-icons/fa/MoneyCheckAlt";
// import BsHeartPulse from "react-icons/bs/HeartPulse";
// import AiOutlineUserAdd from "react-icons/ai/OutlineUserAdd";
// import AiOutlineHeart from "react-icons/ai/OutlineHeart";
// import BsDroplet from "react-icons/bs/Droplet";
import { Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./AboutStyle.js";
import Ionicons from "react-native-vector-icons/Ionicons";
// import t from "../../../i18n/i18n";
import themeContext from "../../Theme/themeContext";
import { Trans, useTranslation } from "react-i18next";
import themes from "../../Theme/theme";

const About = () => {
  const darkTheme = useContext(themeContext);
  const { navigate } = useNavigation();

  const windowWidth = Dimensions.get("window").width;
  const { t } = useTranslation();

  return (
    <ScrollView
      style={
        darkTheme === true ? themes.dark.background : themes.light.background
      }
    >
      <Image
        source={require("../../../assets/images/About-head-1.png")}
        style={{ width: windowWidth, height: 200 }}
        resizeMode="contain"
      />
      <View>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                darkTheme === true
                  ? themes.dark.background
                  : themes.light.background,
            },
            {
              color:
                darkTheme === true ? themes.dark.color : themes.light.color,
            },
          ]}
        >
          <View style={styles.aboutContent}>
            <Text style={styles.title}>
              {t("What we do at blood donation foundation")}?!
            </Text>
            <Text
              style={[
                styles.description,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("We solve the problem of blood emergencies by connecting blood donors directly with people in blood need.")}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigate(routes.Selection)}
            >
              <Text style={styles.buttonText}>{t("Donate Now")}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            ...styles.title,
            marginBottom: 0,
            paddingBottom: 10,
          }}
        >
          {t("What is this all about ?")}
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View
            style={[
              styles.card,
              {
                backgroundColor:
                  darkTheme === true
                    ? themes.dark.background
                    : themes.light.background,
              },
              {
                color:
                  darkTheme === true ? themes.dark.color : themes.light.color,
              },
            ]}
          >
            <Ionicons
              name={"git-network-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("What we do?")}</Text>
            <Text
              style={[
                styles.description,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("We connect blood donors with recipients, without any intermediary such as blood banks, for an efficient and seamless process.")}
            </Text>
          </View>
          <View
            style={[
              styles.card,
              {
                backgroundColor:
                  darkTheme === true
                    ? themes.dark.background
                    : themes.light.background,
              },
            ]}
          >
            <Ionicons
              name={"bulb-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("Innovative")}</Text>
            <Text
              style={[
                styles.description,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t(
                "Blood donation Connect is an innovative approach to address global health. We provide immediate access to blood donors."
              )}
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"globe-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("Network")}</Text>
            <Text
              style={[
                ,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Blood donation is one of several community organizations working together as a network that responds to emergencies in an efficient manner.")}
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"notifications-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("Get notified")}</Text>
            <Text style={styles.description}>
              {t("Blood donation Connect works with network partners to connect blood donors and recipients through an automated SMS service and a mobile app.")}
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"cash-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("Totally Free")}</Text>
            <Text style={styles.description}>
              {t("Totally Free paragraph")}
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"heart-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>{t("Save Life")}</Text>
            <Text style={styles.description}>{t("Save Life paragraph")}</Text>
          </View>
        </ScrollView>
        <View
          style={[
            styles.container,
            {
              backgroundColor:
                darkTheme === true
                  ? themes.dark.background
                  : themes.light.background,
            },
          ]}
        >
          <View style={styles.textContainer}>
            <Text style={styles.title}>{t("Using Our Service")}</Text>
            <Text
              style={[
                styles.description,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Using our service is as simple as saying, Hello!")}
            </Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                name={"person-add-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.cardTitle}>{t("Register")}</Text>
            </View>
            <Text
              style={[
                ,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Register your account so you can immediately start using Save Life Connect")}
            </Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                name={"water-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.cardTitle}>{t("Post a Blood request")}</Text>
            </View>
            <Text
              style={[
                ,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Post a blood request using this website or our app and locate volunteer blood donors within your area.")}
            </Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                name={"chatbox-ellipses-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.cardTitle}>{t("Get notified")}</Text>
            </View>
            <Text
              style={[
                styles.iconDescription,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Get notified in real time when a donor has been found and when the blood is on its way to the patient")}
            </Text>
          </View>
          <View style={styles.columnContainer}>
            <View style={styles.iconContainer}>
              <Ionicons
                style={styles.icon}
                name={"flash-outline"}
                size={25}
                color={colors.mainColor}
              />
              <Text style={styles.cardTitle}>{t("Save a Life")}</Text>
            </View>
            <Text
              style={[
                styles.iconDescription,
                {
                  backgroundColor:
                    darkTheme === true
                      ? themes.dark.background
                      : themes.light.background,
                },
                {
                  color:
                    darkTheme === true ? themes.dark.color : themes.light.color,
                },
              ]}
            >
              {t("Donating or requesting blood share the same noble and final purpose Saving a Life.")}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default About;
