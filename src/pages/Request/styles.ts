import styled from 'styled-components'

export const RequestContainer = styled.div`
  height: 100vh;
  overflow-y: auto;
  display: flex;
  gap: 2rem;
  padding: 0 10rem;
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
    margin-bottom: 0.75rem;
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
`
