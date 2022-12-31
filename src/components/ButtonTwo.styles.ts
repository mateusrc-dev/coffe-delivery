import styled from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 8.25rem;
  height: 2.875rem;
  background: ${props => props.theme['yellow-200']};
  border-radius: 6px;
  font-weight: 700;
  color: ${props => props.theme['white']};
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  &:hover {
    background: ${props => props.theme['yellow-300']};
  }
`;
