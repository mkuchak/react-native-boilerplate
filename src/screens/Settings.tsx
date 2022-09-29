// import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { SansBold, SansRegular } from "../components/Sans";
// import { RootNavigationProp } from "../navigation/types";

export function Settings() {
  // const navigation = useNavigation<RootNavigationProp>();

  return (
    <View className="flex-1 bg-background-0 items-center justify-center">
      <SansBold className="text-4xl text-text-900">Settings</SansBold>
      <SansRegular className="text-text-500">
        Go to{" "}
        <SansRegular
          className="text-secondary-400"
          // onPress={() => {
          //   navigation.navigate("About", {
          //     author: "Marcos Kuchak",
          //     version: "0.0.1",
          //   });
          // }}
        >
          About page
        </SansRegular>
        .
      </SansRegular>
    </View>
  );
}
