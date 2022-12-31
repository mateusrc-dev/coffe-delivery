import { ReactNode } from 'react'
import { ButtonContainer, ButtonVariant } from './Button.styles'

interface ButtonProps {
  variant?: ButtonVariant
  variantSvg?: ButtonVariant
  children: ReactNode
}

export function Button({
  variant = 'primary',
  variantSvg = 'colorSvgOne',
  children,
}: ButtonProps) {
  return (
    <ButtonContainer variant={variant} variantSvg={variantSvg}>
      {children}
    </ButtonContainer>
  )
}
