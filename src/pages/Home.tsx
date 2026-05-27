import { Link, useLoaderData } from "react-router";
import type { Recipe } from "../types/Recipe";

function Home() {
    const recipes = useLoaderData<Recipe[]>();
    console.log(recipes);
    
  return (
    <div className="bg-gray-100 min-h-screen font-mono">
      {
        !recipes.length ? (
            <p className="text-center text-gray-500 mt-10">Loading recipes...</p>
        ) : (
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">Featured Recipes</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {recipes.map((recipe: Recipe) => (
                        <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h2 className="text-lg mb-3 font-semibold text-gray-800">{recipe.name.length > 20 ? recipe.name.substring(0, 24) + "..." : recipe.name}</h2>
                                <Link to={'/recipes/' + recipe.id} className="py-2 text-sm rounded-md cursor-pointer px-4 bg-[#FF6900] text-white">Read More</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
      }
    </div>
  )
}

export default Home

export const recipeLoader = async () => {
    try {
        const response = await fetch('https://dummyjson.com/recipes?limit=12');
        const data = await response.json();
        return data.recipes;
    } catch (error) {
        console.log("Error at fetching recipes: " + error);
        return [];
    }
}
