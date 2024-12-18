import React from 'react'
import { getLiked } from '../../../actions/getRecipes'
import { RecipeList } from '../../../components/RecipeList'

async function LikedRecipes() {
    const recipes = await getLiked()
    if(!recipes) return <div>No Liked Recipes Yet</div>
    return (
        <div>
            <h2>Liked Recipes</h2>
            <RecipeList recipes={recipes} />
        </div>
    )
}

export default LikedRecipes