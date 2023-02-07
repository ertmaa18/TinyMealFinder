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
import { render } from '@testing-library/react';
import MealList from './MealList';
import { MealDto } from "./backend/interfaces/Interfaces";
import { searchMealsByName, searchMealsByIngredient, getAreasList } from "./backend/ApiCalls";

function App() {
  //meals: die Elemente des State
  //setMeals: die Funktion um den State zu ändern
  const [meals, setMeals] = useState<Array<MealDto>>([])

  // weil sich das empty-array nie ändert, wird 
  // die Funktion genau einmal aufgerufen.
  // zum laden
  useEffect(() => {
    const fetchMeals = async () => {
      const data = await searchMealsByName('');
      setMeals(data);
    }

    setMeals(new Array<MealDto>());
    fetchMeals();
  }, [])


  var onSubmitCallback = function(e:any){
    e.preventDefault();
    search();
    return false;
  }

  var search = async function(){
    let searchInput = (document.getElementById("searchInput") as HTMLInputElement).value
    let newMeals:Array<MealDto> = await searchMealsByName(searchInput);
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
            <Form className="d-flex" onSubmit={onSubmitCallback}>
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
