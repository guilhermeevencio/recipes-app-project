/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const LoginContainerDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  gap: 2rem;

  img {
    border-radius: 6px;
    width: 80%;
  }
`;

export const InputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 80%;

  input {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme['base-input']};
    border: none;
  }
`;

export const LoginButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme['base-input']};
  width: 80%;
  border: none;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
`;
