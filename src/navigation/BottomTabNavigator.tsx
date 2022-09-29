import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from "@react-navigation/bottom-tabs";
import { View } from "react-native";
import { SansRegular } from "../components/Sans";
import { routes, screens } from "./NavigationMap";
import { ChatStackNavigator } from "./StackNavigators/ChatStackNavigator";
import { HomeStackNavigator } from "./StackNavigators/HomeStackNavigator";
import { ProfileStackNavigator } from "./StackNavigators/ProfileStackNavigator";
import { SettingsStackNavigator } from "./StackNavigators/SettingsStackNavigator";
import { SignInStackNavigator } from "./StackNavigators/SignInStackNavigator";

const { Navigator, Screen } = createBottomTabNavigator();

function tabOptions({ route }: { route: { name: string } }) {
  const item = routes.find((item) => item.name === route.name);

  if (!item?.showInTab) {
    return {
      tabBarButton: () => <View style={{ width: 0 }} />,
      headerShown: false,
      tabBarStyle: { tabContainer: { height: 60 } },
      title: item?.title,
    };
  }

  return {
    tabBarIcon: ({ focused }: { focused: boolean }) => item.icon(focused),
    tabBarLabel: () => (
      <SansRegular style={{ fontSize: 12 }}>{item.title || ""}</SansRegular>
    ),
    headerShown: false,
    tabBarStyle: { tabContainer: { height: 60 } },
    title: item?.title,
  };
}

export function BottomTabNavigator() {
  return (
    <Navigator screenOptions={tabOptions as BottomTabNavigationOptions}>
      <Screen name={screens.HomeStack} component={HomeStackNavigator} />
      <Screen name={screens.SettingsStack} component={SettingsStackNavigator} />
      <Screen name={screens.ProfileStack} component={ProfileStackNavigator} />
      <Screen name={screens.ChatStack} component={ChatStackNavigator} />
      <Screen name={screens.SignInStack} component={SignInStackNavigator} />

      {/* {routes
        .filter((route) => route.component)
        .map((route) => (
          <Screen
            key={route.name}
            name={route.name}
            // component={route.component}
          >
            {route.component}
          </Screen>
        ))} */}
    </Navigator>
  );
}
