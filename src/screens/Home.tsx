// import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { SansBold, SansRegular } from "../components/Sans";
// import { RootNavigationProp } from "../navigation/navigationTypes";

export function Home() {
  // const navigation = useNavigation<RootNavigationProp>();

  return (
    <View className="flex-1 bg-background-0 items-center justify-center">
      <SansBold className="text-4xl text-text-900">Home</SansBold>
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
