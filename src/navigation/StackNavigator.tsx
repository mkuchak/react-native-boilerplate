import { createStackNavigator } from '@react-navigation/stack'

import { About } from '@/screens/About'
import { Home } from '@/screens/Home'

const { Navigator, Screen } = createStackNavigator()

export function StackNavigator() {
  return (
    <Navigator>
      <Screen
        name="Home"
        component={Home}
        options={() => ({
          headerShown: false,
        })}
      />
      <Screen
        name="About"
        component={About}
        options={() => ({
          headerShown: true,
          headerTitleAlign: 'center',
        })}
      />
    </Navigator>
  )
}
