import React from 'react'
import MealItem from './MealItem'

export default function MealList({meals}) {
  return (
    meals.map(meal => {
        return <MealItem key={meal.strMeal} meal={meal}></MealItem>
    })
  )
}
