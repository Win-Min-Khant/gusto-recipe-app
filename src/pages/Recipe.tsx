import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { Recipe } from "../types/Recipe";

function RecipeDetail() {
    const { id } = useParams();
    const [recipe, setRecipe] = useState<Recipe | null>(null);

    useEffect(() => {
        const fetchRecipeDetails = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/recipes/${id}`);
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.log("Error fetching recipe details: " + error);
            }
        }
        fetchRecipeDetails();
    }, [id])

    if (!recipe) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={recipe.image} alt={recipe.name} className="w-full h-64 object-cover" />

                <div className="p-6">
                    <h1 className="text-3xl font-bold text-gray-800 mb-4">{recipe.name}</h1>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                        <div className="text-center">
                            <div className="text-2xl mb-1">⏰</div>
                            <div className="text-sm text-gray-600">Prep Time</div>
                            <div className="font-semibold">{recipe.prepTimeMinutes} min</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-1">🔥</div>
                            <div className="text-sm text-gray-600">Cook Time</div>
                            <div className="font-semibold">{recipe.cookTimeMinutes} min</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-1">👥</div>
                            <div className="text-sm text-gray-600">Servings</div>
                            <div className="font-semibold">{recipe.servings}</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl mb-1">⭐</div>
                            <div className="text-sm text-gray-600">Rating</div>
                            <div className="font-semibold">{recipe.rating}/5</div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                            {recipe.difficulty}
                        </span>
                        <span className="ml-4 text-gray-600">Cuisine: {recipe.cuisine}</span>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">Ingredients</h2>
                            <ul className="space-y-2">
                                {recipe.ingredients.map((ingredient, index) => (
                                    <li key={index} className="flex items-center">
                                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                        {ingredient}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-bold text-gray-800 mb-3">Instructions</h2>
                            <ol className="space-y-3">
                                {recipe.instructions.map((instruction, index) => (
                                    <li key={index} className="flex">
                                        <span className="font-semibold text-orange-500 mr-2">{index + 1}.</span>
                                        {instruction}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecipeDetail
