import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "../screens/Home";
import { Settings } from "../screens/Settings";
import { StackNavigator } from "./StackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <Navigator>
      <Screen
        name="StackNavigator"
        component={StackNavigator}
        options={() => ({
          headerShown: false,
          // title: "Home",
        })}
      />
      {/* <Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
          // title: "Home",
        })}
      /> */}
      <Screen
        name="Settings"
        component={Settings}
        options={() => ({
          headerShown: false,
        })}
      />
    </Navigator>
  );
}
