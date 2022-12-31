import { ReactNode } from 'react'
import { ButtonContainer } from './styles'

interface ButtonProps {
  children: ReactNode
}

export function ButtonTwo({ children }: ButtonProps) {
  return <ButtonContainer>{children}</ButtonContainer>
}
