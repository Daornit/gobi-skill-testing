import React from 'react';

import { Container, Row } from 'react-bootstrap';
import './top-five-post.css';

import Post from  '../Post';

const TopFivePost = () => {
  return (
    <Container className="top_five">
      <div className="top_five-text">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga velit ratione dolorem qui facere saepe quidem labore autem possimus dolores, veritatis recusandae</p>
      </div>
      <Row className="top_five-margin">
        <Post 
          xs={12} 
          md={4} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/8Tjqfj5NoiXjFkPD3g03.jpg"
        />
        <Post 
          xs={12} 
          md={4} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/MN2hlXDLEaeLr8C99BaI.jpg"
        />
        <Post 
          xs={12} 
          md={4} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/Otmdl3ZkR3QBmmJ7tQes.jpg"
        />
      </Row>
      <Row className="top_five-margin">
        <Post 
          xs={12} 
          md={6} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/MzPXdqoxhKSZ6mdvXehD.jpg"
        />
        <Post 
          xs={12} 
          md={6} 
          title="Detail"
          coverImg="http://www.gobi.mn/storage/products/July2018/IPlKzXJdkqFnvFbC0sQR.jpg"
        />
      </Row>
    </Container>
  );
};

export default TopFivePost;