import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  SignIn: {};
  Home: {};
  About: {
    author: string;
    version: string;
  };
};
export type AboutScreenRouteProp = RouteProp<RootStackParamList, "About">;

export type RootDrawerParamList = {
  Settings: {};
};

export type RootTabParamList = {
  Home: {};
  Settings: {};
};

export type RootNavigationProp = StackNavigationProp<RootStackParamList>;
