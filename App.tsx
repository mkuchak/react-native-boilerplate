import "react-native-gesture-handler";

import { StatusBar, View } from "react-native";
import { useLoadedFonts } from "./src/hooks/useLoadedFonts";
import { Navigation } from "./src/navigation";

export default function App() {
  const { fontsLoaded, onLayoutRootView } = useLoadedFonts();

  if (!fontsLoaded) return null;

  return (
    <>
      <Navigation />

      <View onLayout={onLayoutRootView}>
        <StatusBar
          barStyle={"dark-content"}
          backgroundColor="transparent"
          translucent
        />
      </View>
    </>
  );
}
