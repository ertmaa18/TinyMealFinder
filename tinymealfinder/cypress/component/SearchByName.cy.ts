import {searchMealsByName} from "./../../src/backend/ApiCalls"
import { Meal } from "../../src/backend/interfaces/Interfaces";

describe('Mealsearch by name', () => {
  
  it('should be id 52771', async () => {
    expect({a: await testMeal("Arrabiata")}).to.nested.include({'a[0].id': '52771'});
  });
});

async function testMeal(text: string): Promise<Meal[]> {
  return  [{
    id: '52771', 
    category: "",
    ingredients : [],
    instructions: "",
    name: ""
  }];
}