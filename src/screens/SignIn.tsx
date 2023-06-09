import { Image, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import marketLogo from '@assets/logo.png'
import { TextInput } from '@components/Form/TextInput'
import { Button } from '@components/Ui/Button'
import { useNavigation } from '@react-navigation/native'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignIn() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoToSingUp() {
    navigation.navigate('signUp')
  }

  return (
    <SafeAreaView className="flex-1">
      <View className="w-full flex-1 items-center justify-center rounded-3xl bg-gray-6 px-12 py-16">
        <Image source={marketLogo} alt="" />
        <Text className="text-3xl font-bold text-gray-1">marketspace</Text>
        <Text className="text-sm text-gray-3">
          Seu espaço de compra e venda
        </Text>

        <View className="mt-20 w-full space-y-8">
          <View className="w-full items-center space-y-4">
            <Text className="text-sm text-gray-2">Acesse sua conta</Text>
            <TextInput placeholder="E-mail" />
            <TextInput placeholder="Senha" />
          </View>
          <Button>Entrar</Button>
        </View>
      </View>

      <View className="w-full items-center justify-center space-y-4 bg-white px-12 pb-20 pt-12">
        <Text className="text-sm text-gray-2">Ainda não tem acesso?</Text>
        <Button colorSchema="gray" onPress={handleGoToSingUp}>
          Criar uma conta
        </Button>
      </View>
    </SafeAreaView>
  )
}
