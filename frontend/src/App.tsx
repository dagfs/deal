import React, { useEffect, useState } from "react";
import { fetchRecepies } from "./api/client";
import { IRecipe } from "./api/types";
import Recepies from "./pages/Recepies";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  const [recipes, setRecepes] = useState<IRecipe[]>([]);

  useEffect(() => {
    fetchRecepies().then((recepies) => {
      console.log(recepies);
      setRecepes(recepies);
    });
  }, []);
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="" element={<Recepies recipes={recipes} />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
