import { createStackNavigator } from "@react-navigation/stack";
import { Profile } from "../../screens/Profile";
import { screens } from "../NavigationMap";

const { Navigator, Screen } = createStackNavigator();

export function ProfileStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={screens.Profile} component={Profile} />
    </Navigator>
  );
}
