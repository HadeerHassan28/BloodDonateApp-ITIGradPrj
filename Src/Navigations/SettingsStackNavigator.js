import { createStackNavigator } from "@react-navigation/stack";
import routes from "../Common/routes";
import About from "../Screens/About/About";
import Home from "../Screens/Home/Home";
import Selection from "../Screens/Selection/Selection";
import Root from "./root";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();
const SettingsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        header: () => (
          <Ionicons
            name="menu-outline"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
            onPress={() => navigation.openDrawer}
          />
        ),
      }}
    >
      <Stack.Screen
        name={routes.Home}
        component={Root}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Selection"
        component={Selection}
        options={{ headerShown: true }}
      />
      {/* <Stack.Screen
        name="About"
        component={About}
        options={{ headerShown: false }}
      /> */}
    </Stack.Navigator>
  );
};
export default SettingsStackNavigator;
