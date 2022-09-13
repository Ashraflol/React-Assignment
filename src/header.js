import logo from './logo.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
    <Container>
        <Row className='justify-content-between text-end'>
        <Col className='text-start ps-0'>
            <img src={logo} className='app-logo' alt="React Logo"/>
            <span className='logo-text'>React</span>
        </Col>
        <Col>
            <p className='fw-bolder mb-0 pt-2 text-black-50'>John Wick</p>
            <p className='pb-2 mb-0 fw-lighter designation'>Developer</p>
        </Col>
        </Row>
    </Container>
  )}

export default Header;