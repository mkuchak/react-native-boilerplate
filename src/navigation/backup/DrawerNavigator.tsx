import { createDrawerNavigator } from "@react-navigation/drawer";
import { About } from "../screens/About";
import { Chat } from "../screens/Chat";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { StackNavigator } from "./StackNavigator";

const { Navigator, Screen } = createDrawerNavigator();

export function DrawerNavigator() {
  return (
    <Navigator>
      <Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={() => ({
          headerShown: false,
        })}
      />
      <Screen
        name="Chat"
        component={Chat}
        options={() => ({
          headerShown: false,
        })}
      />
    </Navigator>
  );
}
