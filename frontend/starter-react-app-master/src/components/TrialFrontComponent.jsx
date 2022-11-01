import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import signupimage from '../images/signup.jpg';
const TrialFrontComponent = () => {
    return (
        <div>
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
        </div>
    )
}
export default TrialFrontComponent;