
export type IIngredient = {
    title: string,
    mesure: string,
    amount: number
}

export type IRecipe = {
    title: string,
    basedOn: string,
    description: string,
    steps: string[],
    ingredients: IIngredient[]
}
