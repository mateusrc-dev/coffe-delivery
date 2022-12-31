import styled from 'styled-components'

export const HomeContainer = styled.div``
export const HomeHeader = styled.header`
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
  .item {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    .icon {
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${(props) => props.theme['purple-200']};
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
    }
  }
`
