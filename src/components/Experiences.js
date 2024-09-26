// import meter1 from "../assets/img/meter1.svg";
// import meter2 from "../assets/img/meter2.svg";
// import meter3 from "../assets/img/meter3.svg";
// import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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
    <section responsive={responsive} className="experience" id="experiences">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="experience-bx wow zoomIn">
                        <h2 className="experiences">Experiences</h2>                        
                        <p className="description">I am a highly skilled software engineer with almost 2 years of experience in designing and delivering software solutions accross multiple technical areas within various business functions </p>
                        <VerticalTimeline className="box-experience">
                          <VerticalTimelineElement style={{textAlign: 'left'}}
                          
                            className="vertical-timeline-element--work"
                            date="Jul 2023 - Present"
                            iconStyle={{ backgroundColor: '#89CFF0' }}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">Deutsche Bank</h3>
                            <h4 className="vertical-timeline-element-subtitle">Graduate Analyst</h4>
                            <p className="para-m">
                              Pune
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Jan 2023 - Mar 2023"
                            iconStyle={{ backgroundColor: '#318CE7' }}
                          >
                            <h3 style={{color: 'rgb(33, 150, 243)'}}  className="vertical-timeline-element-title">Bhabha Atomic Research Center</h3>
                            <h4 className="vertical-timeline-element-subtitle">Project Intern</h4>
                            <p className="para-m">
                              Mumbai
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement style={{textAlign: 'left'}}
                            className="vertical-timeline-element--work"
                            date="May 2022 - July 2022"
                            iconStyle={{ backgroundColor: '#0039a6' }}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">Deutsche Bank</h3>
                            <h4 className="vertical-timeline-element-subtitle">Technology Analyst Intern</h4>
                            <p className="para-m">
                              Pune
                            </p>
                          </VerticalTimelineElement>
                          <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            date="Aug 2019 - May 2023"
                            iconStyle={{ backgroundColor: '#002D62' }}
                          >
                            <h3 style={{color: 'blue'}} className="vertical-timeline-element-title">B Tech Graduate</h3>
                            <h4 className="vertical-timeline-element-subtitle">SNDT Women's University, Mumbai</h4>
                            <p style={{color: 'black', textAlign: 'left'}}>GPA: 9.3</p>
                          </VerticalTimelineElement>
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
        <img alt='bgImage'className="background-image-left" src={colorSharp} />
    </section>
  )
}