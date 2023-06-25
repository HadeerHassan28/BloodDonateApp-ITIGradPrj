import { createStackNavigator } from "@react-navigation/stack";
import routes from "../Common/routes";
import About from "../Screens/About/About";
import Home from "../Screens/Home/Home";
import Selection from "../Screens/Selection/Selection";

const Stack = createStackNavigator();
const SettingsStackNavigator = ({ navigation }) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // headerShown: false,
        header: () => (
          <Ionicons
            name="menu-outline"
            size={24}
            color="black"
            style={{ marginLeft: 20 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    >
      <Stack.Screen
        name={routes.Home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Selection"
        component={Selection}
        options={{ headerShown: false }}
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
