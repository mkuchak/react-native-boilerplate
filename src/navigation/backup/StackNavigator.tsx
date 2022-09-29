import { createStackNavigator } from "@react-navigation/stack";
import { About } from "../screens/About";
import { Home } from "../screens/Home";
import { BottomTabNavigator } from "./BottomTabNavigator";

// const { Navigator, Screen } = createStackNavigator<RootStackParamList>();
const { Navigator, Screen } = createStackNavigator();

export function StackNavigator() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Screen
        name="About"
        component={About}
        options={() => ({
          // headerShown: false,
        })}
      />
    </Navigator>
  );
}
