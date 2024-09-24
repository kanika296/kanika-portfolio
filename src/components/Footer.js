import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import navIcon1 from "../assets/img/nav-icon1.svg";
import mailIcon from "../assets/img/mail-icon.svg";
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
          <i className="pi pi-graduation-cap" style={{ color:'white', fontSize: '2.5rem' }}></i>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href='https://www.linkedin.com/in/kanika-y'><img src={navIcon1} alt="Icon" /></a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=kanikaofficial.517191@gmail.com&su=Connect%20with%20Kanika">
                 <img src={mailIcon} alt="Mail Icon" />
              </a>
            </div>
            <p>Copyright 2024. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
