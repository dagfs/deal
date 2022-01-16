const recipe = {
  name: "recipe",
  type: "document",
  title: "Recipe",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "basedOn",
      type: "string",
      title: "Based on",
    },
    { 
      name: "servings",
      type: "number",
      title: "Servings",
    },
    {
      name: "description",
      type: "text",
      title: "Description"
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [
        {
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
        }
      ],
    },
    {
      title: "Steps",
      name: "steps",
      type: "array",
      of: [{type: "string"}]
    }
  ],
};

export default recipe;
