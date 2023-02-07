import { MealDto } from "../../src/backend/interfaces/Interfaces";
import {searchMealsByName} from "./../../src/backend/ApiCalls"

// expect({a: await searchMealsByName("Spaghetti")}).to.nested.include({'a[0].id': '52771'});

describe('Mealsearch by name', () => {
  
  it('"Spaghetti" should return 2 values', async () => {
    expect(await searchMealsByName("Spaghetti")).to.have.lengthOf(2);
  });

  it("'Spaghetti' should return meals with Spaghetti in the name", async () => {
    let meals : MealDto[] = await searchMealsByName("Spaghetti");
    meals.forEach(meal => {
      expect(meal.strMeal).to.match(/Spaghetti/);
    })
  });

  it('"Cat" should NEVER return a meal', async () => {
    console.log(await searchMealsByName("Cat"))
    expect(await searchMealsByName("Cat")).to.have.lengthOf(0);
  });
});