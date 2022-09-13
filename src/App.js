import plane from './plane.png';
import './App.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from './header.js'
import TaskManager from './taskmanagar.js'
import ChatComponent from './chatcomponent.js'

function App() {
  return (
    <div className='bg-whole-grey mb-5 rounded'>
      <div className='shadow bg-white'>
        <Header></Header>
      </div>
      <Container >
        <Row className='align-items-center py-4 row text-center text-md-start'>
          <Col xs={12} md={1}> 
            <div className='d-md-inline-block d-none shadow rounded'>
              <img src={plane} className='planecss' alt="Plane Logo"/>
            </div>
          </Col>
          <Col xs={12} md={7} className='pt-2'>
            <h4>
              Analytics DashBoard
            </h4>
            <span className='text-black-50'>Dashboard is an online report where your website data from ecommerce to web analytics is displayed.</span>
          </Col>
          <Col xs={12} md={4} className='text-md-end py-3'>
            <button className='btn btn-dark shadow'>
              <i className="fa fa-star text-white" aria-hidden="true"></i>
            </button>
            <button className='btn btn-green text-white ms-3 shadow'>
              + Create New
            </button>
          </Col>
        </Row>
      </Container>
      <Container className='bg-whole-grey'>
        <Row className='text-md-start text-center '>
          <Col xs={12} md={6} >
            <TaskManager></TaskManager>
          </Col>
          <Col xs={12} md={6} className=' mt-3 mt-md-0 '>
            <ChatComponent></ChatComponent>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
