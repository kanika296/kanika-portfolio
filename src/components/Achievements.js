import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Achievements.css';
import img1 from '../assets/img/img1.jpeg';
import img2 from '../assets/img/img2.jpeg';

export const Achievements = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const cardStyle = {
    width: '23rem',
    borderRadius: '30px',
    margin: '0 auto',
    background: 'purple'
  };

  const imageStyle = {
    borderRadius: '25px 25px 25px 25px',
    padding: '5px',
    height: '250px',
    width: '360px',
    objectFit: 'cover',
  };

  return (
    <section className="achievement" id="achievements">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="achievement-bx wow zoomIn">
              <h2>Achievements</h2>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme achievement-slider">
                <div className="item">
                  <div className="card" style={cardStyle}>
                    <img className="card-img-top" alt="Achievement Image 1" style={imageStyle} src={img1}/>
                    <div className="card-body">
                      <h5 style={{color: 'white'}} className="card-title">Deutsche Bank Global Hackathon Winner</h5>
                      <p className="card-text">Issued by Deutsche Bank, Dementia UK · Jul 2024</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card" style={cardStyle}>
                    <img className="card-img-top"  src={img2} alt="Achievement Image 2" style={imageStyle} />
                    <div className="card-body">
                      <h5 style={{color: 'white'}} className="card-title">Toycathon 2021 Winner</h5>
                      <p className="card-text">Issued by Ministry of Education’s Innovation Cell, Govt. of India · Jun 2021</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Background Decoration" />
    </section>
  );
};
