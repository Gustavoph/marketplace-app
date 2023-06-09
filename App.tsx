import { StatusBar, View } from 'react-native'

import { Routes } from '@routes/index'

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <Routes />
    </View>
  )
}
