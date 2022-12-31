import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  overflow-y: auto;
  .titleHome {
    padding: 0 10rem;
    margin-top: 5.75rem;
    margin-bottom: 3.375rem;
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['brown-200']};
  }
  .cofes {
    padding: 0 10rem;
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }
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
`
