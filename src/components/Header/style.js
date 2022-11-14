/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['blue-dark']};
  color: ${(props) => props.theme['base-button']};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;

  button {
    border: none;
    padding: 1rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme['base-button']}
  }
`;

export const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
`;
