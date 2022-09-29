import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItem,
  DrawerNavigationOptions,
} from "@react-navigation/drawer";
import { List } from "phosphor-react-native";
import React, { RefAttributes } from "react";
import {
  ScrollView,
  ScrollViewProps,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { SansRegular } from "../components/Sans";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { routes, screens } from "./NavigationMap";

const { Navigator, Screen } = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  const currentRouteName = props.nav()?.getCurrentRoute()?.name;

  return (
    <DrawerContentScrollView {...props}>
      {routes
        .filter((route) => route.showInDrawer)
        .map((route) => {
          const focusedRoute = routes.find(
            (route) => route.name === currentRouteName
          );
          const focused = focusedRoute
            ? route.name === focusedRoute?.focusedRoute
            : route.name === screens.HomeStack;

          return (
            <DrawerItem
              key={route.name}
              label={() => (
                <SansRegular
                  style={
                    focused ? styles.drawerLabelFocused : styles.drawerLabel
                  }
                >
                  {route.title}
                </SansRegular>
              )}
              onPress={() => props.navigation.navigate(route.name)}
              style={[
                styles.drawerItem,
                focused ? styles.drawerItemFocused : null,
              ]}
            />
          );
        })}
    </DrawerContentScrollView>
  );
}

export function DrawerNavigator({ nav }: any) {
  return (
    <Navigator
      screenOptions={({ navigation }) =>
        ({
          headerStyle: {
            backgroundColor: "#8acaff",
            height: 60,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => navigation.toggleDrawer()}
              style={{ marginLeft: 10 }}
            >
              <List size={24} color="white" />
            </TouchableOpacity>
          ),
        } as DrawerNavigationOptions)
      }
      drawerContent={(props) => <CustomDrawerContent {...props} nav={nav} />}
    >
      <Screen
        name={screens.HomeTab}
        component={BottomTabNavigator}
        // options={{ headerShown: false }}
      />
    </Navigator>
  );
}

const styles = StyleSheet.create({
  headerLeft: {
    marginLeft: 15,
  },
  headerTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "500",
  },
  headerRight: {
    marginRight: 15,
  },
  // drawer content
  drawerLabel: {
    fontSize: 14,
  },
  drawerLabelFocused: {
    fontSize: 14,
    color: "#551E18",
    fontWeight: "500",
  },
  drawerItem: {
    height: 50,
    justifyContent: "center",
  },
  drawerItemFocused: {
    backgroundColor: "#ba9490",
  },
});
