import { useNavigation } from '@react-navigation/native'
import { View } from 'react-native'

import { SansBold, SansRegular } from '@/components/Sans'

export function Chat() {
  const navigation = useNavigation()

  return (
    <View className="flex-1 items-center justify-center bg-background-0">
      <SansBold className="text-4xl text-text-900">Chat</SansBold>
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
    </View>
  )
}
