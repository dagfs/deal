import { IRecipe } from "../../api/types"


type RecipeProps = IRecipe & {
    
}
export default ({title} : RecipeProps) => {


    return (<div>
        {title}
    </div>)
}