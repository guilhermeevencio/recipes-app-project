import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import renderWithRouter from '../../helpers/renderWithRouter';
import FoodDetails from '../../pages/FoodDetails';
import DrinksDetails from '../../pages/DrinksDetails';

describe('Implemente os elementos da tela de detalhes de uma receita de comida', () => {
  it('A foto deve possuir o atributo data-testid="recipe-photo"', () => {
    renderWithRouter(<FoodDetails />);
    const recipePhoto = screen.getByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
  });
  it('O título deve possuir o atributo data-testid="recipe-title"', () => {
    renderWithRouter(<FoodDetails />);
    const pageTitle = screen.getByTestId('recipe-title');
    expect(pageTitle).toBeInTheDocument();
  });
  it('O botão de compartilhar deve possuir o atributo data-testid="share-btn"', () => {
    renderWithRouter(<FoodDetails />);
    const shareBtn = screen.getByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
  });
  it('O botão de favoritar deve possuir o atributo data-testid="favorite-btn"', () => {
    renderWithRouter(<FoodDetails />);
    const favoriteBtn = screen.getByTestId('favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();
  });
  it('O texto da categoria deve possuir o atributo data-testid="recipe-category"', () => {
    renderWithRouter(<FoodDetails />);
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
  });
  it('Ingredientes devem ter o data-testid="{index}-ingredient-name-and-measure"', () => {
    renderWithRouter(<FoodDetails />);
    const ingredientsName = screen.getByTestId('0-ingredient-name-and-measure');
    expect(ingredientsName).toBeInTheDocument();
  });
  it('O texto de instruções deve possuir o atributo data-testid="instructions"', () => {
    renderWithRouter(<FoodDetails />);
    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });
  it('O vídeo deve possuir o atributo data-testid="video"', () => {
    renderWithRouter(<FoodDetails />);
    const video = screen.getByTestId('video');
    expect(video).toBeInTheDocument();
  });
  it('O card de receitas deve possuir o testid "index-recomendation-card"', () => {
    renderWithRouter(<FoodDetails />);
    const recomendations = screen.getByTestId('0-recomendation-card');
    expect(recomendations).toBeInTheDocument();
  });
  it('O botão de iniciar receita deve possuir o data-testid="start-recipe-btn"', () => {
    renderWithRouter(<FoodDetails />);
    const startRecipeButton = screen.getByTestId('start-recipe-btn');
    expect(startRecipeButton).toBeInTheDocument();
  });
});

describe('Implemente os elementos da tela de detalhes de uma receita de bebida', () => {
  it('A foto deve possuir o atributo data-testid="recipe-photo"', () => {
    renderWithRouter(<DrinksDetails />);
    const recipePhoto = screen.getByTestId('recipe-photo');
    expect(recipePhoto).toBeInTheDocument();
  });
  it('O título deve possuir o atributo data-testid="recipe-title"', () => {
    renderWithRouter(<DrinksDetails />);
    const pageTitle = screen.getByTestId('recipe-title');
    expect(pageTitle).toBeInTheDocument();
  });
  it('O botão de compartilhar deve possuir o atributo data-testid="share-btn"', () => {
    renderWithRouter(<DrinksDetails />);
    const shareBtn = screen.getByTestId('share-btn');
    expect(shareBtn).toBeInTheDocument();
  });
  it('O botão de favoritar deve possuir o atributo data-testid="favorite-btn"', () => {
    renderWithRouter(<DrinksDetails />);
    const favoriteBtn = screen.getByTestId('favorite-btn');
    expect(favoriteBtn).toBeInTheDocument();
  });
  it('O texto da categoria deve possuir o atributo data-testid="recipe-category"', () => {
    renderWithRouter(<DrinksDetails />);
    const recipeCategory = screen.getByTestId('recipe-category');
    expect(recipeCategory).toBeInTheDocument();
  });
  it('Ingredientes devem ter o data-testid="{index}-ingredient-name-and-measure"', () => {
    renderWithRouter(<DrinksDetails />);
    const ingredientsName = screen.getByTestId('0-ingredient-name-and-measure');
    expect(ingredientsName).toBeInTheDocument();
  });
  it('O texto de instruções deve possuir o atributo data-testid="instructions"', () => {
    renderWithRouter(<DrinksDetails />);
    const instructions = screen.getByTestId('instructions');
    expect(instructions).toBeInTheDocument();
  });
  it('O vídeo deve possuir o atributo data-testid="video"', () => {
    renderWithRouter(<DrinksDetails />);
    const video = screen.getByTestId('video');
    expect(video).toBeInTheDocument();
  });
  it('O card de receitas deve possuir o testid "index-recomendation-card"', () => {
    renderWithRouter(<DrinksDetails />);
    const recomendations = screen.getByTestId('0-recomendation-card');
    expect(recomendations).toBeInTheDocument();
  });
  it('O botão de iniciar receita deve possuir o data-testid="start-recipe-btn"', () => {
    renderWithRouter(<DrinksDetails />);
    const startRecipeButton = screen.getByTestId('start-recipe-btn');
    expect(startRecipeButton).toBeInTheDocument();
  });
});
