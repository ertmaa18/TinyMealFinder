import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class AppNavbar extends React.Component {
    private domReferenceSearchInput;
    private onSubmitCallback;
    constructor(props:any, onSubmitCallback:any) {
      super(props);
      this.onSubmitCallback = onSubmitCallback;
      this.domReferenceSearchInput = React.createRef<HTMLInputElement>();
    }
    render() {
        return <Navbar bg="light" expand="lg">
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
            <Form className="d-flex" onSubmit={this.onSubmitCallback}>
              <Form.Control
                ref={this.domReferenceSearchInput}
                id='searchInput'
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button type='submit' variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    //   return <div ref={this.domReference} />;
    }
  }

  export default AppNavbar;