import { tw } from '@utils/tw'
import { useState } from 'react'
import {
  TextInput as ReactTextInput,
  TextInputProps as ReactTextInputProps,
} from 'react-native'

interface TextInputProps extends ReactTextInputProps {}

export function TextInput({ ...rest }: TextInputProps) {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <ReactTextInput
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className={tw(
        'h-12 w-full rounded-md border border-transparent bg-gray-7 px-4 text-gray-2',
        {
          'border-gray-3': isFocused,
        },
      )}
      {...rest}
    />
  )
}
