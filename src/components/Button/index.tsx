import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  variantSvg?: ButtonVariant
  children: ReactNode
  onClick?: any
}

export function Button({
  variant = 'primary',
  variantSvg = 'colorSvgOne',
  children,
  onClick,
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      variantSvg={variantSvg}
    >
      {children}
    </ButtonContainer>
  )
}
