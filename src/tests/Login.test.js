import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../helpers/renderWithRouter';
import Login from '../pages/Login';

const EMAIL_TESTID = 'email-input';
const VALID_EMAIL = 'teste@teste.com';
const PASSWORD_TESTID = 'password-input';
const VALID_PASSWORD = '123456';
const BUTTON_TESTID = 'login-submit-btn';

describe('Verifica se a tela de Login está sendo renderizada.', () => {
  beforeEach(() => {
    renderWithRouter(<Login />);
  });

  it('Verifica se oHeader está presente na página de Login', () => {
    const appHeader = screen.getByText('Recipes App');
    expect(appHeader).toBeInTheDocument();
  });

  it('Verifica se campo de Email está sendo renderizado na página de Login.', () => {
    const emailInput = screen.getByTestId(EMAIL_TESTID);
    expect(emailInput).toBeInTheDocument();
  });

  it('Verifica se campo de Senhal está sendo renderizado na página de Login.', () => {
    const passwordInput = screen.getByTestId(PASSWORD_TESTID);
    expect(passwordInput).toBeInTheDocument();
  });

  it('Verifica se campo de Senhal está sendo renderizado na página de Login.', () => {
    const buttonInput = screen.getByTestId(BUTTON_TESTID);
    expect(buttonInput).toBeInTheDocument();
  });

  it('Verifica se é possível escrever o email', () => {
    const emailInput = screen.getByTestId(EMAIL_TESTID);
    userEvent.type(emailInput, VALID_EMAIL);
    expect(emailInput).toHaveValue(VALID_EMAIL);
  });

  it('Verifica se é possível escrever o password', () => {
    const passwordInput = screen.getByTestId(PASSWORD_TESTID);
    userEvent.type(passwordInput, VALID_PASSWORD);
    expect(passwordInput).toHaveValue(VALID_PASSWORD);
  });

  it('Verifica se o botão está desativado se o email for inválido.', () => {
    const emailInput = screen.getByTestId(EMAIL_TESTID);
    const buttonInput = screen.getByTestId(BUTTON_TESTID);
    const passwordInput = screen.getByTestId(PASSWORD_TESTID);
    userEvent.type(emailInput, 'sadfs');
    userEvent.type(passwordInput, '123sdas');
    expect(buttonInput).toBeDisabled();
  });

  it('Verifica se o botão está desativado se o password for inválido.', () => {
    const emailInput = screen.getByTestId(EMAIL_TESTID);
    const buttonInput = screen.getByTestId(BUTTON_TESTID);
    const passwordInput = screen.getByTestId(PASSWORD_TESTID);
    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, '123daa');
    expect(buttonInput).toBeDisabled();
  });

  it('Verifica se o botão está ativado se o password for inválido.', () => {
    const emailInput = screen.getByTestId(EMAIL_TESTID);
    const buttonInput = screen.getByTestId(BUTTON_TESTID);
    const passwordInput = screen.getByTestId(PASSWORD_TESTID);
    userEvent.type(emailInput, VALID_EMAIL);
    userEvent.type(passwordInput, '123ddsdaa');
    expect(buttonInput).not.toBeDisabled();
  });
});
