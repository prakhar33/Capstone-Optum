import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">App-name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container>
              <Nav className="me-auto float-end">
                <Nav.Link href="#features">About us</Nav.Link>
                <NavDropdown title="Login" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/patient/login">As Patient</NavDropdown.Item>
                  <NavDropdown.Item href="/doctor/login">As Doctor</NavDropdown.Item>
                  <NavDropdown.Item href="/hospital/login">As Hospital</NavDropdown.Item>
                  <NavDropdown.Item href="/admin/login">As Admin</NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Register" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="/patient/registration">As Patient</NavDropdown.Item>
                  <NavDropdown.Item href="/doctor/registration">As Doctor</NavDropdown.Item>
                  <NavDropdown.Item href="/hospital/registration">As Hospital</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}
export default Header;