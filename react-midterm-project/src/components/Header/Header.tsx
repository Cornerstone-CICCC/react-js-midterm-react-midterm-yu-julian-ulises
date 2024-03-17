import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <>
      <Navbar expand="lg" className="header bg-light border-bottom text-center">
        <Container>
          <Navbar.Brand href="/">SPORT APP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">HOME</Nav.Link>
              <Nav.Link href="/scoreboard">SCOREBOARD</Nav.Link>
              <Nav.Link href="/standings">STANDINGS</Nav.Link>
              <Nav.Link href="/ranking">RANKING</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header