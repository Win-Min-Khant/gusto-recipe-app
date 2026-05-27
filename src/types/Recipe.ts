export interface Recipe {
    id: number;
    name: string;
    ingredients: string[];
    instructions: string[];
    prepTimeMinutes: number;
    cookTimeMinutes: number;
    servings: number;
    difficulty: Difficulty;
    cuisine: string;
    image: string;
    rating: number;
}

type Difficulty = "Easy" | "Medium" | "Hard";