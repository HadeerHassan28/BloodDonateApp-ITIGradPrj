import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import rootes from "../../navigateVar/rootes";
import About from "../../screens/About/About";
import Home from "../../screens/Home/Home";
import Blogs from "../../screens/Blogs/Blogs";
import { Trans, useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

export function MyTabs() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen name={t("Blogs")} component={Blogs} />
      <Tab.Screen name={t("About")} component={About} />
    </Tab.Navigator>
  );
}
