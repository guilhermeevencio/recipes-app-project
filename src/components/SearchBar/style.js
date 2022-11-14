/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const SearchBarDiv = styled.div`
  background-color: ${(props) => props.theme['orange-dark']};
  color: ${(props) => props.theme['base-button']};
`;

export const ContentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 8rem;
  padding: 1rem;
`;

export const TextInputDiv = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 60%;
  justify-content: center;
  align-items: center;

  input {
    padding: 0.5rem 1rem;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 6px;
    border: none;
    width: 100%;
  }
`;

export const RadioInputsDiv = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  font-weight: 700;
`;

export const SearchButton = styled.button`
  padding: 0 0.25rem;
  background-color: ${(props) => props.theme['base-input']};
  width: 80%;
  border: none;
  border-radius: 6px;
  text-align: center;
  font-weight: 700;
  font-size: 1.5rem;
  width: 80%;
`;
