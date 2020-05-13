import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './hero.css';

const Hero = props => {
  return (
    <Container className="hero">
      <a href="#">
        <h1 className="centered__text">
          Hello Gobi
        </h1>
      </a>
      <div className="slider-dots">
        <div className="dot active"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="player">
        <div className="player__button">
          <FontAwesomeIcon icon={faChevronRight}/>
        </div>
        <div className="player__button">
          <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
      </div>
      <Row className="slider">
        <Col className="left" >
          <div className="positioned">
            <img src="/images/md1.jpg" alt=""/>
          </div>
          <p className="positioned__paragraph">Lorem ipsum dolor</p>
        </Col>
        <Col className="right">
          <img src="https://www.gobi.mn/imgs/homepage/Gobi2019.jpg" alt=""/>
        </Col>
      </Row>
    </Container>
  );
};

Hero.propTypes = {
  posts: PropTypes.array
};

export default Hero;