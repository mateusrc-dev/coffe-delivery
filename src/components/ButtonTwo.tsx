import { ReactNode } from 'react'
import { ButtonContainer } from './ButtonTwo.styles'

interface ButtonProps {
  children: ReactNode
}

export function ButtonTwo({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>
}
