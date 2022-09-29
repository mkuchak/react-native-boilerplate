import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useCallback } from 'react'

SplashScreen.preventAutoHideAsync()

export function useLoadedFonts() {
  const [fontsLoaded] = useFonts({
    'SulSans-Light': require('../../assets/fonts/SulSans-Light.ttf'),
    'SulSans-Regular': require('../../assets/fonts/SulSans-Regular.ttf'),
    'SulSans-Medium': require('../../assets/fonts/SulSans-Medium.ttf'),
    'SulSans-Bold': require('../../assets/fonts/SulSans-Bold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  return { fontsLoaded, onLayoutRootView }
}
