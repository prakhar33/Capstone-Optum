import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeHeader = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom:"3px solid white"}}>
        <Container>
          <Navbar.Brand href="/">App-name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container style={{float:"right"}}>
              <Nav className="me-auto float-end">
                <Nav.Link href="/" className="my-header my-header-links">About us</Nav.Link>

                <NavDropdown title="Sign Up" id="collasible-nav-dropdown" className="my-header">
                  <NavDropdown.Item href="/patient/signup">As Patient</NavDropdown.Item>
                  <NavDropdown.Item href="/doctor/signup">As Doctor</NavDropdown.Item>
                  <NavDropdown.Item href="/hospital/signup">As Hospital</NavDropdown.Item>
                </NavDropdown>
                
                <NavDropdown title="Login" id="collasible-nav-dropdown" className="my-header">
                  <NavDropdown.Item href="/patient/login">As Patient</NavDropdown.Item>
                  <NavDropdown.Item href="/doctor/login">As Doctor</NavDropdown.Item>
                  <NavDropdown.Item href="/hospital/login">As Hospital</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/login">As Admin</NavDropdown.Item>
                </NavDropdown>

              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default HomeHeader;