import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  // const navigation = useNavigation();

  // const openDrawer = () => {
  //   navigation.openDrawer();
  // };
  return (
    <ScrollView style={styles.container}>
      <TouchableOpacity style={styles.drawerLogoContainer}>
        <Image
          source={require("../../../assets/images/stock-vector-1.png")}
          style={styles.hamLogo}
        />
      </TouchableOpacity>
      <View style={styles.logoContainer}>
        <Image
          source={require("../../../assets/images/heart.png")}
          style={styles.logo}
        />
      </View>
      <View style={styles.landing}>
        <View style={styles.landingContent}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>BLOOD {"\n"} DONATION</Text>
            <Text style={styles.subtitle}>Saves Lifes,</Text>
            <View style={styles.tagContainer}>
              <Text style={styles.tag}>Together we are stronger</Text>
            </View>
            <Text style={styles.description}>
              Find blood donors near your location and make a blood request in
              less than 5 minutes.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Donate Now</Text>
            </TouchableOpacity>
          </View>

          {/* {isSelectionActive && (
            <Selection onSelection={setIsSelectionActive} />
          )} */}
        </View>
      </View>
      <View style={styles.infoContainer}>{/* <InfoHome /> */}</View>
      <ScrollView contentContainerStyle={styles.textCenter}>
        <Text style={styles.mainTitle}>Join The Cause</Text>
        <Text style={styles.description}>
          Join our cause and help us save more lives. Everyone should have the
          right to get a blood transfusion.
        </Text>
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    // marginTop: Platform.OS === "android" ? 30 : 0,
    flex: 1,
    backgroundColor: "#fbf1f0",
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
  landing: {
    justifyContent: "center",
    alignItems: "flex-start",
  },
  landingContent: {
    padding: 20,
    alignItems: "center",
  },
  textContainer: {
    alignItems: "center",
    // marginTop: "3rem",
    marginBottom: 0,
  },
  title: {
    letterSpacing: 4,
    fontSize: 35,
    fontFamily: "MontserratAlternates-Regular",
    fontWeight: "800",
    color: "#ff4951",
    marginBottom: 5,
    textAlign: "center",
  },
  subtitle: {
    letterSpacing: 4,
    fontSize: 25,
    fontFamily: "Covered By Your Grace",
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "center",
  },
  tagContainer: {
    backgroundColor: "#fbd6e7",
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    marginBottom: 10,
  },
  tag: {
    letterSpacing: 4,
    fontSize: 14,
    fontFamily: "MontserratAlternates-Regular",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  description: {
    fontSize: 14,
    fontFamily: "MontserratAlternates-Regular",
    fontWeight: "bold",
    maxWidth: 500,
    marginBottom: 10,
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
    fontWeight: "bold",
    fontSize: 20,
  },
  infoContainer: {
    marginVertical: 20,
    marginHorizontal: 15,
  },
  textCenter: {
    alignItems: "center",
  },
});
