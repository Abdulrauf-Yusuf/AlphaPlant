import React from 'react';
import {Container, Row, Col, Image, Carousel} from 'react-bootstrap'
import TestOne from './img/Group 6.png'
import TestTwo from './img/Group 7.png'
import TestThree from './img/Group 8.png'

const Testimonial = () =>{
    return (
        <div className='mt-4 mb-4 pt-5 pb-4' style={{backgroundColor:'#0C3C36'}}>
             <Row className="text-center mb-4">
                  <Col>
                  <h1  style={{color:'#fff',borderBottom: '2px solid #0C3C36', display:'inline'}}>Our Testimonial</h1>
                  </Col></Row>
            <Container>
                <Carousel data-bs-theme="dark">
                    <Carousel.Item className='text-center'>
                                <Image src={TestOne} />  <Image src={TestTwo} />  <Image src={TestTwo} />
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                            <Image src={TestTwo} />  <Image src={TestTwo} />  <Image src={TestTwo} />  
                    </Carousel.Item>
                    <Carousel.Item className='text-center'>
                            <Image src={TestThree} />  <Image src={TestTwo} />  <Image src={TestTwo} />  
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
    )
}

export default Testimonial

