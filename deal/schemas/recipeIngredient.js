const recipeIngredient = {
    name: "recipeIngredient",
    type: "document",
    title: "Recipe Ingredient",
    fields: [
      {
        title: "Ingredient",
        name: "ingredient",
        type: "reference",
        to: [{ type: "ingredient" }],
      },
      {
        title: "Mesure",
        name: "mesure",
        type: "reference",
        to: [{ type: "mesure" }],
      },
      {
        title: "Amount",
        name: "amount",
        type: "number",
      },
    ],
  };
  
  export default recipeIngredient;
  