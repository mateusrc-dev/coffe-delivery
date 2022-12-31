import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  overflow-y: scroll;
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
`
