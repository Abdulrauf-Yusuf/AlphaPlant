import React from 'react';
import { Container, Image , Row, Col, Button} from 'react-bootstrap';
import Gopa from './img/Rectangle 18.png';
import whiteVine from './img/Rectangle 19.png';
import London from './img/Rectangle 22.png';
import Pine from './img/Rectangle 23.png'
import India from './img/Rectangle 24.png';


import './Indoor.css'

const Indoor = () => {
    return (
        <div>
            <Container>
                  <Row className="text-center mb-4">
                  <Col>
                  <h1  style={{color:'#0C3C36',borderBottom: '2px solid #0C3C36', display:'inline'}}>Indoor</h1>
                  </Col></Row>  
                <div className="indoor-container">
                    <div className="itemOne"><Image  src={Gopa} /></div>
                    <div className="itemTwo"><Image  src={whiteVine} /></div>
                    <div className="itemThree"><Image  src={London} /></div>
                    <div className="itemFour"><Image  src={Pine} /></div>
                    <div className=" itemFive"><Image  src={India} /></div>
                </div>
                <Row className="text-center mb-4">
                  <Col>
                    <Button variant='outline-success'>Get Started</Button>
                  </Col></Row> 
            </Container>
        </div>
    )
}
export default Indoor;