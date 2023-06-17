import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const TermsAndConditions = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.title}>Terms &amp; Conditions</Text>
        <Text style={styles.subtitle}>
          This stuff is boring, but important. In short, be a decent human
          being.
        </Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.heading}>
          Software License and Service Agreement
        </Text>
        <Text style={styles.paragraph}>
          This is a legal agreement ("this Agreement") between Savelife
          Foundation, Inc. ("Savelife" or the "Company" or "Save Life" "Save
          life Connect" "we" or "us" or "our" or other similar pronouns) and
          users ("you") of any services or features of Save Life Connect
          (hereinafter referred to as the "Software"), which are provided by the
          company. Please read the Agreement carefully and decide whether to
          accept it (a minor shall be accompanied by his or her legal guardian
          when accepting the Agreement). You are not allowed to download,
          install or use the Software or related services unless you accept all
          the terms and conditions of this Agreement. By accepting the
          Agreement, you are consenting to, and agreeing to be bound by the
          terms of this Agreement. We reserve all rights not expressly granted
          to you.
        </Text>
        <Text style={styles.heading}>Acceptance of the Agreement</Text>
        <Text style={styles.paragraph}>
          By creating a Save Life Connect account or by using Save Life Connect
          app (collectively, the "Service") you agree to be bound by (i) this
          Agreement, (ii) our Privacy Policy, and (iii) any terms disclosed to
          you and agreed by you if you purchase additional features, products or
          services we offer on the Service (collectively, “the Agreement”). If
          you do not accept and agree to be bound by all of the terms of this
          Agreement, please do not use the Service.
        </Text>
        <Text style={styles.paragraph}>
          We may make changes to the Agreement and to the Service from time to
          time. We may do this for a variety of reasons including to reflect
          changes in or requirements of the law, new features, or changes in
          business practices. The most recent version of the Agreement will be
          posted on the Service and also on www.save.life, and you should
          regularly check for the most recent version. The most recent version
          is the version that applies. If the changes include material changes
          that affect your rights or obligations, we will notify you in advance
          of the changes by reasonable means, which could include notification
          through the Service or via email. If you continue to use the Service
          after the changes become effective, then you agree to the revised
          Agreement.
        </Text>
        <Text style={styles.heading}>Eligibility</Text>
        <Text style={styles.paragraph}>
          You must be at least 18 years of age to create an account on Save Life
          Connect and use the Service. If you are a minor please read this
          Agreement and other above-mentioned agreements with your legal
          guardian. By creating an account and using the Service, you represent
          and warrant that you can form a binding contract with Save Life
          Connect.
        </Text>
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
