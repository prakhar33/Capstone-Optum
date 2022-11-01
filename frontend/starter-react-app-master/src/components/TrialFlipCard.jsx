import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import signupimage from '../images/signup.jpg';
import {Row,  Col } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';

const TrialFlipCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const navigate=useNavigate();

    const handleClick = (e) => {
        console.log("here");
        setIsFlipped(isFlipped?false:true);
    }

    const handleBackClick = () => {

    }


    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardFront"
        >
            <Card>
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
            style={{ width: '30%' }}
            // onClick={() => setIsFlipped((prev) => !prev)}
            className="CardBack"
        >
            <div>
                <Col>
                    <Row>
                        <div onClick={()=> {
                            navigate('/patient/signup');
                        }}>
                            As Patient
                        </div>
                    </Row>
                    <Row>
                        <div onClick={()=> {
                            navigate('/doctor/signup');
                        }}>
                            As Doctor
                        </div>
                    </Row>
                    <Row>
                        <div onClick={()=> {
                            navigate('/hospital/signup');
                        }}>
                            As Hospital
                        </div>
                    </Row>
                    <Row>
                        <div onClick={() => setIsFlipped((prev) => !prev)}>
                            <button >Go Back</button>
                        </div>
                        
                    </Row>
                </Col>
            </div>
        </div>
        </ReactCardFlip>
      );
}
export default TrialFlipCard;