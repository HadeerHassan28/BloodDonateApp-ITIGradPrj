import React from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import colors from "../../Common/Colors";

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

import styles from "./AboutStyle.js";
import Ionicons from "react-native-vector-icons/Ionicons";

const About = () => {
  const windowWidth = Dimensions.get("window").width;

  return (
    <ScrollView>
      <Image
        source={require("../../../assets/images/About-head-1.png")}
        style={{ width: windowWidth, height: 200 }}
        resizeMode="contain"
      />
      <View>
        <View style={styles.container}>
          <View style={styles.aboutContent}>
            <Text style={styles.title}>
              What we do at blood donation foundation?!
            </Text>
            <Text style={styles.description}>
              We solve the problem of blood emergencies by connecting blood
              donors directly with people in blood need.
            </Text>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Donate Now</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={{
            ...styles.title,
            backgroundColor: colors.backgroundColor,
            marginBottom: 0,
            paddingBottom: 10,
          }}
        >
          What is this all about ?
        </Text>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.card}>
            <Ionicons
              name={"git-network-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>What we do?</Text>
            <Text style={styles.description}>
              We connect blood donors with recipients, without any intermediary
              such as blood banks, for an efficient and seamless process.
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"bulb-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>Innovative</Text>
            <Text style={styles.description}>
              Blood donation Connect is an innovative approach to address global
              health. We provide immediate access to blood donors.
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"globe-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>Network</Text>
            <Text style={styles.description}>
              Blood donation is one of several community organizations working
              together as a network that responds to emergencies in an efficient
              manner.
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"notifications-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>Get notified</Text>
            <Text style={styles.description}>
              Blood donation Connect works with network partners to connect
              blood donors and recipients through an automated SMS service and a
              mobile app.
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"cash-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>Totally Free</Text>
            <Text style={styles.description}>
              Blood donation Connect's ultimate goal is to provide an
              easy-to-use, easy-to-access, fast, efficient, and reliable way to
              get life-saving blood, totally Free of cost.
            </Text>
          </View>
          <View style={styles.card}>
            <Ionicons
              name={"heart-outline"}
              size={25}
              color={colors.mainColor}
            />
            <Text style={styles.cardTitle}>Save Life</Text>
            <Text style={styles.description}>
              We are a non-profit foundation, and our main objective is to make
              sure that everything is done to protect vulnerable persons. Help
              us by making a gift!
            </Text>
          </View>
        </ScrollView>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Using Our Service</Text>
            <Text style={styles.description}>
              Using our service is as simple as saying, Hello!
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
              <Text style={styles.cardTitle}>Register</Text>
            </View>
            <Text style={styles.iconDescription}>
              Register your account so you can immediately start using Save Life
              Connect
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
              <Text style={styles.cardTitle}>Post a Blood request</Text>
            </View>
            <Text style={styles.iconDescription}>
              Post a blood request using this website or our app and locate
              volunteer blood donors within your area.
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
              <Text style={styles.cardTitle}>Get notified</Text>
            </View>
            <Text style={styles.iconDescription}>
              Get notified in real-time when a donor has been found and when the
              blood is on its way to the patient
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
              <Text style={styles.cardTitle}>Save a Life</Text>
            </View>
            <Text style={styles.iconDescription}>
              Donating or requesting blood share the same noble and final
              purpose Saving a Life.
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default About;
