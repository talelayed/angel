import { Nav,Navbar,Container } from 'react-bootstrap';

export const Footer = () =>{
    return(
    <>
    <Navbar bg="light" variant="light">
    <Container>
    <Nav className="me-auto">
      <Nav.Link to="/">Contact</Nav.Link>
      <Nav.Link to="/">About us</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </>
    )
}