import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Trans, useTranslation } from 'react-i18next';

const InfoHome = () => {
  const {t} = useTranslation();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.svgWrapper}>
            <View style={styles.svg}>
              <View style={styles.path1} />
              <View style={styles.path2} />
              <View style={styles.path3} />
              <View style={styles.path4} />
              <View style={styles.path5} />
              <View style={styles.path6} />
            </View>
          </View>
        </View>
        <Text style={styles.heading}>{t("Find Blood")}</Text>
        <Text style={styles.description}>
          {t("Find blood donors near your location and request the needed blood type")}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.svgWrapper}>
            <View style={styles.svg}>
              <View style={styles.path7} />
              <View style={styles.path8} />
              <View style={styles.path9} />
              <View style={styles.path10} />
              <View style={styles.path11} />
              <View style={styles.path12} />
              <View style={styles.path13} />
            </View>
          </View>
        </View>
        <Text style={styles.heading}>{t("Get Notification")}</Text>
        <Text style={styles.description}>
        {t("Get notified about requests instantly, either on our app or by sms")}
        </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.svgContainer}>
          <View style={styles.svgWrapper}>
            <View style={styles.svg}>
              <View style={styles.path14} />
              <View style={styles.path15} />
              <View style={styles.path16} />
            </View>
          </View>
        </View>
        <Text style={styles.heading}>{t("Forever Free")}</Text>
        <Text style={styles.description}>
        {t("You don't have to pay anything, Blood Donation Connect is forever Free !")}
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svgContainer: {
    width: 65,
    height: 65,
    marginBottom: 8,
  },
  svgWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  svg: {
    width: 65,
    height: 65,
  },
  path1: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6DAAE2",
  },
  path2: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ACD8F9",
  },
  path3: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C61469",
  },
  path4: {
    width: "100%",
    height: "100%",
    backgroundColor: "#6DAAE2",
  },
  path5: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  path6: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ACD8F9",
  },
  path7: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  path8: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C61469",
  },
  path9: {
    width: "100%",
    height: "100%",
    backgroundColor: "#4F91C1",
  },
  path10: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  path11: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C61469",
  },
  path12: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  path13: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C61469",
  },
  path14: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  path15: {
    width: "100%",
    height: "100%",
    backgroundColor: "#C61469",
  },
  path16: {
    width: "100%",
    height: "100%",
    backgroundColor: "#FF3F62",
  },
  heading: {
    marginTop: 2,
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    color: "black",
    textAlign: "center",
  },
});

export default InfoHome;
