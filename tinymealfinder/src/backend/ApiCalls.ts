import { Meal, MealDto } from "./interfaces/Interfaces";

export async function searchMealsByName(name: string): Promise<MealDto[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${encodeURI(name)}`)

	const data = await response.json()
	if (response.ok && data?.meals) {
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
	if (response.ok && data?.meals) {
		//const meals: Meal[] = data?.meals
		const meals = data?.meals
		return await meals;
	} else {
		return []
	}
}

export async function getAreasList(): Promise<string[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)

	const data = await response.json()
	if (response.ok && data?.meals) {
		//const meals: Meal[] = data?.meals
		const meals: string[] = data?.meals.map((m: any) => m.strArea).filter((a: any) => a !== "Unknown")
		return await meals;
	} else {
		return []
	}
}

export async function searchMealsByArea(name: string): Promise<MealDto[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${encodeURI(name)}`)

	const data = await response.json()
	if (response.ok && data?.meals) {
		const meals = data?.meals
		return await meals;
	} else {
		return []
	}
}

export async function getRandomMeal(): Promise<MealDto[]> {
	const response = await fetch(`https://www.themealdb.com/api/json/v1/1/random.php`)

	const data = await response.json()
	if (response.ok && data?.meals) {
		const meals = data?.meals
		return await meals;
	} else {
		return []
	}
}
