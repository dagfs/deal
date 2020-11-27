import recipes from "./r";
import styled from "styled-components";

const RecipeContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  img {
    width: 100%;
  }
`;

const IngredientsContainer = styled.div`
  min-width: 150px;
`;

const StepsContainer = styled.div`
  min-width: 250px;
`;

const Container = styled.div`
  display: flex;
`;

function Recipe({ match }) {
  var recipe = recipes[match.params.id];
  return (
    <RecipeContainer>
      <h1>{recipe.title}</h1>
      <img src={recipe.cover} />
      <IngredientsContainer>
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients.map((i, k) => {
            return (
              <li key={k}>
                {i.name}: {i.amount}
              </li>
            );
          })}
        </ul>
      </IngredientsContainer>
      <StepsContainer>
        <h2>Steps</h2>
        <ol>
          {recipe.steps.map((step, k) => {
            return <li key={k}>{step}</li>;
          })}
        </ol>
      </StepsContainer>
    </RecipeContainer>
  );
}
export default Recipe;
