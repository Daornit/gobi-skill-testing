import React from 'react';
import { Container, Row } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

import Post from '../Post';

import './detailable-section.css';

const DetailableSection = (props) => {
  return (
    <Container className="detail">
      <h3 className="section__name">{props.name}</h3>
      <Row>
        <Post 
          xs={12} 
          md={3} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/IPlKzXJdkqFnvFbC0sQR.jpg"
        />
      </Row>
      <a href="#">Дэлгэрэнгүй <FontAwesomeIcon icon={faArrowRight}/></a>
    </Container>
  );
};

export default DetailableSection;