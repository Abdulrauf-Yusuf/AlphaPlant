import React from "react";
import{ Container,Button }from 'react-bootstrap';
import DecorOne from './img/Rectangle 7.png'
import DecorTwo from './img/Rectangle 5.png'
import DecorThree from './img/Rectangle 6.png'
import DecorFour from './img/Rectangle 8.png'
import './Collection.css'


const PlantCollection = ()  => {
    return(
        <Container>
            <div className="collection-container">
                <div className="colOne item item1">
                    <h1 style={{color:'#0c3c36', borderBottom:'2px solid #0c3c36', paddingBottom:'10px'}}>Plant Collections</h1>
                </div>
                <div className="col-content ColTwo item item2">
                    <img src={DecorOne} alt="dec" />
                </div>
                <div className="col-content colThree item item3">
                    <img src={DecorTwo} alt="dec" />
                </div>
                <div className="col-content colFour item item4">
                    <img src={DecorThree}  alt="dec"/>
                </div>
                <div className="col-content colFive item item5">
                    <img src={DecorFour} alt="dec" />
                </div>
                <div className="colSix item item6">
                    <Button variant="outline-success">View More</Button>
                </div>
                <div className="colSeven"></div>
            </div>
        </Container>
    )
};
export default PlantCollection;