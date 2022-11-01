import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import loginimage from  '../images/login.jpg';
import {Row,  Col } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';
import '../css/homepage.css';

const HomeLoginCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const navigate=useNavigate();


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" >
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardFront"
        >
            <Card className="optionCard">
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
        </div>
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardBack optionCardContainer"
        >
                <Col className="optionCardCol">
                    <Row className="optionCardRowLogin">
                        <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/patient/login');
                                }}>
                                    As Patient
                            </Button>
                            
                        </div>
                    </Row>
                    <Row className="optionCardRowLogin">
                    <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/doctor/login');
                                }}>
                                    As Doctor
                            </Button>
                            
                        </div>
                    </Row>
                    <Row className="optionCardRowLogin">
                    <div>
                            <Button className="optionCardButton"  onClick={()=> {
                                    navigate('/hospital/login');
                                }}>
                                    As Hospital
                            </Button>
                            
                        </div>
                    </Row>
                    <Row className="optionCardRowLogin">
                    <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/admin/login');
                                }}>
                                    As Admin
                            </Button>
                            
                        </div>
                    </Row>
                    <Row className="optionCardRowLogin">
                        <div>
                            <Button className="optionCardButton">
                                    Go Back
                            </Button>
                        </div>
                        
                    </Row>
                </Col>
            </div>
        </ReactCardFlip>
      );
}
export default HomeLoginCard;