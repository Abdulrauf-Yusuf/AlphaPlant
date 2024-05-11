
import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from 'react-bootstrap';
import VastOne from './img/Rectangle 35.png';
import VastTwo from './img/Rectangle 36.png';
import DotOne from './img/Ellipse 4.png';
import DotTwo from './img/Ellipse 5.png';
import PotVine from './img/JML11 (1) 1.png';
import Image from 'react-bootstrap/Image';
import './Hero.css'

const Hero = () => {
    const [showDotOne, setShowDotOne] = useState(true);
    const [growShrink, setGrowShrink] = useState(false);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setShowDotOne(prevShowDotOne => !prevShowDotOne);
            setGrowShrink(prev => !prev);
        }, 2000);

        return () => clearInterval(intervalId); 
    }, []); 

    return (
        <div style={{ backgroundColor: '#0C3C36', color: '#D1FDD6' }}>
            <Container>
                <Row>
                {/* hero tex  */}
                    <Col sm={12} md={6}>
                        <Row >
                            <h1 style={{lineHeight:'60px', letterSpacing:'0.2em', fontWeight:'700'}}>Your Best Plant <br />Collections In <br />One Snap</h1>
                        </Row>
                        <Row className="mb-4">
                            <Col>
                                <Button variant="outline-light" className="text-light" style={{ backgroundColor: '#F67102', marginRight:'10px'}}>Get Started</Button>
                                <Button variant="outline-light" className="text-warning" style={{ backgroundColor: '#0C3C36' }}>View Collection</Button>
                            </Col>
                        </Row>
                    </Col>
                    {/* hero image  */}
                    <Col sm={12} md={6} className="mt-4">
                        <Row className="mb-3">
                            <Col><img src={VastOne} alt="vast 1" /></Col>
                            <Col className={growShrink ? 'grow-shrink' : ''}><Image src={PotVine} alt="Pot Vine" fluid /></Col>
                            <Col>{showDotOne && <img src={DotOne} alt="Dot One" />}</Col>
                        </Row>
                        <Row>
                            <Col>{!showDotOne && <img src={DotTwo} alt="Dot Two" />}</Col>
                            <Col></Col>
                            <Col className="mb-4"><img src={VastTwo} alt="vast 2" /> </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Hero;
