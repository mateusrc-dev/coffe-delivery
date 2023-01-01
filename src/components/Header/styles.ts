import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.5rem;
  padding: 0 10rem;
  .logo {
    width: 5.3125rem;
    height: 2.5rem;
  }

  .linkLogo {
    display: flex;
    align-items: center;
    justify-content: center;
    &:focus {
      border-radius: 6px;
    }
  }

  .requestAndLocalization {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75rem;
  }
  .link {
    &:hover {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-100']};
      border-radius: 6px;
    }
    &.active {
      box-shadow: 0 0 0 1px ${(props) => props.theme['purple-300']};
      border-radius: 6px;
    }
  }

  .localization {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;
    padding: 0.5rem;
    background: ${(props) => props.theme['purple-100']};
    border-radius: 6px;
    color: ${(props) => props.theme['purple-300']};
    font-weight: 400;
    font-size: 0.875rem;
  }
`