import { IRecipe } from "../api/types";
import Recipe from "../components/custom/Recipe";

type RecepiesProps = {
    recipes: IRecipe[]
};

export default ({recipes} : RecepiesProps) =>{
    
    return <div>
        {recipes.map(r => <Recipe {...r} />) }    
    </div>
}