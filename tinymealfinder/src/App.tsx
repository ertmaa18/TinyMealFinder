import React, {useState, useRef, useEffect} from "react"
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'jquery/dist/jquery.js';
import AppNavbar from './AppNavbar';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MealDto from './MealDto';
import { render } from '@testing-library/react';
import MealList from './MealList';
import { Meal } from "./backend/interfaces/Interfaces";

async function fetchMealsByName(name:string){
  let url:string = "https://www.themealdb.com/api/json/v1/1/search.php?s=" + encodeURI(name);
  let meals:Array<MealDto> = new Array<MealDto>();
  await fetch(url)
    .then(resp => resp.text())
    .then(data => {
      let mealsObject = JSON.parse(data)["meals"];
      meals = mealsObject as Array<MealDto>;
    })
  return meals;
}

function App() {
  //meals: die Elemente des State
  //setMeals: die Funktion um den State zu ändern
  const [meals, setMeals] = useState<Array<MealDto>>([])

  // weil sich das empty-array nie ändert, wird 
  // die Funktion genau einmal aufgerufen.
  // zum laden
  useEffect(() => {
    const fetchMeals = async () => {
      const data = await fetchMealsByName('');
      setMeals(data)
    }

    setMeals(new Array<MealDto>());
    fetchMeals();
  }, [])


  var search = async function(){
    let searchInput = (document.getElementById("searchInput") as HTMLInputElement).value
    let newMeals:Array<MealDto> = await fetchMealsByName(searchInput);
    setMeals(newMeals);
  }

  return <Container>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">TINY MealFinder</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            {
               /*           
              <Nav.Link href="#action1">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
               */
            }
            </Nav>
            
            {
              /*
              fetchMealsByName(document.getElementById('searchInput').value)
              */
            }
            <Form className="d-flex">
              <Form.Control
                id='searchInput'
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success" onClick={search}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid>
        <MealList meals={meals}/>
      </Container>
    </Container>
}

export default App;

/* 
      <TextField id="outlined-basic" label="Outlined" variant="outlined" size="small" />
      <Button variant="contained" size="medium">Search</Button> */
