import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  Calendar,
  DotsThree,
  House,
  MagnifyingGlass,
  Percent,
} from 'phosphor-react-native'
import {
  BorderlessButton,
  BorderlessButtonProps,
} from 'react-native-gesture-handler'

import { tw } from '@/libs/tailwind'
import { More } from '@/screens/More'
import { Offers } from '@/screens/Offers'
import { Orders } from '@/screens/Orders'
import { Search } from '@/screens/Search'
import { background, secondary } from '@/utils/colors.json'

import { StackNavigator } from './StackNavigator'

const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabNavigator() {
  return (
    <Navigator
      screenOptions={() => ({
        tabBarStyle: tw(
          'rounded-t-5 h-14 w-full border-t-0 bg-white py-1.5 shadow-none',
        ),
        tabBarBadgeStyle: tw('bg-secondary-400 text-text-50'),
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarShowLabel: false,
      })}
    >
      <Screen
        name="StackNavigator"
        component={StackNavigator}
        options={() => ({
          headerShown: false,
          title: 'Home',
          tabBarButton: (props) => (
            <BorderlessButton
              rippleColor={background[50]}
              {...(props as BorderlessButtonProps)}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <House
              size={26}
              color={focused ? secondary[400] : background[400]}
              weight="regular"
            />
          ),
        })}
      />
      <Screen
        name="Offers"
        component={Offers}
        options={() => ({
          headerShown: false,
          tabBarButton: (props) => (
            <BorderlessButton
              rippleColor={background[50]}
              {...(props as BorderlessButtonProps)}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <Percent
              size={26}
              color={focused ? secondary[400] : background[400]}
              weight="regular"
            />
          ),
        })}
      />
      <Screen
        name="Search"
        component={Search}
        options={() => ({
          headerShown: false,
          tabBarButton: (props) => (
            <BorderlessButton
              rippleColor={background[50]}
              {...(props as BorderlessButtonProps)}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <MagnifyingGlass
              size={26}
              color={focused ? secondary[400] : background[400]}
              weight="regular"
            />
          ),
        })}
      />
      <Screen
        name="Orders"
        component={Orders}
        options={() => ({
          headerShown: false,
          tabBarBadge: 3,
          tabBarButton: (props) => (
            <BorderlessButton
              rippleColor={background[50]}
              {...(props as BorderlessButtonProps)}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <Calendar
              size={26}
              color={focused ? secondary[400] : background[400]}
              weight="regular"
            />
          ),
        })}
      />
      <Screen
        name="More"
        component={More}
        options={() => ({
          headerShown: false,
          tabBarButton: (props) => (
            <BorderlessButton
              rippleColor={background[50]}
              {...(props as BorderlessButtonProps)}
            />
          ),
          tabBarIcon: ({ focused }) => (
            <DotsThree
              size={26}
              color={focused ? secondary[400] : background[400]}
              weight="regular"
            />
          ),
        })}
      />
    </Navigator>
  )
}
