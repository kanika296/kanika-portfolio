// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Experiences.css";

export const Experiences = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <h2 className="experiences">Experiences</h2>                        
                        <p className="description">I am a highly skilled software engineer with almost 2 years of experience in designing and delivering software solutions accross multiple technical areas within various business functions </p>
                        <VerticalTimeline className="box-experience">
                          <VerticalTimelineElement
                          
                            className="vertical-timeline-element--work"
                            date="Jul 2023 - Present"
                            iconStyle={{ background: 'blue', color: '#fff' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">Deutsche Bank</h3>
                            <h4 className="vertical-timeline-element-subtitle">Graduate Analyst</h4>
                            <p className="para-m">
                              Working as a Full Stack developer.
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Jul 2023 - Present"
                            iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 style={{color: 'rgb(33, 150, 243)'}}  className="vertical-timeline-element-title">Bhabha Atomic Research Center</h3>
                            <h4 className="vertical-timeline-element-subtitle">Project Intern</h4>
                            <p className="para-m">
                              Machine Learning
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2011 - present"
                            iconStyle={{ background: 'blue', color: '#800080' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">Deutsche Bank</h3>
                            <h4 className="vertical-timeline-element-subtitle">Technology Analyst Intern</h4>
                            <p className="para-m">
                              Description of the event or milestone
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="2019 - 2023"
                            iconStyle={{ background: 'blue', color: 'pink' }}
                            // icon={<WorkIcon />}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">B Tech Graduate</h3>
                            <h4 className="vertical-timeline-element-subtitle">SNDT Women's University</h4>
                            <h5>GPA: 9.28</h5>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}