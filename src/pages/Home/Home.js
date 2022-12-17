import Carousel from 'react-bootstrap/Carousel';
import './Home.css';
import image1 from '../../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import image2 from '../../assets/pablo-merchan-montes-Orz90t6o0e4-unsplash.jpg';
import image3 from '../../assets/patrick-tomasso-GXXYkSwndP4-unsplash.jpg';

const Home = () => {
  return (
    <div>
         <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 imageDimensions"
          src={image1}
          alt="First slide"
        />
        <Carousel.Caption>
        <h2 className='text'>Donde los Flaites</h2>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imageDimensions"
          src={image2}
          alt="Second slide"
        />

        <Carousel.Caption>
        <h2 className='text'>Donde los Flaites</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 imageDimensions"
          src={image3}
          alt="Third slide"
        />
        
        <Carousel.Caption>
        <h2 className='text'>Donde los Flaites</h2>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Home