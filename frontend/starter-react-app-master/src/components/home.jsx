import HomeHeader from "./HomeHeader"
import CorouselComponent from "./CorouselComponent";
import Footer from "./Footer";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {Row,  Col } from "react-bootstrap";
import signupimage from '../images/signup.jpg';
import loginimage from  '../images/login.jpg';
import aboutusimage from  '../images/aboutus.jpg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/homepage.css'
const Home = () => { 
    return(
        <div className="fill-window">
        {/* <HomeHeader /> */}
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom:"3px solid white"}}>
        <Container>
          <Navbar.Brand href="/">App-name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Container style={{float:"right"}}>
              <Nav className="me-auto float-end">
                <Nav.Link href="/" className="my-header my-header-links">About us</Nav.Link>
                </Nav>
            </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>

            <div >
                 {/* <CorouselComponent/> */}
                 {/* <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
                 <Col class="card text-center" style={{marginTop: "50px"}}>
                     <Row>
                     <Card style={{ width: '1.5%' }}>
                        </Card>
                        <Card style={{ width: '30%'}}>
                            <img src={aboutusimage} class="rounded mx-auto d-block" alt="..."></img>
                            <Card.Body>
                            <Card.Title>ABOUT US</Card.Title>
                            <Card.Text>
                                click below to know more about us
                            </Card.Text>
                            <Button variant="primary">About Us</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '3%' }}>
                        </Card>
                        <Card style={{ width: '30%' }}>
                            <img src={signupimage} class="rounded mx-auto d-block" alt="..."></img>
                            <Card.Body>
                            <Card.Title>SIGN UP</Card.Title>
                            <Card.Text>
                                If this is your first time. 
                                Welcome! please do give your details
                            </Card.Text>
                            <Button variant="primary">Sign Up</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '3%' }}>
                        </Card>
                        <Card style={{ width: '30%' }}>
                             <img src={loginimage} class="rounded mx-auto d-block" alt="..."></img>
                            {/* <Card.Img variant="top" src="/src/images/login.jpg" /> */}
                            <Card.Body>
                            <Card.Title>LOGIN</Card.Title>
                            <Card.Text>
                                Thanks for coming again. 
                                Please do login and enjoy our services
                            </Card.Text>
                            <Button variant="primary">Log In</Button>
                            </Card.Body>
                        </Card>
                        <Card style={{ width: '1.5%' }}>
                        </Card>
                     </Row>
                 </Col>

            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
}

export default Home;