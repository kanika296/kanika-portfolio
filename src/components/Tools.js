
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Tools = () => {
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
    <section className="tools" id="tools" >
        <div className="container" >
            <div className="row" >
                <div className="col-12" style={{    paddingBottom: '75px', flex: '0 0 auto', width: '100%', paddingTop: '0px', zIndex: '999'}}>
                    <div className="skill-bx wow zoomIn" style={{paddingBottom: "50px", backgroundColor: '3d1243'}}>
                        <h2>Tools</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" />
                              <h5>Java</h5>
                            </div>
                            <div className='item'>
                              <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#4e8ef7"><circle cx="64" cy="64" r="24.08"/><path d="M113.14 23.14a8.27 8.27 0 00-13.7-6.25 59 59 0 1011.67 11.67 8.24 8.24 0 002.03-5.42zM64 121A57 57 0 1198.1 18.36a8.27 8.27 0 0011.53 11.53A57 57 0 0164 121z"/></g></svg>
                              <h5>Ionic</h5>
                            </div>
                            <div className = 'item'> 
                            <svg width="150" height="150" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#CF0A2C" d="M83.1 80.5c-4.7-.1-8.8 3.4-9.3 8.1 0 .2.1.3.3.3h18c.2 0 .3-.1.3-.3-.4-4.8-4.5-8.4-9.3-8.1z"/><path fill="#CF0A2C" d="M121.7 19.9l-38.4 43c-.4.5-1.2.5-1.7.1l-.1-.1-19.4-20.1c-.4-.4-.4-1-.1-1.5l6.5-8.3c.4-.5 1.1-.7 1.6-.3.1.1.2.1.2.2l11 12.1c.4.5 1.2.5 1.7.1l.1-.1 30.7-41.7c.3-.4.2-.9-.2-1.2-.1-.1-.3-.1-.5-.2H5.7c-.5.1-.9.5-.9 1v122.2c0 .5.4.9.9.9h116.6c.5 0 .9-.4.9-.9V20.5c0-.5-.4-.8-.8-.8-.3-.1-.5 0-.7.2zm-83.8 92.5c-7.7.3-15.2-2.3-20.9-7.4-.4-.4-.5-1-.1-1.5l4.5-6.4c.4-.5 1.1-.6 1.6-.3l.1.1c4.2 3.9 9.6 6 15.3 6 6 0 8.9-2.8 8.9-5.7 0-9.1-29.5-2.8-29.5-22.1 0-8.5 7.4-15.6 19.4-15.6 6.9-.2 13.7 2.1 19.1 6.5.4.4.5 1.1.1 1.5l-4.7 6.2c-.4.5-1.1.6-1.6.2-4-3.2-8.9-4.9-14-4.8-4.7 0-7.3 2.1-7.3 5.1 0 8.1 29.4 2.7 29.4 21.8.1 9.3-6.6 16.4-20.3 16.4zm64.3-17.8c0 .6-.5 1-1 1H74.3c-.2 0-.3.1-.3.3.9 5.2 5.6 8.8 10.9 8.5 3.4-.1 6.6-1.1 9.3-3.1.4-.3 1.1-.3 1.4.2l.1.1 3.3 4.8c.3.4.2 1-.2 1.4-4.3 3.2-9.6 4.8-14.9 4.6-11.6 0-20.3-7.8-20.3-20-.3-10.7 8.1-19.6 18.8-19.9h.9c11.3 0 19.1 8.5 19.1 20.9l-.2 1.2z"/></svg>
                              <h5>Selenium</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                              <h5>My SQL</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" />
                              <h5>C++</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" />
                              <h5>C</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
                              <h5>Python</h5>
                            </div>
                            <div className="item"> 
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                              <h5>HTML</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                              <h5>CSS</h5>
                            </div>
                            <div className="item">
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
                              <h5>Java Script</h5>
                            </div>
                            <div className="item"> 
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" />
                              <h5>BootStrap</h5>
                            </div>
                            <div className="item">
                              <img width="480" height="480" src="https://img.icons8.com/color/480/spring-logo.png" alt="spring-logo"/>
                              <h5>Spring Boot</h5>
                            </div>
                            <div className="item" >
                              <img style={{background: 'white'}} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                              <h5>GitHub</h5>
                            </div>
                            <div className="item">
                            <svg width="150" height="150"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#0acf83" d="M45.5 129c11.9 0 21.5-9.6 21.5-21.5V86H45.5C33.6 86 24 95.6 24 107.5S33.6 129 45.5 129zm0 0"/><path fill="#a259ff" d="M24 64.5C24 52.6 33.6 43 45.5 43H67v43H45.5C33.6 86 24 76.4 24 64.5zm0 0"/><path fill="#f24e1e" d="M24 21.5C24 9.6 33.6 0 45.5 0H67v43H45.5C33.6 43 24 33.4 24 21.5zm0 0"/><path fill="#ff7262" d="M67 0h21.5C100.4 0 110 9.6 110 21.5S100.4 43 88.5 43H67zm0 0"/><path fill="#1abcfe" d="M110 64.5c0 11.9-9.6 21.5-21.5 21.5S67 76.4 67 64.5 76.6 43 88.5 43 110 52.6 110 64.5zm0 0"/></svg>
                              <h5>Figma</h5>
                            </div>

                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}