import { tw } from '@utils/tw'
import { PropsWithChildren } from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ButtonProps extends TouchableOpacityProps, PropsWithChildren {
  colorSchema?: 'gray' | 'black' | 'purple'
}

export function Button({
  children,
  className,
  colorSchema = 'purple',
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={tw(
        'flex w-full items-center justify-center rounded-md h-12',
        { 'bg-blue-light': colorSchema === 'purple' },
        { 'bg-gray-1': colorSchema === 'black' },
        { 'bg-gray-5': colorSchema === 'gray' },
        className,
      )}
      {...rest}
    >
      <Text
        className={tw(
          'text-sm font-bold ',
          { 'text-white': colorSchema === 'purple' },
          { 'text-white': colorSchema === 'black' },
          { 'text-gray-2': colorSchema === 'gray' },
        )}
      >
        {children}
      </Text>
    </TouchableOpacity>
  )
}
