import React from "react";
import './Card.css'
import Flower from './img/noto_potted-plant.png';
import Twemoji from './img/twemoji_potted-plant.png';
import {Image, Container} from 'react-bootstrap'


const Card = () => {
  return(
    <Container>
    <div className="container-card ">
    <div className="header"><h1>What We Do</h1></div>
    <div className="card-container shadow one">
      <div className="card-header">
        <Image src={Flower}  alt="flower"/>
      </div>
      <div className="card-content">
        <h4 className="card-title">Air Refreshing Flowers</h4>
        <p>We sell nice scenting flowers that refresh your environments. They are healthy and medically confirmed to be hygienic</p>
      </div>
    </div>


    <div className="card-container shadow two">
      <div className="card-header">
        <Image src={Twemoji} />
      </div>
      <div className="card-content">
        <h4 className="card-title">Air Purifying Flowers</h4>
        <p>We sell nice scenting flowers that refresh your environments. They are healthy and medically confirmed to be hygienic</p>
      </div>
    </div>

    <div className="card-container shadow three">
      <div className="card-header">
        <Image src={Flower} />
      </div>
      <div className="card-content">
        <h4 className="card-title">Air Refreshing Flowers</h4>
        <p>We sell nice scenting flowers that refresh your environments. They are healthy and medically confirmed to be hygienic</p>
      </div>
    </div>

    </div>
    </Container>
  )
}

export default Card