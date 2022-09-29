import { createStackNavigator } from "@react-navigation/stack";
import { Chat } from "../../screens/Chat";
import { screens } from "../NavigationMap";

const { Navigator, Screen } = createStackNavigator();

export function ChatStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={screens.Chat} component={Chat} />
    </Navigator>
  );
}
