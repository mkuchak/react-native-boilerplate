import { createStackNavigator } from "@react-navigation/stack";
import { Settings } from "../../screens/Settings";
import { screens } from "../NavigationMap";

const { Navigator, Screen } = createStackNavigator();

export function SettingsStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={screens.Settings} component={Settings} />
    </Navigator>
  );
}
