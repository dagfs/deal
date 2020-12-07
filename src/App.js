import "./App.css";
import styled from "styled-components";
import t from "./dt";
import recipes from "./r";
import Recipe from "./Recipe";
import Recipes from "./Recipes";
import Create from "./Create";
import React, { useState } from "react";

import { HashRouter, Switch, Route } from "react-router-dom";

const Button = styled.button`
  background: ${t.colors.green};
`;

function App() {
  const [selectedRecipes, setselectedRecipes] = useState([]);
  const toggleRecipe = (id) => {
    const index = selectedRecipes.indexOf(id);
    if (index > -1) {
      selectedRecipes.splice(index, 1);
    } else {
      selectedRecipes.push(id);
    }
    setselectedRecipes(selectedRecipes.map((i) => i));
  };
  return (
    <HashRouter>
      <div>
        <Switch>
          <Route path="/create" component={Create}></Route>
          <Route path="/recipe/:id" component={Recipe}></Route>
          <Route path="/">
            <Recipes
              recipes={recipes}
              toggleRecipe={toggleRecipe}
              selectedRecipes={selectedRecipes}
            />
          </Route>
        </Switch>
      </div>
    </HashRouter>
  );
}

export default App;
