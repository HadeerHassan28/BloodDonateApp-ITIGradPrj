import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
// import SiQuantconnect from "react-icons/si/Quantconnect";
// import FaRegLightbulb from "react-icons/fa/RegLightbulb";
// import BsGlobe2 from "react-icons/bs/Globe2";
// import AiOutlineNotification from "react-icons/ai/OutlineNotification";
// import FaMoneyCheckAlt from "react-icons/fa/MoneyCheckAlt";
// import BsHeartPulse from "react-icons/bs/HeartPulse";
// import AiOutlineUserAdd from "react-icons/ai/OutlineUserAdd";
// import AiOutlineHeart from "react-icons/ai/OutlineHeart";
// import BsDroplet from "react-icons/bs/Droplet";

import styles from "./AboutStyle";
// import aboutimg from "../../assets/About-head.svg";

const About = () => {
  return (
    <View>
      <Text>Hello About</Text>
    </View>
  );
};
export default About;

/* 

<View>
      <View style={styles.container}>
        <View style={styles.rowContainer}>
          <View style={styles.columnContainer}>
            <View style={styles.aboutContent}>
              <Text style={styles.title}>
                What we do at blood donation foundation
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
          <View style={styles.columnContainer}>
            <Image source={aboutimg} style={styles.image} />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>What is this all about ?</Text>
        <View style={styles.rowContainer}>
          <View style={styles.card}>
            <SiQuantconnect color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>What we do?</Text>
            <Text style={styles.cardDescription}>
              We connect blood donors with recipients, without any intermediary
              such as blood banks, for an efficient and seamless process.
            </Text>
          </View>
          <View style={styles.card}>
            <FaRegLightbulb color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>Innovative</Text>
            <Text style={styles.cardDescription}>
              Blood donation Connect is an innovative approach to address global
              health. We provide immediate access to blood donors.
            </Text>
          </View>
          <View style={styles.card}>
            <BsGlobe2 color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>Network</Text>
            <Text style={styles.cardDescription}>
              Blood donation is one of several community organizations working
              together as a network that responds to emergencies in an efficient
              manner.
            </Text>
          </View>
          <View style={styles.card}>
            <AiOutlineNotification color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>Get notified</Text>
            <Text style={styles.cardDescription}>
              Blood donation Connect works with network partners to connect
              blood donors and recipients through an automated SMS service and a
              mobile app.
            </Text>
          </View>
          <View style={styles.card}>
            <FaMoneyCheckAlt color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>Totally Free</Text>
            <Text style={styles.cardDescription}>
              Blood donation Connect's ultimate goal is to provide an
              easy-to-use, easy-to-access, fast, efficient, and reliable way to
              get life-saving blood, totally Free of cost.
            </Text>
          </View>
          <View style={styles.card}>
            <AiOutlineHeart color="#ee394a" size={25} />
            <Text style={styles.cardTitle}>Save Life</Text>
            <Text style={styles.cardDescription}>
              We are a non-profit foundation, and our main objective is to make
              sure that everything is done to protect vulnerable persons. Help
              us by making a gift!
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.secondaryColor}>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Text style={styles.secondaryTitle}>Using Our Service</Text>
            <Text style={styles.secondaryDescription}>
              Using our service is as simple as saying, Hello!
            </Text>
          </View>
          <View style={styles.rowContainer}>
            <View style={styles.columnContainer}>
              <View style={styles.iconContainer}>
                <AiOutlineUserAdd
                  color="#ee394a"
                  size={25}
                  style={styles.icon}
                />
                <Text style={styles.iconText}>Register</Text>
              </View>
              <Text style={styles.iconDescription}>
                Register your account so you can immediately start using Save
                Life Connect
              </Text>
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.iconContainer}>
                <BsDroplet color="#ee394a" size={25} style={styles.icon} />
                <Text style={styles.iconText}>Post a Blood request</Text>
              </View>
              <Text style={styles.iconDescription}>
                Post a blood request using this website or our app and locate
                volunteer blood donors within your area.
              </Text>
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.iconContainer}>
                <AiOutlineNotification
                  color="#ee394a"
                  size={25}
                  style={styles.icon}
                />
                <Text style={styles.iconText}>Get notified</Text>
              </View>
              <Text style={styles.iconDescription}>
                Get notified in real-time when a donor has been found and when
                the blood is on its way to the patient
              </Text>
            </View>
            <View style={styles.columnContainer}>
              <View style={styles.iconContainer}>
                <BsHeartPulse color="#ee394a" size={25} style={styles.icon} />
                <Text style={styles.iconText}>Save a Life</Text>
              </View>
              <Text style={styles.iconDescription}>
                Donating or requesting blood share the same noble and final
                purpose Saving a Life.
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>

*/
