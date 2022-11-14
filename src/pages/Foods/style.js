/* eslint-disable import/prefer-default-export */
import styled, { keyframes } from 'styled-components';

export const CategoryButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  padding: 1rem;

  button {
    width: 6rem;
    height: 2rem;
    border: none;
    background-color: ${(props) => props.theme.mustard};
    border-radius: 6px;
  }
`;

export const FoodsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  
  border-top: 2px solid #F4A261;
  border-right: 2px solid #F4A261;
  border-bottom: 2px solid #F4A261;
  border-left: 4px solid ${(props) => props.theme['orange-dark']};
  background: transparent;
  width: 48px;
  height: 48px;
  border-radius: 50%;
`;

export const SpinnerContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
