import { createStackNavigator } from "@react-navigation/stack";
import { SignIn } from "../../screens/SignIn";
import { screens } from "../NavigationMap";

const { Navigator, Screen } = createStackNavigator();

export function SignInStackNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={screens.SignIn} component={SignIn} />
    </Navigator>
  );
}
