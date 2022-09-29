import { NavigationContainer } from '@react-navigation/native'

import { DrawerNavigator } from './DrawerNavigator'

export function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  )
}
