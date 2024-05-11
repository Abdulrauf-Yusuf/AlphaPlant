import React, { useState, useEffect } from "react";
import './About.css';
import { Container, Image, Button, Row, Col } from 'react-bootstrap';
import VastOne from './img/Rectangle 15.png';
import VastTwo from './img/Rectangle 16.png';
import DotOne from './img/Ellipse 2.png';
import DotTwo from './img/Ellipse 3.png';

const About = () => {
    const [showDotOne, setShowDotOne] = useState(true);

    useEffect(() => {
        const intervalId = setInterval(()=>{
            setShowDotOne(prevShowDotOne => !prevShowDotOne);
        },5000);
        return () => clearInterval(intervalId); 
    },[]); 

    return (
        <div style={{ backgroundColor: '#0C3C36', padding: '20px' }}>
            <Container className='flex-container'>
                <div className='flex-item sub-container'>
                    <div>
                        <Image src={VastOne} fluid />
                    </div>
                    <div style={{ display: 'grid', margin: 'auto 0' }}>
                       { showDotOne && <Image src={DotTwo} />}
                    </div>
                    <div >
                        <Image src={VastTwo}  fluid/>
                    </div>
                </div>

                {/* text wrapper  */}
                <div className='flex-item'>
                <Row>
                    <Col style={{padding:'20px'}}>
                    <h1>About Us</h1>
                    <p>Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria)</p>
                    <Button variant="outline-light" style={{ backgroundColor: '#D29B6E', color: '#0C3C36' }}>View More</Button>
                    </Col>
                </Row>
                   <div style={{textAlign:'end'}}>
                      {!showDotOne &&  <Image src={DotOne}/>}
                   </div> 
                </div>
            </Container>
        </div>
    );
};

export default About;



