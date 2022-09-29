import { Heart } from "phosphor-react-native";
import { ChatStackNavigator } from "./StackNavigators/ChatStackNavigator";
import { HomeStackNavigator } from "./StackNavigators/HomeStackNavigator";
import { ProfileStackNavigator } from "./StackNavigators/ProfileStackNavigator";
import { SettingsStackNavigator } from "./StackNavigators/SettingsStackNavigator";
import { SignInStackNavigator } from "./StackNavigators/SignInStackNavigator";

export const screens = {
  HomeTab: "HomeTab",
  HomeStack: "HomeStack",
  Home: "Home",
  SettingsStack: "SettingsStack",
  Settings: "Settings",
  ProfileStack: "ProfileStack",
  Profile: "Profile",
  ChatStack: "ChatStack",
  Chat: "Chat",
  SignInStack: "SignInStack",
  SignIn: "SignIn",

  // Add more screens here
};

export const routes = [
  {
    name: screens.HomeTab,
    focusedRoute: screens.HomeTab,
    title: "Home",
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.HomeStack,
    focusedRoute: screens.HomeStack,
    // component: () => <HomeStackNavigator />,
    // component: HomeStackNavigator,
    title: "Home",
    showInTab: true,
    showInDrawer: true,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.Home,
    focusedRoute: screens.HomeStack,
    title: "Home",
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.SettingsStack,
    focusedRoute: screens.SettingsStack,
    // component: () => <SettingsStackNavigator />,
    // component: SettingsStackNavigator,
    title: "Settings",
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.Settings,
    focusedRoute: screens.SettingsStack,
    title: "Settings",
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.ProfileStack,
    focusedRoute: screens.ProfileStack,
    // component: () => <ProfileStackNavigator />,
    // component: ProfileStackNavigator,
    title: "Profile",
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.Profile,
    focusedRoute: screens.ProfileStack,
    title: "Profile",
    showInTab: true,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.ChatStack,
    focusedRoute: screens.ChatStack,
    // component: () => <ChatStackNavigator />,
    // component: ChatStackNavigator,
    title: "Chat",
    showInTab: false,
    showInDrawer: true,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.Chat,
    focusedRoute: screens.ChatStack,
    title: "Chat",
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.SignInStack,
    focusedRoute: screens.SignInStack,
    // component: () => <SignInStackNavigator />,
    // component: SignInStackNavigator,
    title: "Sign In",
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },
  {
    name: screens.SignIn,
    focusedRoute: screens.SignInStack,
    title: "Sign In",
    showInTab: false,
    showInDrawer: false,
    icon: (focused: boolean) => <Heart weight={focused ? "fill" : "regular"} />,
  },

  // Add more routes here
];

export type Screen = keyof typeof screens;
export type Route = typeof routes[number];
