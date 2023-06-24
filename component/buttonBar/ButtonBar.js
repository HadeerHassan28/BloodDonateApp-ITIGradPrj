import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import rootes from "../../navigateVar/rootes";
import About from "../../screens/About/About";
import Home from "../../screens/Home/Home";
import Blogs from "../../screens/Blogs/Blogs";
<<<<<<< HEAD
import { t } from "../../../../i18n/i18n";
import routes from "../../Src/Common/routes";
=======
import { Trans, useTranslation } from 'react-i18next';

>>>>>>> 9ec7098acdf10a4e50cdc85bc408d2aca6b0e4f2
const Tab = createBottomTabNavigator();

export function MyTabs() {
  const {t} = useTranslation();
  return (
    <Tab.Navigator>
      <Tab.Screen name={"Blogs"} component={Blogs} />
      <Tab.Screen name={"About"} component={About} />
    </Tab.Navigator>
  );
}
