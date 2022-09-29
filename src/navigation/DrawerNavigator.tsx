import { createDrawerNavigator } from '@react-navigation/drawer'
import { ChatCircle, House } from 'phosphor-react-native'

import { tw } from '@/libs/tailwind'
import { Chat } from '@/screens/Chat'
import { background, secondary, text } from '@/utils/colors.json'

import { BottomTabNavigator } from './BottomTabNavigator'

const { Navigator, Screen } = createDrawerNavigator()

export function DrawerNavigator() {
  return (
    <Navigator
      screenOptions={() => ({
        drawerActiveBackgroundColor: background[0],
        drawerActiveTintColor: text[800],
        drawerInactiveTintColor: background[100],
        drawerLabelStyle: tw('font-sulsans-medium text-base'),
        drawerItemStyle: tw('rounded-xl'),
        drawerStyle: tw('w-3/4 bg-white px-4'),
        drawerType: 'slide',
      })}
    >
      <Screen
        name="BottomTabNavigator"
        component={BottomTabNavigator}
        options={() => ({
          headerShown: false,
          title: 'Home',
          drawerIcon: ({ focused }) => (
            <House
              size={26}
              color={focused ? secondary[400] : background[100]}
              weight="bold"
            />
          ),
        })}
      />
      <Screen
        name="Chat"
        component={Chat}
        options={() => ({
          headerShown: false,
          drawerIcon: ({ focused }) => (
            <ChatCircle
              size={26}
              color={focused ? secondary[400] : background[100]}
              weight="bold"
            />
          ),
        })}
      />
    </Navigator>
  )
}
