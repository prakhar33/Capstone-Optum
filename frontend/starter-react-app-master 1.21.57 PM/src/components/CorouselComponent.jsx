import 'bootstrap/dist/css/bootstrap.min.css';
import corousel_img1 from '../images/corousel_img1.png';
import corousel_img2 from '../images/medical-scribe-patient-satisfaction.jpeg';
import corousel_img3 from '../images/corousel_img3.png';
import Carousel from 'react-bootstrap/Carousel';

import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

function CorouselComponent() {
  const mystyle={
    height:"800px"
  }
  return (
    <Carousel>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={corousel_img1}
          alt="First slide" style={mystyle}
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={corousel_img2}
          alt="Second slide" style={mystyle}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={corousel_img3}
          alt="Third slide" style={mystyle}
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
export default CorouselComponent;
