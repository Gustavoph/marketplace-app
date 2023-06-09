import { tw } from '@utils/tw'
import { PropsWithChildren } from 'react'
import { Text as NativeText, TextProps as NativeTextProps } from 'react-native'

interface TextProps extends NativeTextProps, PropsWithChildren {}

export function Text({ children, className, ...rest }: TextProps) {
  return (
    <NativeText className={tw('text-sm text-gray-3', className)} {...rest}>
      {children}
    </NativeText>
  )
}
