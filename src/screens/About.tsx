// import { useNavigation, useRoute } from "@react-navigation/native";
import { View } from "react-native";
import { SansBold, SansRegular } from "../components/Sans";
// import { AboutScreenRouteProp, RootNavigationProp } from "../navigation/types";

export function About() {
  // const navigation = useNavigation<RootNavigationProp>();

  // const route = useRoute<AboutScreenRouteProp>();
  // const { author, version } = route.params;

  return (
    <View className="flex-1 bg-background-0 items-center justify-center">
      <SansBold className="text-4xl text-text-900">About</SansBold>
      <SansRegular className="text-text-500">
        Go{" "}
        <SansRegular
          className="text-secondary-400"
          // onPress={() => {
          //   navigation.goBack();
          // }}
        >
          back page
        </SansRegular>
        .
      </SansRegular>
      {/* <SansRegular className="mt-2 p-3 bg-background-50 text-text-700 rounded-lg">
        {JSON.stringify({ author, version }, null, 2)}
      </SansRegular> */}
    </View>
  );
}
