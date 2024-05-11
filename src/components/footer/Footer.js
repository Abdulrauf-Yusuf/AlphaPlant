import React from 'react';
import { Container,Image } from 'react-bootstrap';
import Logo from './img/tabler_plant-2.png';
import './Footer.css'
const Footer = () => {
    return(
        <div style={{backgroundColor:'#0C3C36'}}>
            <Container>
                <div className='grid-container'>
                    <div className='header'>
                        <Image src={Logo} /> <span >AlphaPlant</span>
                    </div>
                    <div className='content center'>
                            <p>Plants are mainly multicellular organisms, predominantly photosynthetic eukaryotes of the kingdom Plantae. Historically, plants were treated as one of two kingdoms including all living things that were not animals, and all algae and fungi were treated as plants. However, all current definitions of Plantae exclude the fungi and some algae, as well as the prokaryotes (the archaea and bacteria).</p>
                    </div>
                    <div className='category center '>
                        <ul>
                        <h3 >Category</h3>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Services</li>
                        </ul>
                    </div>
                    <div className='quick-links center'>
                            <ul>
                            <h3 >Quick Links</h3>
                                <li>Privacy Policy</li>
                                <li>Customer Services</li>
                                <li>Terms and Condition</li>
                            </ul>
                    </div>
                    <div className='contact center'>
                            <ul>
                            <h3 >Contact Us</h3>
                                <li>AlphaPlant@gmail.com</li>
                                <li>+2348139011252</li>
                            </ul>
                    </div>
                </div>
            </Container>
        </div>
    )
};

export default Footer;