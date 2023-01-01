import styled from 'styled-components'

export const RequestContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 15px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['purple-200']};
    border-radius: 10px;
    width: 0px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${(props) => props.theme['purple-300']};
    border-radius: 0px;
    width: 0px;
    border-radius: 10px;
    background-clip: padding-box;
    border: 3px solid transparent;
  }
  main {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 0 10rem;
  }
  h2 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-200']};
    margin-top: 2.5rem;
    margin-bottom: 0.9375rem;
  }
  input {
    padding: 0.75rem;
    gap: 0.25rem;
    border: 1px solid ${(props) => props.theme['gray-500']};
    border-radius: 4px;
    background: ${(props) => props.theme['gray-800']};
    &::placeholder {
      text-align: justify;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-700']};
    }
  }
  .enterData {
    height: 100vh;
    padding-bottom: 5rem;
  }
  .containerData {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    width: 40rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 6px;
    margin-bottom: 0.75rem;
    .cep {
      width: 12.5rem;
      margin-bottom: 1rem;
    }
    .number {
      width: 12.5rem;
      margin-top: 1rem;
      margin-right: 0.75rem;
      margin-bottom: 1rem;
    }
    .complement {
      width: 21.75rem;
    }
    .district {
      width: 12.5rem;
      margin-right: 0.75rem;
    }
    .city {
      width: 17.25rem;
      margin-right: 0.75rem;
    }
    .state {
      width: 3.75rem;
    }
    .informations {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;
      .Informations {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
      }
      h3 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-200']};
        gap: 0.5rem;
      }
      p {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
  }
  .payment {
    display: flex;
    flex-direction: column;
    padding: 2.5rem;
    width: 40rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 6px;
    .paymentContainer {
      display: flex;
      align-items: flex-start;
      gap: 0.5rem;
      margin-bottom: 2rem;
      .paymentContainerTwo {
        display: flex;
        flex-direction: column;
        gap: 0.125rem;
      }
      h3 {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-200']};
        gap: 0.5rem;
      }
      p {
        font-weight: 400;
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
    .formOfPayment {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      button {
        border: none;
        display: flex;
        align-items: center;
        padding: 1rem;
        gap: 0.75rem;
        white-space: nowrap;
        width: 11.125rem;
        height: 3.1875rem;
        background: ${(props) => props.theme['gray-500']};
        border-radius: 6px;
        gap: 0.75rem;
        font-weight: 400;
        font-size: 0.75rem;
        line-height: 1.6;
        color: ${(props) => props.theme['brown-100']};
        cursor: pointer;
        &:hover {
          background: ${(props) => props.theme['gray-600']};
        }
      }
    }
  }
  .ContainerCoffees {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 2.5rem;
    width: 28rem;
    background: ${(props) => props.theme['gray-300']};
    border-radius: 6px 44px 6px 44px;
    .coffee {
      display: flex;
      align-items: flex-start;
      padding-bottom: 1.5rem;
      padding-top: 1.5rem;
      border-bottom: 1px solid ${(props) => props.theme['gray-500']};
      &:nth-child(1) {
        padding-bottom: 1.5rem;
        padding-top: 0;
      }
      img {
        width: 4rem;
        height: 4rem;
      }
      .content {
        margin-left: 1.25rem;
        margin-right: 3.125rem;
        p {
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.3;
          color: ${(props) => props.theme['brown-200']};
          margin-bottom: 0.5rem;
        }
        .amountAndButton {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .amountItem {
          button {
            background: none;
            border: none;
            cursor: pointer;
          }
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          width: 4.5rem;
          height: 2rem;
          background: ${(props) => props.theme['gray-500']};
          border-radius: 6px;
        }
        .button {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 0.25rem;
          width: 5.6875rem;
          height: 2rem;
          background: ${(props) => props.theme['gray-500']};
          border-radius: 6px;
          font-weight: 400;
          font-size: 0.75rem;
          line-height: 1.6;
          color: ${(props) => props.theme['brown-100']};
          border: none;
          cursor: pointer;
          &:hover {
            background: ${(props) => props.theme['gray-600']};
          }
        }
      }
      .price {
        font-weight: 700;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
    .fullItems {
      margin-top: 1.5625rem;
      margin-bottom: 0.75rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:nth-child(1) {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
      span:nth-child(2) {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
    .delivery {
      margin-bottom: 0.75rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:nth-child(1) {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
      span:nth-child(2) {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
    .fullPrice {
      margin-bottom: 1.5rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:nth-child(1) {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
      span:nth-child(2) {
        font-weight: 400;
        font-size: 1rem;
        line-height: 1.3;
        color: ${(props) => props.theme['brown-100']};
      }
    }
    .confirmRequest {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      gap: 0.25rem;
      width: 100%;
      height: 2.875rem;
      background: ${(props) => props.theme['yellow-200']};
      border-radius: 6px;
      font-weight: 700;
      font-size: 0.875rem;
      line-height: 1.6;
      color: ${(props) => props.theme.white};
      cursor: pointer;
      &:hover {
        background: ${(props) => props.theme['yellow-300']};
      }
    }
  }
`
