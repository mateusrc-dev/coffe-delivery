import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['gray-300']};
  border-radius: 6px 36px 6px 36px;

  img {
    margin-top: -1.25rem;
    margin-bottom: 0.75rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    gap: 0.25rem;
    margin-bottom: 1.25rem;
    .tag {
      display: flex;
      justify-content: center;
      align-items: center;
      background: ${(props) => props.theme['yellow-100']};
      border-radius: 100px;
      padding: 0.25rem 0.5rem;
    }
    p {
      font-weight: 700;
      font-size: 0.625rem;
      line-height: 1.3;
      color: ${(props) => props.theme['yellow-300']};
    }
  }

  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-200']};
    margin-bottom: 0.5rem;
  }

  .description {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['gray-700']};
    padding: 0 1.25rem;
    margin-bottom: 2.0625rem;
  }

  .finishedBuy {
    display: flex;
    .price {
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['brown-100']};
    }
    .Price {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 1.5rem;
      line-height: 1.3;
      color: ${(props) => props.theme['brown-100']};
    }
    .amountItems {
      button {
        background: none;
        border: none;
        cursor: pointer;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0.5rem;
      gap: 0.25rem;
      background: ${(props) => props.theme['gray-500']};
      border-radius: 6px;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.3;
      color: ${(props) => props.theme['brown-300']};
    }
  }
`
