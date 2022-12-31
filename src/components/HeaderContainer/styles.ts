import styled from 'styled-components'
import BackgroundLogo from '../../assets/Background.svg'

export const Container = styled.header``

export const HomeHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  height: 34rem;
  padding: 0 10rem;
  background-image: url(${BackgroundLogo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  .content {
    margin-bottom: 4.125rem;
    h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 3rem;
      line-height: 1.3;
      color: ${(props) => props.theme['brown-300']};
      margin-bottom: 1rem;
    }
    p {
      font-weight: 400;
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['brown-200']};
    }
  }
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.25rem;
  }
`
interface itemsProps {
  variant: string
}

export const ItemContainer = styled.div<itemsProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  p {
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-100']};
  }
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.variant};
    min-width: 2rem;
    min-height: 2rem;
    border-radius: 50%;
  }
`
