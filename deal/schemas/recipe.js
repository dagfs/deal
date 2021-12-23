const recipe = {
  name: "recipe",
  type: "document",
  title: "Recipi",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      title: "Ingredients",
      name: "ingredients",
      type: "array",
      of: [{ type: "reference", to: [{ type: "ingredient" }] }],
    },
  ],
};

export default recipe;
