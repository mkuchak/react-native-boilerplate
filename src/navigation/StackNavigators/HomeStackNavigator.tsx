import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "../../screens/Home";
import { screens } from "../NavigationMap";

const { Navigator, Screen } = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={screens.Home} component={Home} />
    </Navigator>
  );
}
