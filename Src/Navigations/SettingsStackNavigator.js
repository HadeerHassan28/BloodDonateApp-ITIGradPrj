import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";

const SettingsStackNavigator = ({ navigation }) => {
  const Stack = createStackNavigator();
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
    ></Stack.Navigator>
  );
};
export default SettingsStackNavigator;
