import React from 'react';

import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import './top-five-post.css';

const TopFivePost = () => {
  return (
    <Container className="top_five">
      <div className="top_five-text">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit ratione dolorem qui facere saepe quidem labore autem possimus dolores, veritatis recusandae</p>
      </div>
      <Row className="top_five-margin">
        <Col xs={12} md={4}>
          <div className="image-wrapper">
            <img src="http://www.gobi.mn/storage/products/July2018/8Tjqfj5NoiXjFkPD3g03.jpg" alt=""/>
          </div>
          <a href="#">
            <p className="top_five-title">Detail</p>
          </a>
        </Col>
        <Col xs={12} md={4}>
          <div className="image-wrapper">
            <img src="http://www.gobi.mn/storage/products/July2018/MN2hlXDLEaeLr8C99BaI.jpg" alt=""/>
          </div>
          <a href="#">
            <p className="top_five-title">Detail</p>
          </a>
        </Col>
        <Col xs={12} md={4}>
        <div className="image-wrapper">
          <img src="http://www.gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg" alt=""/>
        </div>
          <a href="#">
            <p className="top_five-title">Detail</p>
          </a>
        </Col>
      </Row>
      <Row className="top_five-margin">
        <Col xs={12} md={6}>
          <div className="image-wrapper">
            <img src="http://www.gobi.mn/storage/products/July2018/MzPXdqoxhKSZ6mdvXehD.jpg" alt=""/>
          </div>
          <a href="#">
            <p className="top_five-title">Detail</p>
          </a>
        </Col>
        <Col xs={12} md={6}>
          <div className="image-wrapper">
            <img src="http://www.gobi.mn/storage/products/July2018/IPlKzXJdkqFnvFbC0sQR.jpg" alt=""/>
          </div>
          <a href="#">
            <p className="top_five-title">Detail</p>
          </a>
        </Col>
      </Row>
    </Container>
  );
};

export default TopFivePost;