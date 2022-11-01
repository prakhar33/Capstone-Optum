import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import signupimage from '../images/signup.jpg';
import {Row,  Col } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';
import '../css/homepage.css';

const HomeSignUpCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const navigate=useNavigate();


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardFront"
        >
            <Card className="optionCard">
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
        </div>
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardBack optionCardContainer"
        >
                <Col className="optionCardCol">
                    <Row className="optionCardRowSignUp">
                        <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/patient/signup');
                                }}>
                                As Patient
                            </Button>
                        </div>
                    </Row>
                    <Row className="optionCardRowSignUp">
                        <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/doctor/signup');
                                }}>
                                As Doctor
                            </Button>
                        </div>
                    </Row>
                    <Row className="optionCardRowSignUp">
                        <div>
                            <Button className="optionCardButton" onClick={()=> {
                                    navigate('/hospital/signup');
                                }}>
                                As Hospital
                            </Button>
                        </div>
                    </Row>
                    <Row className="optionCardRowSignUp">
                        <div>
                            <Button className="optionCardButton">Go Back</Button>
                        </div>
                        
                    </Row>
                </Col>
        </div>
        </ReactCardFlip>
      );
}
export default HomeSignUpCard;