import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Achievements.css';

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
                    <img className="card-img-top" src="https://media.licdn.com/dms/image/v2/D4E2DAQGCoKGusXgUHw/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1723751918594?e=1724533200&v=beta&t=T8pceG9ya7gfKApZDLFtVZ4ASB8SOhoIoqwXMf0Kev8" alt="Achievement Image 1" style={imageStyle} />
                    <div className="card-body">
                      <h5 className="card-title">Deutsche Bank Global Hackathon Winner</h5>
                      <p className="card-text">Issued by Deutsche Bank, Dementia UK · Jul 2024</p>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="card" style={cardStyle}>
                    <img className="card-img-top" src="https://media.licdn.com/dms/image/C4D2DAQEiao_xU3PO_w/profile-treasury-image-shrink_800_800/0/1648901671536?e=1724533200&v=beta&t=JReBKjFrxZXTgdGfekhycX23c-wbkgN8zsb2GE7kqtA" alt="Achievement Image 2" style={imageStyle} />
                    <div className="card-body">
                      <h5 className="card-title">Toycathon 2021 Winner</h5>
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
