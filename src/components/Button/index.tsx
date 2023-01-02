import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './styles'

interface ButtonProps {
  variant?: ButtonVariant
  variantSvg?: ButtonVariant
  children: ReactNode
  onClick?: any
  disabled?: boolean
}

export function Button({
  variant = 'primary',
  variantSvg = 'colorSvgOne',
  children,
  onClick,
  disabled,
}: ButtonProps) {
  return (
    <ButtonContainer
      onClick={onClick}
      variant={variant}
      variantSvg={variantSvg}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  )
}
