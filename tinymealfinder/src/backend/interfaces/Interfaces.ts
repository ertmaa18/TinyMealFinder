export interface Meal {
	name: string,
	id: string,
	category: string,
	instructions: string,
	tutorial: string,
	ingredients?: Ingredient[]
}

export interface Ingredient {
  name: string;
  amount?: string;
}

export interface MealDto {
    idMeal: number;
    strCategory: string;
    strMeal: string;
    strInstructions: string;
    strMealThumb: string;
}
