import { Meal } from "./interfaces/Interfaces";

export async function searchMealsByName(name: string): Promise<Meal[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)

	const {data, errors} = await response.json()
	if (response.ok) {
		const meals = data?.meals
		console.log(meals)
		return meals;
	} else {
		return []
	}
}