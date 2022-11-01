import { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import aboutusimage from  '../images/aboutus.jpg';
import {Row,  Col } from "react-bootstrap";
import {useNavigate } from 'react-router-dom';
import '../css/homepage.css';

const HomeAboutUsCard = () => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped((prev) => !prev);
    }

    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardFront"
        >
            <Card className="optionCard">
                <img src={aboutusimage} class="rounded mx-auto d-block" alt="..."></img>
                <Card.Body>
                <Card.Title>ABOUT US</Card.Title>
                <Card.Text>
                    click below to know more about us
                </Card.Text>
                <Button variant="primary">About Us</Button>
                </Card.Body>
            </Card>
        </div>
        <div
            onClick={() => setIsFlipped((prev) => !prev)}
            className="CardBack optionCardContainer"
        >
                <Col className="optionCardCol">
                    <Row className="optionCardRowAboutUsInfo">
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Row>
                    <Row className="optionCardRowAboutUsButton">
                        <div>
                            <Button className="optionCardButton">Go Back</Button>
                        </div>             
                    </Row>
                </Col>
        </div>
        </ReactCardFlip>
      );
}
export default HomeAboutUsCard;