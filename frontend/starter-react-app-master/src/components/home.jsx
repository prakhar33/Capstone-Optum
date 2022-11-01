import HomeHeader from "./HomeHeader"
import CorouselComponent from "./CorouselComponent";
import HomeFooter from "./HomeFooter";
import {Row,  Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../css/homepage.css'
import HomeSignUpCard from "./HomeSignUpCard";
import HomeLoginCard from "./HomeLoginCard";
import HomeAboutUsCard from "./HomeAboutUsCard";
const Home = () => { 
    return(
        <div className="fill-window" style={{overflowY:"auto"}}>
            <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{borderBottom:"3px solid white"}}>
                <Container>
                    <Navbar.Brand href="/">App-name</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Container style={{float:"right"}}>
                        {/* <Nav className="me-auto float-end">
                            <Nav.Link href="/" className="my-header my-header-links">About us</Nav.Link>
                            </Nav> */}
                        </Container>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <div>
                <Row className="optionsRow">
                    <div className="row">
                        <div className="col-md-4" style={{marginBottom:"10px"}}>
                            <Col className="optionsColumn">
                                <HomeSignUpCard></HomeSignUpCard>
                            </Col>
                        </div>
                        <div className="col-md-4" style={{marginBottom:"10px"}}>
                        <Col className="optionsColumn">
                            <HomeLoginCard></HomeLoginCard>
                        </Col>
                        </div>
                        <div className="col-md-4" style={{marginBottom:"10px"}}>
                        <Col className="optionsColumn">
                            <HomeAboutUsCard></HomeAboutUsCard>
                        </Col>
                        </div>
                    </div>
                </Row>
            </div>
            <div className="emptyContainer">
            </div>
            

            <div>
                <HomeFooter/>
            </div>

            </div>
        
        </div>
    );
}

export default Home;
