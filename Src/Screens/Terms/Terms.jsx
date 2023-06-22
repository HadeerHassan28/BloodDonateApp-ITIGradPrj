import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import {t} from "../../../i18n/i18n";


const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>
          {t("Terms & Conditions")}
        </Text>
        <Text style={styles.subtitle}>
        {t("This stuff is boring, but important. In short, be a decent human being.")}{" "}
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          {t("Software License and Service Agreement")}
        </Text>
        <Text style={styles.paragraph}>
          {JSON.parse(t("Software License and Service Agreement Paragraph"))}
        </Text>
        <Text style={styles.heading}>{t("Acceptance of the Agreement")}</Text>
        <Text style={styles.paragraph}>
          {JSON.parse(t("Acceptance of the Agreement Paragraph"))}
        </Text>
        <Text style={styles.paragraph}>
          {JSON.parse(t("Acceptance of the Agreement Paragraph2"))}
        </Text>
        <Text style={styles.heading}>{t("Eligibility")}</Text>
        <Text style={styles.paragraph}>{JSON.parse(t("Eligibility Paragraph"))}</Text>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fbf1f0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  contentContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "red",
  },
  paragraph: {
    fontSize: 14,
    marginBottom: 20,
    lineHeight: 20,
  },
});

export default TermsAndConditions;
