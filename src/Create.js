import {u, i} from "./r";
import styled from "styled-components";
import React, { useState } from "react";


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

function Recipe() {
    const [ing, sing] = useState({
        name: null,
        unit: null,
        amount: 1
    });

    
    const setIng  = (event) => {
        sing({
            ...ing,
            name: event.target.value
        })
    }
    const setUnit= (event) => {
        sing({
            ...ing,
            unit: event.target.value
        })
    }
    const setAmount= (event) => {
        sing({
            ...ing,
            amount: event.target.value
        })
    }
    
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    cover: null,
    url: "",
    ingredients: [],
    steps: []
});

   const setTitle = (event) => {
       setRecipe({
           ...recipe,
           title: event.target.value
       }
       )
   }

   const addIng = () => {
    setRecipe({
        ...recipe,
        ingredients: [...recipe.ingredients, ing]
    }
    ) }

    const [step, setStep] = useState("");
    const addStep = () => {
        setRecipe({
            ...recipe,
            steps: [...recipe.steps, step]
        }) 
        }
  return (
    <RecipeContainer>
        <label>Title: <input onChange={setTitle}/></label><br/>
        <label>Url: <input /></label><br />
        <label>Description: <input /></label>
        <h1>
          {recipe.title}
          </h1> 

      <img src={recipe.cover} /> 
      <IngredientsContainer>
        <h2>Ingredients</h2>
         <ul>
          {recipe.ingredients.map((i, k) => {
            return (
              <li key={k}>
                {i.name}: {i.amount} {i.unit}
              </li>
            );
          })}
        </ul> 
        <select onChange={setIng}>
            {Object.entries(i).map((i, k) => {
                return (
                    <option key={k} value={i[1]}>
                        {i[1]}
                    </option>
                )
            })}
        </select>
        <select onChange={setUnit}>
        {Object.entries(u).map((i, k) => {
                return (
                    <option key={k} value={i[1]}>
                        {i[1]}
                    </option>
                )
            })}
        </select>
        <input onChange={setAmount} type="number" />
        <button onClick={addIng}>Add</button>
      </IngredientsContainer>
      <StepsContainer>
        <h2>Steps</h2>
         <ol>
          {recipe.steps.map((step, k) => {
            return <li key={k}>{step}</li>;
          })}
        </ol> 
        <input onChange={(event) => setStep(event.target.value)} />
        <button onClick={addStep}>Add</button>
      </StepsContainer>
      <code>
        {JSON.stringify(recipe)}
    </code>
    </RecipeContainer>
    
  );
}
export default Recipe;
