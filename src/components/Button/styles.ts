import styled, { css } from 'styled-components'

export type ButtonVariant =
  | 'primary'
  | 'secondary'
  | 'colorSvgOne'
  | 'colorSvgTwo'

interface ButtonContainerProps {
  variant: ButtonVariant
  variantSvg: ButtonVariant
}

const buttonVariants = {
  primary: '#4B2995',
  secondary: '#F1E9C9',
  colorSvgOne: '#F3F2F2',
  colorSvgTwo: '#C47F17',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${(props) =>
    css`
      background-color: ${buttonVariants[props.variant]};
    `}
  svg {
    font-size: 1.575rem;
    ${(props) =>
      css`
        color: ${buttonVariants[props.variantSvg]};
      `}
  }
  &:hover {
    ${(props) =>
      css`
        background-color: ${buttonVariants[props.variant] ===
        buttonVariants.secondary
          ? null
          : props.theme['purple-200']};
      `}
  }
`
