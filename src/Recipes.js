import styled from "styled-components";
import t from "./dt";
import { Link } from "react-router-dom";
import React from "react";

const RecipePreviewContainer = styled.label`
  border: 1px solid black;
  width: 25%;
  min-width: 400px;
  position: relative;
  margin: 10px;
  img {
    width: 100%;
  }
  h3 {
    position: absolute;
    bottom: 0;
    background: ${t.colors.sand};
    width: 100%;
    margin: 0;
    padding: 10px;
  }
  input {
    position: absolute;
    right: 0;
  }
`;

function RecipePreview({ recipe, index, toggleRecepe }) {
  return (
    <RecipePreviewContainer>
      <input type="checkbox" onClick={toggleRecepe} />
      <img src={recipe.cover} />
      <Link to={`/recipe/${index}`}>
        <h3>{recipe.title}</h3>
      </Link>
    </RecipePreviewContainer>
  );
}

const RecipeContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

function Recipes({ recipes, toggleRecipe, selectedRecipes }) {
  return (
    <RecipeContainer>
      <h2>Number of selected recepies {selectedRecipes.length}</h2>
      {recipes.map((recipe, key) => (
        <RecipePreview
          key={key}
          index={key}
          recipe={recipe}
          toggleRecepe={() => toggleRecipe(key)}
        />
      ))}
    </RecipeContainer>
  );
}

export default Recipes;
