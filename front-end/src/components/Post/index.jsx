import React from 'react';
import { Col } from 'react-bootstrap';

import './post.css';

const Post = (props) => {
  return (
    <Col className="post" xs={props.xs} md={props.md}>
      <div className="image-wrapper">
        <img src={props.coverImg} alt=""/>
      </div>
      <a href="#">
        <p className="post__title">{props.title}</p>
      </a>
    </Col>
  );
};

export default Post;