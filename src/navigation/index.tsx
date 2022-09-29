/**
 * @references How to build custom navigation:
 * https://dev.to/deversity/combining-drawer-tab-and-stack-navigators-in-react-navigation-6-part-2-ol7
 * https://github.com/anyamiletic/rn_navigation_project
 */

import { NavigationContainer } from "@react-navigation/native";
import { createRef } from "react";
import { DrawerNavigator } from "./DrawerNavigator";

export function Navigation() {
  const navigationRef = createRef();
  const nav = () => navigationRef.current;

  return (
    <NavigationContainer>
      <DrawerNavigator nav={nav} />
    </NavigationContainer>
  );
}
