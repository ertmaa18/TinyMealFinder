import { Meal, MealDto } from "./interfaces/Interfaces";

export async function searchMealsByName(name: string): Promise<MealDto[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURI(name)}`)

	const data = await response.json()
	if (response.ok) {
		//const meals: Meal[] = data?.meals
		const meals = data?.meals
		return await meals;
	} else {
		return []
	}
}

export async function searchMealsByIngredient(name: string): Promise<MealDto[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${encodeURI(name)}`)

	const data = await response.json()
	if (response.ok) {
		//const meals: Meal[] = data?.meals
		const meals = data?.meals
		return await meals;
	} else {
		return []
	}
}