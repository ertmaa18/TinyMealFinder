import { display } from '@mui/system'
import React from 'react'
import ReactDOM from 'react-dom';
import Modal from 'react-modal';


export default function MealItem({meal}) {


  const [modalIsOpen, setIsOpen] = React.useState(false);
  function closeModal() {
    setIsOpen(false);
  }
  function openModal(){
    setIsOpen(true);
  }

  return (
    <div class="card" style={{width: '20rem', float: 'left', margin: '10px', textAlign: 'center'}}>
      <img class="card-img-top" src={meal.strMealThumb} alt="image" style={{width: '100%'}}/>
      <div class="card-body">
        <h4 class="card-title">{meal.strMeal}</h4>
        <p class="card-text">Category: {meal.strCategory}</p>
        <button onClick={openModal} class="btn btn-primary">See Details</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Instructions Modal"
      >
        <h2>Instructions</h2>
        <p>{meal.strInstructions}</p>
        <button class='btn btn-primary' onClick={closeModal}>Close</button>
      </Modal>
    </div>
  )
}
