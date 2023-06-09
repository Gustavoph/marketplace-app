import { Image, View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PencilSimpleLine, User } from 'phosphor-react-native'
import { useNavigation } from '@react-navigation/native'

import marketLogo from '@assets/logo.png'
import { TextInput } from '@components/Form/TextInput'
import { Button } from '@components/Ui/Button'
import { AuthNavigatorRoutesProps } from '@routes/auth.routes'

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRoutesProps>()

  function handleGoToSingIn() {
    navigation.navigate('signIn')
  }

  return (
    <SafeAreaView className="flex-1 pt-9">
      <ScrollView>
        <View className="items-center px-12">
          <Image source={marketLogo} alt="" className="mb-4 h-10 w-14" />
          <Text className="text-xl font-bold text-gray-1">Boas vindas!</Text>
          <Text className="text-center text-sm text-gray-3">
            Crie sua conta e use o espaço para comprar itens variados e vender
            seus produtos
          </Text>

          <View className="mt-8 w-full items-center space-y-5">
            <View className="w-full items-center space-y-4">
              <View className="relative h-22 w-22 items-center justify-center rounded-full border-[3px] border-blue-light bg-gray-5">
                <User weight="bold" color="#5F5B62" size="44" />
                <View className="absolute -right-3 bottom-0 h-10 w-10 items-center justify-center rounded-full bg-blue-light">
                  <PencilSimpleLine color="white" />
                </View>
              </View>
              <TextInput placeholder="Nome" />
              <TextInput placeholder="E-mail" />
              <TextInput placeholder="Telefone" />
              <TextInput placeholder="Senha" />
              <TextInput placeholder="Confirmar senha" />
            </View>
            <Button colorSchema="black">Criar</Button>
          </View>

          <View className="w-full items-center justify-center space-y-4 px-12 pb-20 pt-12">
            <Text className="text-sm text-gray-2">Já tem uma conta?</Text>
            <Button colorSchema="gray" onPress={handleGoToSingIn}>
              Ir para o login
            </Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
