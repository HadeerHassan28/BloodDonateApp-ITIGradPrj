import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import routes from "../Common/routes";
import colors from "../Common/Colors";
import About from "../Screens/About/About";
import Home from "../Screens/Home/Home";
import Blogs from "../Screens/Blogs/Blogs";
import OrganizationSignUp from "../Screens/SignUp/Organization/Organization";
import UserSignUp from "../Screens/SignUp/User/User";
import LogUser from "../Screens/LogIn/User/LogUser";
import Volunteers from "../Screens/Volunteers/Volunteers";
import LogOrg from "../Screens/LogIn/Organizations/LogOrg";
import TermsAndConditions from "../Screens/Terms/Terms";
import ContactUs from "../Screens/ContactUs/ContactUs";
import UserProfile from "../Screens/Profile/user/userProfile";
import Selection from "../Screens/Selection/Selection";
const Tab = createBottomTabNavigator();

const Root = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={routes.Home}
        component={Home}
        options={{
          tabBarLabel: "Home",
          // headerShown: false,
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            iconName = focused ? "home" : "home-outline";
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={routes.about}
        component={About}
        options={{
          // headerShown: false,
          tabBarLabel: "About",
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            iconName = focused ? "book" : "book-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name={routes.Volunteers}
        component={Volunteers}
        options={{
          headerShown: false,
          // tabBarLabel: "Volunteers",
          tabBarActiveTintColor: colors.mainColor,
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: {
            paddingBottom: 10,
            fontSize: 10,
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            iconName = focused ? "albums" : "albums-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Root;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fbf1f0",
    alignItems: "center",
    justifyContent: "center",
  },
});
