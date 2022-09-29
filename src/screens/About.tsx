import { useNavigation, useRoute } from '@react-navigation/native'
import { View } from 'react-native'

import { SansBold, SansRegular } from '@/components/Sans'

interface RouteParams {
  author?: string;
  version?: string;
}

export function About() {
  const navigation = useNavigation()

  const route = useRoute()
  const data = route.params as RouteParams

  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <SansBold className="text-4xl text-text-900">About</SansBold>
      <SansRegular className="text-text-500">
        Go{' '}
        <SansRegular
          className="text-secondary-400"
          onPress={() => {
            navigation.goBack()
          }}
        >
          back page
        </SansRegular>
        .
      </SansRegular>
      {data && (
        <SansRegular className="mt-2 rounded-lg bg-[#d8e7ef5e] p-4 text-text-700">
          {JSON.stringify(data, null, 2)}
        </SansRegular>
      )}
    </View>
  )
}
