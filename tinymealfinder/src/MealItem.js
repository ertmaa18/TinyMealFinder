import { display } from '@mui/system'
import React from 'react'

export default function MealItem({meal}) {
  function handleDetailsButtonClick(){
      alert("DETAILS!")
  }

  return (
    <div class="card" style={{width: '20rem', float: 'left', margin: '10px', textAlign: 'center'}}>
      <img class="card-img-top" src={meal.strMealThumb} alt="image" style={{width: '100%'}}/>
      <div class="card-body">
        <h4 class="card-title">{meal.strMeal}</h4>
        <p class="card-text">Category: {meal.strCategory}</p>
        <button onClick={handleDetailsButtonClick} class="btn btn-primary">See Details</button>
      </div>
    </div>
  )
}
